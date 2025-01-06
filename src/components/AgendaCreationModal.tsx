const AgendaCreationModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold">hh</h2>
          <button className="text-2xl font-bold" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">안건 제목</label>
          <input
            type="text"
            defaultValue="더 중요한 안건"
            className="w-full border rounded p-2 text-sm"
          />

          <label className="block text-sm font-medium mt-4 mb-1">종목</label>
          <select className="w-full border rounded p-2 text-sm">
            <option>애플</option>
            <option>삼성</option>
            <option>구글</option>
          </select>

          <label className="block text-sm font-medium mt-4 mb-1">
            안건 생성 사유
          </label>
          <textarea
            defaultValue="애플은 안정적인 수익을 기록하고 있으며, 최근에도 강력한 실적 발표로 주가가 상승했습니다. 특히, 신제품 출시와 서비스 부문이 회사 성장에 중요한 역할을 하고 있습니다."
            className="w-full border rounded p-2 text-sm h-24 resize-none"
          ></textarea>

          <button className="bg-black text-white w-full mt-4 py-2 rounded">
            안건 만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgendaCreationModal;
