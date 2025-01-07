import { useForm } from "react-hook-form";

type AgendaFormInputs = {
  title: string;
  category: string;
  reason: string;
};

const AgendaCreationModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AgendaFormInputs>();

  const onSubmit = (data: AgendaFormInputs) => {
    console.log("Submitted Agenda Data:", data);
    onClose(); // 제출 후 모달 닫기
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-xl font-bold">안건 생성</h2>
          <button className="text-2xl font-bold" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            {/* 안건 제목 */}
            <label className="block text-sm font-medium mb-1">안건 제목</label>
            <input
              type="text"
              placeholder="안건 제목"
              {...register("title", { required: "안건 제목을 입력해주세요." })}
              className="w-full border rounded p-2 text-sm"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">
                {errors.title.message}
              </p>
            )}

            {/* 종목 */}
            <label className="block text-sm font-medium mt-4 mb-1">종목</label>
            <select
              {...register("category", { required: "종목을 선택해주세요." })}
              className="w-full border rounded p-2 text-sm"
            >
              <option value="select" className="text-gray-500">
                종목 선택
              </option>
              <option value="애플">애플</option>
              <option value="삼성">삼성</option>
              <option value="구글">구글</option>
              <option value="엔비디아">엔비디아</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs mt-1">
                {errors.category.message}
              </p>
            )}

            {/* 안건 생성 사유 */}
            <label className="block text-sm font-medium mt-4 mb-1">
              안건 생성 사유
            </label>
            <textarea
              placeholder="안건 생성 사유"
              {...register("reason", {
                required: "안건 생성 사유를 입력해주세요.",
              })}
              className="w-full border rounded p-2 text-sm h-24 resize-none"
            ></textarea>
            {errors.reason && (
              <p className="text-red-500 text-xs mt-1">
                {errors.reason.message}
              </p>
            )}

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="bg-black text-white w-full mt-4 py-2 rounded"
            >
              안건 만들기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgendaCreationModal;
