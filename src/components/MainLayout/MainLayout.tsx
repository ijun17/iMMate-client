import { ReactElement } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return (
    <div className="bg-gray-50 min-h-screen h-screen flex flex-col">
      <Header />
      <main className="flex justify-center p-4 h-screen overflow-y-auto">
        <div className="max-w-screen-md w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
