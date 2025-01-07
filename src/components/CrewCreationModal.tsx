import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  description: string;
  investmentAmount: number;
  investmentItems: string[];
}

const CrewCreationModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [customItems, setCustomItems] = useState<string[]>([]); // 추가된 아이템 관리

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", { ...data, investmentItems: customItems });
    onClose(); // 제출 후 모달 닫기
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.currentTarget.value.trim() !== "") {
      const newItem = event.currentTarget.value.trim();
      if (!customItems.includes(newItem)) {
        setCustomItems((prev) => [...prev, newItem]);
      }
      event.currentTarget.value = ""; // 입력 필드 초기화
      event.preventDefault(); // 기본 동작 방지
    }
  };

  const handleRemoveItem = (item: string) => {
    setCustomItems((prev) => prev.filter((i) => i !== item));
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">크루 이름</label>
            <input
              type="text"
              placeholder="크루 이름"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("name", {
                required: "크루 이름은 필수 항목입니다.",
              })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">크루 설명</label>
            <textarea
              placeholder="크루 설명"
              className="w-full h-32 resize-none p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={3}
              {...register("description")}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              최소 투자 비용
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              defaultValue="50"
              className="w-full"
              {...register("investmentAmount", { valueAsNumber: true })}
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>0원</span>
              <span className="text-blue-400">
                {watch("investmentAmount", 50)}만원
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">투자 종목</label>
            <input
              type="text"
              placeholder="엔터로 항목 추가"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
              onKeyDown={handleKeyDown}
            />
            <div className="flex gap-2 flex-wrap">
              {customItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="px-3 py-1 border rounded-full text-sm text-gray-600 hover:bg-gray-100"
                  onClick={() => handleRemoveItem(item)}
                >
                  {item} &times;
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
