import { Link } from "@tanstack/react-router";
import { ReactElement, useState } from "react";
import { createPortal } from "react-dom";
import AgendaCreationModal from "../AgendaCreationModal";

type Props = {
  children: ReactElement | ReactElement[];
  crewName: string;
  mainClassName?: React.ComponentProps<"div">["className"];
};

export const CrewLayout = ({ children, crewName, mainClassName }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen h-screen flex flex-col">
      <header className="flex-1 flex justify-center w-full  p-4 bg-white shadow-sm">
        <div className="max-w-screen-lg w-full flex items-center justify-between">
          <div className="flex gap-3 truncate">
            <button className="font-bold text-xl">
              <Link to="/">{"<"}</Link>
            </button>
            <h1 className="text-lg font-bold truncate">{crewName}</h1>
          </div>
          <button
            className="px-4 py-2 text-white bg-black rounded shrink-0"
            onClick={() => setIsOpen(true)}
          >
            안건 생성
          </button>
          {createPortal(
            <AgendaCreationModal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />,
            document.body
          )}
        </div>
      </header>
      <main
        className={
          "flex justify-center p-4 h-screen overflow-y-auto " + mainClassName
        }
      >
        <div className="max-w-screen-md w-full">{children}</div>
      </main>
      <footer className="flex-1 flex justify-center w-full bg-white p-4 shadow-sm border-t">
        <div className="max-w-screen-lg w-full flex items-center space-x-4">
          <input
            type="text"
            placeholder="안녕하세요"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button className="px-4 py-2 bg-black text-white rounded-lg">
            ➤
          </button>
        </div>
      </footer>
    </div>
  );
};
