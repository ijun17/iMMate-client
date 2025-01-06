import { CrewLayout } from "@/components/CrewLayout";
import { Link, useParams } from "@tanstack/react-router";

const CrewAgendaPage = () => {
  const { crewId } = useParams({ from: "/crew/$crewId/agenda/$agendaId" });
  // const [selectedOption, setSelectedOption] = useState<string>("buy");
  return (
    <CrewLayout mainClassName="bg-gray-800">
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
              <span className="ml-auto text-gray-400">2024.12.22</span>
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
              <div className="flex mt-4 bg-gray-800 rounded-lg overflow-hidden">
                <button className="flex-1 py-2 bg-green-600 text-white">
                  BUY 10
                </button>
                <button className="flex-1 py-2 text-gray-400">HOLD 4</button>
                <button className="flex-1 py-2 text-gray-400">SELL 2</button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600" />
            <div className="bg-gray-700 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-400 mb-1">일론 머스크</p>
              <p>좋습니다</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600" />
            <div className="bg-gray-700 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-400 mb-1">스티브 잡스</p>
              <p>찬성합니다</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600" />
            <div className="bg-gray-700 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-400 mb-1">일반 사용자</p>
              <p>구웃~</p>
            </div>
          </div>
        </div>
      </div>
    </CrewLayout>
  );
};

export default CrewAgendaPage;
