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
    text: "신제품이 나왔네요",
  },
  {
    name: "봇",
    profile: "🤖",
    text: "엔비디아, 'RTX 4090급 성능' RTX 5070, 549달러에 출시...",
  },
];

const votes = { BUY: 4, SELL: 0, HOLD: 1 } as const;

const CrewAgendaPage = () => {
  const { crewId } = useParams({ from: "/crew/$crewId/agenda/$agendaId" });
  const [chatList, setChatList] = useState<Comment[]>(commentList);
  const [voting, setVoting] = useState("");

  return (
    <CrewLayout
      mainClassName="bg-gray-800"
      crewName={crewId}
      onChat={(chat) =>
        setChatList([...chatList, { name: "me", text: chat, profile: "😊" }])
      }
    >
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-white">
        {/* Important Notice */}
        <div className="flex items-start space-x-2">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <Link to="/crew/$crewId" params={{ crewId }}>
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Link>
              <span className="text-lg">중요한 안건</span>
              <span className="ml-auto text-gray-400">2025.01.07</span>
            </div>

            {/* Investment Card */}
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg mb-1">엔비디아</h3>
                  <p className="text-sm text-gray-400">
                    인공지능 인프라 수요 급증
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-red-500">현재 비중 70%</p>
                  <p>2,324,000원</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex mt-4 bg-gray-800 rounded-lg overflow-hidden mb-2">
                {Object.entries(votes).map(([key, value]) => (
                  <button
                    key={key}
                    className={
                      "flex-1 py-2 " +
                      (key === voting
                        ? "bg-green-600 text-white"
                        : "text-gray-400 hover:bg-gray-500")
                    }
                    onClick={() => setVoting(key)}
                  >
                    {key} {value + (key === voting ? 1 : 0)}
                  </button>
                ))}
              </div>

              <p className="text-gray-200">50XX이 나왔습니다!</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="space-y-4 pb-4">
          {chatList.map((chat, index) => (
            <div className="flex items-start space-x-2" key={index}>
              <div className="w-8 h-8 rounded-full bg-gray-600 flex justify-center items-center">
                {chat.profile}
              </div>
              <div
                className={
                  "flex-1 rounded-lg px-4 py-2 " +
                  (chat.name === "me" ? "bg-gray-500" : "bg-gray-700")
                }
              >
                <p className="text-sm text-gray-400 mb-1">{chat.name}</p>
                <p>{chat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CrewLayout>
  );
};

export default CrewAgendaPage;
