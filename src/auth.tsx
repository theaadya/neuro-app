// src/auth.ts

export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem("token");
  };
  
  export const login = () => {
    localStorage.setItem("token", "dummy_token");
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
  };
  