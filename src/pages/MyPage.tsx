import { MainLayout } from "@/components/MainLayout";

export const MyPage = () => {
  return (
    <MainLayout>
      <UserProfile />
      <Portfolio />
      <MyStocks />
    </MainLayout>
  );
};

const UserProfile = () => (
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
        <h2 className="text-lg font-semibold">스티브 잡스</h2>
        <p className="text-sm text-gray-500">빅테크 선호</p>
      </div>
    </div>
    <button className="bg-gray-800 text-white py-2 px-4 rounded-md w-full">
      로그아웃
    </button>
  </section>
);

const Portfolio = () => (
  <section className="bg-white p-4 rounded-lg shadow-sm mb-4">
    <h3 className="text-lg font-semibold">포트폴리오</h3>
    <div className="flex items-center justify-center">
      <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center relative">
        {/* Pie Chart Example */}
        <svg
          className="w-28 h-28"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="transparent"
            stroke="#facc15"
            strokeWidth="3.2"
            strokeDasharray="30 70"
            transform="rotate(-90 18 18)"
          />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="transparent"
            stroke="#10b981"
            strokeWidth="3.2"
            strokeDasharray="20 80"
            strokeDashoffset="-30"
            transform="rotate(-90 18 18)"
          />
        </svg>
        <span className="absolute text-sm font-semibold">투자비율</span>
      </div>
    </div>
    <div className="text-right text-red-500 font-bold text-lg">33.10%</div>
  </section>
);

const MyStocks = () => (
  <section>
    <h3 className="text-lg font-semibold mb-2">내 증권</h3>
    <div className="space-y-4">
      <StockCard name="iM증권" amount="₩ 4,000,000" change="+40%" />
      <StockCard name="삼성증권" amount="₩ 500,000" change="+5%" />
      <StockCard name="토스증권" amount="₩ 2,000,000" change="+30%" />
    </div>
  </section>
);

type StockCardProps = {
  name: string;
  amount: string;
  change: string;
};

const StockCard = ({ name, amount, change }: StockCardProps) => (
  <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
    <div>
      <p className="text-base font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{amount}</p>
    </div>
    <div className="text-red-500 font-bold">{change}</div>
  </div>
);
