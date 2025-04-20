import sounddevice as sd
import soundfile as sf
import tempfile
import asyncio
import os
from hume import HumeBatchClient
from hume.models.config import BurstConfig

# Replace with your actual Hume API key
HUME_API_KEY = "Sk9KTQxkPsTG1VhrpwRx86HH3zcAXGFCwOLzDSjWKXN60ZCt"

# Audio settings
SAMPLE_RATE = 16000
CHANNELS = 1
DURATION = 5  # Record 5 seconds

def record_audio(duration, samplerate, channels):
    print("🎙️  Recording...")
    recording = sd.rec(int(duration * samplerate), samplerate=samplerate, channels=channels, dtype='int16')
    sd.wait()
    print("✅ Recording complete.")
    return recording

async def analyze_audio():
    client = HumeBatchClient(HUME_API_KEY)
    config = BurstConfig()

    # Record audio and save to temp WAV
    audio_data = record_audio(DURATION, SAMPLE_RATE, CHANNELS)

    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as temp_wav:
        sf.write(temp_wav.name, audio_data, SAMPLE_RATE, format='WAV', subtype='PCM_16')
        print(f"📁 Saved temp audio file: {temp_wav.name}")

        # Submit job to Hume
        job = client.submit_job(None, [config], files=[temp_wav.name])
        print("🚀 Job submitted. Waiting for results...")

        # Wait for job completion
        job.await_complete()
        os.remove(temp_wav.name)
        predictions = job.get_predictions()

        # Print emotion predictions
        burst_preds = predictions[0]["results"]["predictions"][0]["models"]["burst"]["grouped_predictions"][0]["predictions"][0]
        if burst_preds:
            emotions = burst_preds["emotions"]
            print("🧠 Detected Emotions:")
            for e in emotions:
                print(f"  {e['name']}: {e['score']:.3f}")
            print("-" * 40)
        else:
            print("No emotions detected.")

if __name__ == "__main__":
    asyncio.run(analyze_audio())
