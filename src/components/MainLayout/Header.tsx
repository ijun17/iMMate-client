export const Header = () => {
  return (
    <header className="flex-1 flex justify-center p-4 bg-white">
      <div className="flex justify-between items-center max-w-screen-lg w-full">
        <h1 className="text-xl font-bold">iMMate</h1>
        <button>
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
              d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
