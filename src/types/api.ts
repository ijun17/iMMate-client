export interface BrokerAccount {
  brokerName: string;
  investmentAmount: number;
  evaluationAmount: number;
  stocks: {
    stockName: string;
    investmentAmount: number;
    evaluationAmount: number;
    quantity: number;
  }[];
}

export interface AuthSignupRequest {
  email: string;
  password: string;
  name: string;
  investmentStyle: string;
}

export interface AuthLoginRequest {
  email: string;
  password: string;
}

export interface AuthLoginResponse {
  token: string;
}

export interface AuthMeResponse {
  email: string;
  name: string;
  investmentStyle: string;
}

export interface Crew {
  crewName: string;
  investmentStyle: string;
  crewYield: number;
}

export interface MyProfitResponse {
  totalProfit: number;
}
