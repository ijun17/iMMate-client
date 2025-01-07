import {
  fetchMyCrews,
  fetchRecommendedCrews,
  fetchTopRankingCrews,
} from "@/api/crew";
import CrewCreationModal from "@/components/CrewCreationModal";
import { MainLayout } from "@/components/MainLayout";
import { Crew } from "@/types/api";
import { useQueries } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { createPortal } from "react-dom";

export const MainPage = () => {
  const results = useQueries({
    queries: [
      { queryKey: ["my_crew"], queryFn: fetchMyCrews, staleTime: Infinity },
      {
        queryKey: ["recommend_crew"],
        queryFn: fetchRecommendedCrews,
        staleTime: Infinity,
      },
      {
        queryKey: ["crew_ranking"],
        queryFn: fetchTopRankingCrews,
        staleTime: Infinity,
      },
    ],
  });

  return (
    <MainLayout>
      <ProfitCard />
      <CrewSection title="나의 크루" crews={results[0].data} actionText="+" />
      <CrewSection title="추천 크루" crews={results[1].data} />
      <CrewSection title="크루 랭킹" crews={results[2].data} />
    </MainLayout>
  );
};

const ProfitCard = () => {
  return (
    <div className="bg-purple-50 rounded-lg p-4 shadow mb-6">
      <h2 className="text-sm font-medium text-gray-400">내 공동 투자 수익률</h2>
      <p className="text-2xl font-bold">
        {(3650000).toLocaleString("ko-KR")}원
      </p>
      {/* <p className="text-sm text-gray-500">+ $20.51</p> */}
      <div className="flex items-center mt-2">
        {/* <div className="flex-1 bg-purple-200 h-1 rounded-full relative">
          <div
            className="absolute left-0 top-0 h-1 bg-purple-500 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div> */}
        <span className="text-sm font-medium text-red-500 ml-2">+3.12%</span>
      </div>
    </div>
  );
};

const CrewSection = (props: {
  title: string;
  crews?: Crew[];
  actionText?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        {props.actionText && (
          <>
            <button
              className="bg-purple-500 text-white p-1 text-sm rounded-md font-bold hover:bg-purple-600"
              onClick={() => setIsOpen(true)}
            >
              크루 만들기
            </button>
            {createPortal(
              <CrewCreationModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
              />,
              document.body
            )}
          </>
        )}
      </div>
      <div className="flex gap-4 pb-3 mb-3 px-2 w-full overflow-x-scroll">
        {props.crews &&
          props.crews.map((crew, index) => (
            <CrewCard key={index} crew={crew} />
          ))}
      </div>
    </>
  );
};

const CrewCard = ({ crew }: { crew: Crew }) => {
  return (
    <div
      className={
        "rounded-lg p-4 shadow min-w-40 w-40 hover:scale-105 transition-transform " +
        (!crew.investmentStyle ? "bg-gray-100" : "bg-white")
      }
    >
      <Link to="/crew/$crewId" params={{ crewId: crew.crewName }}>
        <h3 className="text-sm text-gray-400">
          {crew.investmentStyle || "5명 참여 대기중(1/5)"}
        </h3>
        <p className="text-xl font-bold">{crew.crewName}</p>
        <p className="text-sm text-purple-500">
          {crew.crewYield.toLocaleString("ko-KR")}원
        </p>
        <div className="flex items-center mt-2">
          {/* <div className="flex-1 bg-purple-200 h-1 rounded-full relative">
            <div
              className="absolute left-0 top-0 h-1 bg-purple-500 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div> */}
          {/* <span className="text-sm font-medium text-red-500 ml-2">
            {crew.crewYield}
          </span> */}
        </div>
      </Link>
    </div>
  );
};
