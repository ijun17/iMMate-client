import { CrewLayout } from "@/components/CrewLayout";
import { Link, useParams } from "@tanstack/react-router";
import { useState } from "react";

type Comment = {
  name: string;
  profile: string;
  text: string;
};

const commentList: Comment[] = [
  {
    name: "일론 머스크",
    profile: "👨‍🚀",
    text: "애플은 안정적인 수익을 기록하고 있으며, 최근에도 강력한 실적 발표로 주가가 상승했습니다. 특히, 신제품 출시와 서비스 부문이 회사 성장에 중요한 역할을 하고 있습니다.",
  },
  {
    name: "스티브 잡스",
    profile: "🧑‍💻",
    text: "최근 주식 시장에서 중요한 뉴스 중 하나는 미국 연방준비제도의 금리 인상 우려입니다. 이로 인해 글로벌 주식 시장의 변동성이 커지고 있으며, 특히 기술주들이 영향을 받고 있습니다.",
  },
  {
    name: "봇",
    profile: "🤖",
    text: "삼성전자의 최근 주가는 현재 약 70,000원입니다. 이 주가는 최근 몇 주 동안 안정적인 상승세를 보였으며, 주식 시장의 변동성에 영향을 받고 있습니다.",
  },
];

export const CrewPage = () => {
  const { crewId } = useParams({ from: "/crew/$crewId/" });
  const [chatList, setChatList] = useState<Comment[]>(commentList);
  return (
    <CrewLayout
      crewName={crewId}
      onChat={(chat) =>
        setChatList([...chatList, { name: "me", text: chat, profile: "😊" }])
      }
    >
      {/* 메인 컨텐츠 */}
      <div className="space-y-6">
        {/* 중요한 안건 카드 */}
        <Agenda />

        {/* 댓글 섹션 */}
        <div className="space-y-4 pb-4">
          {chatList.map((chat, index) => (
            <Comment
              key={index}
              name={chat.name}
              avatar={chat.profile}
              text={chat.text}
            />
          ))}
        </div>
      </div>
    </CrewLayout>
  );
};

const Comment = ({
  name,
  avatar,
  text,
}: {
  name: string;
  avatar: string;
  text: string;
}) => (
  <div className="flex items-start space-x-2">
    <div className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center">
      {avatar}
    </div>
    <div
      className={
        "flex-1 bg-gray-200 rounded-lg px-4 py-2 " +
        (name === "me" ? "bg-blue-100" : "")
      }
    >
      <p className="text-sm text-gray-400 mb-1">{name}</p>
      <p>{text}</p>
    </div>
  </div>
);

const Agenda = () => {
  const { crewId } = useParams({ from: "/crew/$crewId/" });
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg">중요한 안건</h2>
        <p className="text-md text-gray-400">2025.01.07</p>
      </div>
      <div className="p-4 bg-gray-700 rounded-lg">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg mb-1">엔비디아</h3>
            <p className="text-sm text-gray-400">인공지능 인프라 수요 급증</p>
          </div>
          <div className="text-right">
            <p className="text-red-500">현재 비중 70%</p>
            <p>2,324,000원</p>
          </div>
        </div>
      </div>
      <button className="mt-4 text-sm text-gray-400 underline">
        <Link
          to="/crew/$crewId/agenda/$agendaId"
          params={{ crewId, agendaId: "test" }}
        >
          자세히 보기
        </Link>
      </button>
    </div>
  );
};
