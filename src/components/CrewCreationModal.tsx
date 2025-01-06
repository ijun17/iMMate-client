const CrewCreationModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">크루 생성</h2>
          <button
            className="text-2xl text-gray-600 hover:text-black"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">크루 이름</label>
            <input
              type="text"
              placeholder="크루 이름"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">크루 설명</label>
            <textarea
              placeholder="이 크루는 해외 주식에 투자하는 크루입니다."
              className="w-full h-32 resize-none p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={3}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              크루 카테고리
            </label>
            <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>선택</option>
              <option>IT</option>
              <option>금융</option>
              <option>기타</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              최소 투자 비용
            </label>
            <div>
              <input type="range" min="0" max="1000" className="w-full" />
              <div className="flex justify-between text-sm text-gray-500">
                <span>0원</span>
                <span>1000만원</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">투자 종목</label>
            <input
              type="text"
              placeholder="AMD"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
            />
            <div className="flex gap-2">
              {["인텔", "엔비디아", "테슬라", "애플"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="px-3 py-1 border rounded-full text-sm text-gray-600 hover:bg-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            크루 만들기
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrewCreationModal;
