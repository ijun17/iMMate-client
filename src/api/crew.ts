import { apiClient } from "./apiClient";
import { Crew, MyProfitResponse } from "@/types/api";

export const fetchTopRankingCrews = async (): Promise<Crew[]> => {
  const { data } = await apiClient.get<Crew[]>("/api/crews/top-ranking");
  return data;
};

export const fetchRecommendedCrews = async (): Promise<Crew[]> => {
  const { data } = await apiClient.get<Crew[]>("/api/crews/recommended");
  return data;
};

export const fetchMyProfit = async (): Promise<MyProfitResponse> => {
  const { data } = await apiClient.get<MyProfitResponse>(
    "/api/crews/my-profit"
  );
  return data;
};

export const fetchMyCrews = async (): Promise<Crew[]> => {
  const { data } = await apiClient.get<Crew[]>("/api/crews/my-crews");
  return data;
};
