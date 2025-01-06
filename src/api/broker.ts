import { apiClient } from "./apiClient";
import { BrokerAccount } from "@/types/api";

export const fetchBrokerAccounts = async (): Promise<BrokerAccount[]> => {
  const { data } = await apiClient.get<BrokerAccount[]>("/api/broker-accounts");
  return data;
};
