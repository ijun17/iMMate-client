// msw/handlers.ts
import { http, HttpResponse } from "msw";

export const handlers = [
  // GET /api/broker-accounts
  http.get("*/api/broker-accounts", () => {
    return HttpResponse.json(
      Array(5)
        .fill(null)
        .map((_, i) => ({
          brokerName: "증권사 " + (i + 1),
          investmentAmount: (i + 1) * 1000,
          evaluationAmount: (i + 1) * 1200,
          stocks: Array(i + 1)
            .fill(null)
            .map((_, j) => ({
              stockName: "주식 " + (j + 1),
              investmentAmount: 1000,
              evaluationAmount: 1200,
              quantity: j + 1,
            })),
        }))
    );
    return HttpResponse.json([
      {
        brokerName: "Broker A",
        investmentAmount: 1000,
        evaluationAmount: 1200,
        stocks: [
          {
            stockName: "Stock A",
            investmentAmount: 500,
            evaluationAmount: 600,
            quantity: 10,
          },
        ],
      },
    ]);
  }),

  // POST /api/auth/signup
  http.post("*/api/auth/signup", () => {
    return new HttpResponse(null, { status: 200 });
  }),

  // POST /api/auth/login
  http.post("*/api/auth/login", () => {
    return HttpResponse.json({
      token: "mock-token",
    });
  }),

  // GET /api/auth/me
  http.get("*/api/auth/me", () => {
    return HttpResponse.json({
      email: "user@example.com",
      name: "John Doe",
      investmentStyle: "Aggressive",
    });
  }),

  // GET /api/crews/top-ranking
  http.get("*/api/crews/top-ranking", () => {
    return HttpResponse.json([
      {
        crewName: "Crew A",
        investmentStyle: "Conservative",
        crewYield: 10,
      },
    ]);
  }),

  // GET /api/crews/recommended
  http.get("*/api/crews/recommended", () => {
    return HttpResponse.json([
      {
        crewName: "Crew B",
        investmentStyle: "Balanced",
        crewYield: 15,
      },
    ]);
  }),

  // GET /api/crews/my-profit
  http.get("*/api/crews/my-profit", () => {
    return HttpResponse.json({
      totalProfit: 200,
    });
  }),

  // GET /api/crews/my-crews
  http.get("*/api/crews/my-crews", () => {
    return HttpResponse.json([
      {
        crewName: "Crew C",
        investmentStyle: "Aggressive",
        crewYield: 20,
      },
    ]);
  }),
];
