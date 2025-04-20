import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
import random
from user_sig_weights import input_score_weights

emotion_types = list(input_score_weights.keys())
num_emotions = len(emotion_types)
emotion_emb_dim = 16  # you can adjust this

class MultiModalFusionNetwork(nn.Module):
    def __init__(
        self,
        emotion_dim=5,
        voice_dim=5,
        context_dim=1,
        emb_dim=emotion_emb_dim,
        hidden_dim=64,
        output_dims=3,
        adapter_dim=16
    ):
        super().__init__()
        # Embedding for emotion labels
        self.face_emb  = nn.Embedding(num_emotions, emb_dim)
        self.voice_emb = nn.Embedding(num_emotions, emb_dim)
        fused_dim = emb_dim*2 + 5 + 5 + 1
        self.fc1 = nn.Linear(fused_dim, hidden_dim)
        self.adapter = nn.Sequential(
            nn.Linear(hidden_dim, adapter_dim),
            nn.ReLU(),
            nn.Linear(adapter_dim, hidden_dim)
        )
        self.fc_out = nn.Linear(hidden_dim, output_dims)

    def forward(self, face_scores, voice_scores, context, face_idxs, voice_idxs):
        # 1) embed and weight by intensity
        f_e = self.face_emb(face_idxs)    # [B,5,emb_dim]
        v_e = self.voice_emb(voice_idxs)  # [B,5,emb_dim]

        # broadcast multiply each embedding by its corresponding score
        f_e = f_e * face_scores.unsqueeze(-1)   # [B,5,emb_dim]
        v_e = v_e * voice_scores.unsqueeze(-1)  # [B,5,emb_dim]

        # 2) pool each down to one vector
        f_vec = f_e.mean(dim=1)   # [B,emb_dim]
        v_vec = v_e.mean(dim=1)   # [B,emb_dim]

        # 3) build your fusion input
        x = torch.cat([f_vec, v_vec, face_scores, voice_scores, context], dim=-1)  # [B, emb*2 + 5 +5 +1]

        # 4) feed it through your FC stack
        h = F.relu(self.fc1(x))
        h = h + self.adapter(h)
        out = torch.sigmoid(self.fc_out(h))     # [B,3]
        return out

def generate_random_input_and_label():
    # Select 5 random emotions and generate random scores
    face_emotion_names = random.sample(emotion_types, 5)
    voice_emotion_names = random.sample(emotion_types, 5)
    face_emotions = [{"name": e, "score": random.uniform(0, 1)} for e in face_emotion_names]
    voice_emotions = [{"name": e, "score": random.uniform(0, 1)} for e in voice_emotion_names]
    task_score = random.uniform(0, 1)

    # Map names to indices
    face_emotion_idxs = [emotion_types.index(e) for e in face_emotion_names]
    voice_emotion_idxs = [emotion_types.index(e) for e in voice_emotion_names]

    # Get ground truth for combined scores
    combined = []
    for i in range(5):
        combined.append({"name": face_emotions[i]['name'], "score": face_emotions[i]['score']})
    for i in range(5):
        combined.append({"name": voice_emotions[i]['name'], "score": voice_emotions[i]['score']})
    combined.append({"name": "task_score", "score": task_score})
    label = find_ground_truth(combined)

    # Prepare tensors
    facial_tensor = torch.tensor([e['score'] for e in face_emotions], dtype=torch.float32)
    voice_tensor = torch.tensor([e['score'] for e in voice_emotions], dtype=torch.float32)
    task_tensor  = torch.tensor([task_score], dtype=torch.float32)
    face_idxs_tensor  = torch.tensor(face_emotion_idxs, dtype=torch.long)
    voice_idxs_tensor  = torch.tensor(voice_emotion_idxs, dtype=torch.long)
    y = torch.tensor([
        label['stress_score'],
        label['fatigue_score'],
        label['engagement_score']
    ], dtype=torch.float32)

    return facial_tensor, voice_tensor, task_tensor, face_idxs_tensor, voice_idxs_tensor, y

def find_ground_truth(all_inputs):
    output_score = {"stress_score":0, "engagement_score":0, "fatigue_score":0}
    for emo in all_inputs:
        label = emo['name']
        score = emo['score']
        for state in ['stress_score','engagement_score','fatigue_score']:
            output_score[state] += score * input_score_weights[label.lower()][state.replace('_score','')]
    total = sum(output_score.values())
    if total > 0:
        for state in output_score:
            output_score[state] /= total
    else:
        for state in output_score:
            output_score[state] = 1.0/3
    return output_score

def train_model(model, epochs=10):
    optimizer = optim.Adam(model.parameters(), lr=1e-3)
    loss_fn = nn.MSELoss()
    batch_size = 16

    for epoch in range(epochs):
        batch_e, batch_v, batch_t, batch_fidx, batch_vidx, batch_y = [], [], [], [], [], []
        for _ in range(batch_size):
            e, v, t, f_idxs, v_idxs, y = generate_random_input_and_label()
            batch_e.append(e)
            batch_v.append(v)
            batch_t.append(t)
            batch_fidx.append(f_idxs)
            batch_vidx.append(v_idxs)
            batch_y.append(y)

        e = torch.stack(batch_e)
        v = torch.stack(batch_v)
        t = torch.stack(batch_t)
        f_idxs = torch.stack(batch_fidx)
        v_idxs = torch.stack(batch_vidx)
        y = torch.stack(batch_y)

        out = model(e, v, t, f_idxs, v_idxs)
        loss = loss_fn(out, y)
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        if epoch % 10 == 0:
            print(f"Epoch {epoch}/{epochs}  Loss: {loss.item():.4f}")

def evaluate_model(model, test_size=100):
    model.eval()
    preds, labels = [], []
    with torch.no_grad():
        for _ in range(test_size):
            e, v, t, f_idxs, v_idxs, y = generate_random_input_and_label()
            out = model(e.unsqueeze(0), v.unsqueeze(0), t.unsqueeze(0), f_idxs.unsqueeze(0), v_idxs.unsqueeze(0))
            preds.append(out.squeeze(0))
            labels.append(y)

    preds = torch.stack(preds)
    labels = torch.stack(labels)
    mse = F.mse_loss(preds, labels).item()
    mae = F.l1_loss(preds, labels).item()
    cos = F.cosine_similarity(preds, labels, dim=1).mean().item()
    print(f"Eval → MSE: {mse:.4f}, MAE: {mae:.4f}, Cosine: {cos:.4f}")

if __name__ == '__main__':
    model = MultiModalFusionNetwork()
    train_model(model, epochs=100)
    torch.save(model.state_dict(), 'fusion_model_weights.pt')
    evaluate_model(model, test_size=200)
