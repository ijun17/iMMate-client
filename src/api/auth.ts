import { apiClient } from "./apiClient";
import {
  AuthSignupRequest,
  AuthLoginRequest,
  AuthLoginResponse,
  AuthMeResponse,
} from "@/types/api";

export const signup = async (payload: AuthSignupRequest): Promise<void> => {
  await apiClient.post("/api/auth/signup", payload);
};

export const login = async (
  payload: AuthLoginRequest
): Promise<AuthLoginResponse> => {
  const { data } = await apiClient.post<AuthLoginResponse>(
    "/api/auth/login",
    payload
  );
  return data;
};

export const fetchAuthMe = async (): Promise<AuthMeResponse> => {
  const { data } = await apiClient.get<AuthMeResponse>("/api/auth/me");
  return data;
};
