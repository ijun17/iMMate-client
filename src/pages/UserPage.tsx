import { fetchAuthMe } from "@/api/auth";
import { fetchBrokerAccounts } from "@/api/broker";
import { MainLayout } from "@/components/MainLayout";
import { BrokerAccount } from "@/types/api";
import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export const UserPage = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["broker"],
        queryFn: fetchBrokerAccounts,
        staleTime: Infinity,
      },
    ],
  });

  return (
    <MainLayout>
      <UserProfile />
      <Portfolio data={results[0].data} />
      <MyStocks data={results[0].data} />
    </MainLayout>
  );
};

const UserProfile = () => {
  const result = useQuery({
    queryKey: ["profile"],
    queryFn: fetchAuthMe,
    staleTime: Infinity,
  });
  return (
    <section className="bg-white p-4 rounded-lg shadow-sm mb-4 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a9 9 0 0115 0"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{result.data?.name}</h2>
          <p className="text-sm text-gray-500">
            {result.data?.investmentStyle}
          </p>
        </div>
      </div>
      <button className="bg-gray-800 text-white py-2 px-4 rounded-md w-full">
        로그아웃
      </button>
    </section>
  );
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#CCC"];

const Portfolio = React.memo(({ data }: { data?: BrokerAccount[] }) => {
  const stockList = data
    ? Object.values(
        data
          .map((broker) => broker.stocks)
          .flat()
          .reduce((prev: Record<string, typeof cur>, cur) => {
            if (!prev[cur.stockName]) prev[cur.stockName] = { ...cur };
            else {
              prev[cur.stockName].evaluationAmount += cur.evaluationAmount;
              prev[cur.stockName].investmentAmount += cur.investmentAmount;
              prev[cur.stockName].quantity += cur.quantity;
            }
            return prev;
          }, {})
      )
    : [];
  const chartData = stockList.map((stock) => ({
    name: stock.stockName,
    value: stock.evaluationAmount,
  }));
  return (
    <section className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <h3 className="text-lg font-semibold mb-4">포트폴리오</h3>
      <div className="flex">
        <div className="flex-1">
          <div className="relative w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
            <PieChart width={128} height={128}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={64}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="outline-none"
                  />
                ))}
              </Pie>
            </PieChart>
            <span className="absolute text-sm font-semibold">투자비율</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-1 text-gray-800">
          {stockList.map((stock, i) => (
            <div className="flex items-center text-sm" key={i}>
              <div
                style={{ background: COLORS[i % COLORS.length] }}
                className="w-4 h-4 mr-2"
              ></div>
              {stock.stockName}
            </div>
          ))}
        </div>
      </div>
      <div className="text-right text-red-500 font-bold text-lg">33.10%</div>
    </section>
  );
});

const MyStocks = ({ data }: { data?: BrokerAccount[] }) => (
  <section>
    <h3 className="text-lg font-semibold mb-2">내 증권</h3>
    <div className="space-y-4">
      {data &&
        data.map((broker) => (
          <StockCard
            key={broker.brokerName}
            name={broker.brokerName}
            amount={broker.evaluationAmount}
            change={
              (100 * (broker.evaluationAmount - broker.investmentAmount)) /
              broker.investmentAmount
            }
          />
        ))}
    </div>
  </section>
);

type StockCardProps = {
  name: string;
  amount: number;
  change: number;
};

const StockCard = ({ name, amount, change }: StockCardProps) => (
  <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
    <div>
      <p className="text-base font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{amount}원</p>
    </div>
    <div
      className={
        "font-bold " +
        (change > 0
          ? "text-red-500"
          : change < 0
            ? "text-blue-500"
            : "text-gray-500")
      }
    >
      {change}%
    </div>
  </div>
);
