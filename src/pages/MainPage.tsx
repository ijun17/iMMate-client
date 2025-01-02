import { MainLayout } from "@/components/MainLayout";

type Crew = {
  name: string;
  value: string;
  change: string;
};

export const MainPage = () => {
  return (
    <MainLayout>
      <ProfitCard />
      <CrewSection title="나의 크루" actionText="+" />
      <CrewSection title="추천 크루" />
      <CrewSection title="크루 랭킹" />
    </MainLayout>
  );
};

const ProfitCard = () => {
  return (
    <div className="bg-purple-50 rounded-lg p-4 shadow mb-6">
      <h2 className="text-sm font-medium text-gray-700">내 공동 투자 수익률</h2>
      <p className="text-2xl font-bold">$365.51</p>
      <p className="text-sm text-gray-500">$365.51</p>
      <div className="flex items-center mt-2">
        <div className="flex-1 bg-purple-200 h-1 rounded-full relative">
          <div
            className="absolute left-0 top-0 h-1 bg-purple-500 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <span className="text-sm font-medium text-red-500 ml-2">+3.12%</span>
      </div>
    </div>
  );
};

const CrewSection = ({
  title,
  actionText,
}: {
  title: string;
  actionText?: string;
}) => {
  const crews: Crew[] = [
    { name: "일론 머스크 크루", value: "365만원", change: "+3.12%" },
    { name: "IT Tech Group 1", value: "365만원", change: "+3.12%" },
    { name: "IT Tech Group 1", value: "365만원", change: "+3.12%" },
    { name: "일론 머스크 크루", value: "365만원", change: "+3.12%" },
    { name: "IT Tech Group 1", value: "365만원", change: "+3.12%" },
    { name: "IT Tech Group 1", value: "365만원", change: "+3.12%" },
  ];
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {actionText && (
          <button className="text-purple-500 text-2xl font-bold hover:text-purple-600">
            {actionText}
          </button>
        )}
      </div>
      <div className="flex gap-4 pb-3 mb-3 px-2 w-full overflow-x-scroll">
        {crews.map((crew, index) => (
          <CrewCard key={index} crew={crew} />
        ))}
      </div>
    </>
  );
};

const CrewCard = ({ crew }: { crew: Crew }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow min-w-40 w-40 hover:scale-105 transition-transform">
      <h3 className="text-sm font-semibold">{crew.name}</h3>
      <p className="text-xl font-bold">{crew.value}</p>
      <p className="text-sm text-gray-500">$365.51</p>
      <div className="flex items-center mt-2">
        <div className="flex-1 bg-purple-200 h-1 rounded-full relative">
          <div
            className="absolute left-0 top-0 h-1 bg-purple-500 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <span className="text-sm font-medium text-red-500 ml-2">
          {crew.change}
        </span>
      </div>
    </div>
  );
};
