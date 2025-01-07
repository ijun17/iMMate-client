// msw/handlers.ts
import { http, HttpResponse } from "msw";

export const handlers = [
  // GET /api/broker-accounts
  http.get("*/api/broker-accounts", () => {
    const brokers = [
      "KB증권",
      "NH투자증권",
      "SK 증권",
      "한국투자증권",
      "iM 증권",
    ];
    const stocks = ["엔비디아", "SK하이닉스", "AMD", "애플", "인텔"];
    return HttpResponse.json(
      Array(5)
        .fill(null)
        .map((_, i) => ({
          brokerName: brokers[i],
          investmentAmount: (i + 1) * 1000000,
          evaluationAmount: (i + 1) * 1200000,
          stocks: Array(i + 1)
            .fill(null)
            .map((_, j) => ({
              stockName: stocks[j],
              investmentAmount: 1000000,
              evaluationAmount: 1200000,
              quantity: j + 1,
            })),
        }))
    );
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
      name: "me",
      investmentStyle: "빅테크 선호",
    });
  }),

  // GET /api/crews/top-ranking
  http.get("*/api/crews/top-ranking", () => {
    return HttpResponse.json([
      {
        crewName: "iMMate 크루",
        investmentStyle: "1등",
        crewYield: 2328490000,
      },
      {
        crewName: "DGB 크루",
        investmentStyle: "2등",
        crewYield: 1328490000,
      },
      {
        crewName: "iM 크루",
        investmentStyle: "3등",
        crewYield: 328490000,
      },
      {
        crewName: "부자 크루",
        investmentStyle: "4등",
        crewYield: 228490000,
      },
    ]);
  }),

  // GET /api/crews/recommended
  http.get("*/api/crews/recommended", () => {
    return HttpResponse.json([
      {
        crewName: "Crew B",
        investmentStyle: "균형잡힌 투자",
        crewYield: 1500000,
      },
      {
        crewName: "Crew B",
        investmentStyle: "수익률 상승",
        crewYield: 20000000,
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
        crewName: "iMMate 크루",
        investmentStyle: "빅테크 선호",
        crewYield: 2328490000,
      },
      {
        crewName: "생성한 크루",
        investmentStyle: "",
        crewYield: 0,
      },
    ]);
  }),
];
