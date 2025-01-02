import Logo from "@/assets/logo.svg?react";
import HamburgerMenuIcon from "@/assets/hamburger_menu_icon.svg?react";

export const Header = () => {
  return (
    <header className="flex-1 flex justify-center p-4 bg-white">
      <div className="flex justify-between items-center max-w-screen-lg w-full">
        <Logo />
        <button>
          <HamburgerMenuIcon />
        </button>
      </div>
    </header>
  );
};
