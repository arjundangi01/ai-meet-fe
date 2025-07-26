import { env } from "@/env.mjs";

interface User {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

class AuthService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = env.NEXT_PUBLIC_API_URL;
  }

  initiateGoogleLogin() {
    window.location.href = `${this.baseUrl}/auth/google`;
  }

  setTokens(tokens: AuthTokens) {
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
  }

  getTokens(): AuthTokens | null {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) return null;

    return { accessToken, refreshToken };
  }

  removeTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  async refreshToken(): Promise<string | null> {
    const tokens = this.getTokens();
    if (!tokens) return null;

    try {
      const response = await fetch(`${this.baseUrl}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: tokens.refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        return data.accessToken;
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
    }

    return null;
  }

  async apiCall(endpoint: string, options: RequestInit = {}) {
    const tokens = this.getTokens();
    if (!tokens) throw new Error("No auth tokens found");

    let response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${tokens.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    // If token expired, try to refresh
    if (response.status === 401) {
      const newToken = await this.refreshToken();
      if (newToken) {
        response = await fetch(`${this.baseUrl}${endpoint}`, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${newToken}`,
            "Content-Type": "application/json",
          },
        });
      }
    }

    return response;
  }
}

export const authService = new AuthService();
