import { Link } from "@tanstack/react-router";

export const Footer = () => {
  return (
    <footer className="flex-1 w-full bg-white border-t border-gray-200 flex justify-center">
      <div className="flex justify-between max-w-screen-lg w-full">
        <FooterIcon icon="🏠" label="홈" path="/" />
        <FooterIcon icon="📘" label="Book" path="" />
        <FooterIcon icon="🔔" label="Alerts" path="" />
        <FooterIcon icon="👤" label="마이페이지" path="/user" />
      </div>
    </footer>
  );
};

const FooterIcon = (props: { icon: string; label: string; path: string }) => {
  const currentPath = window.location.pathname;
  return (
    <Link
      to={props.path}
      className={"flex-1" + (currentPath === props.path ? " bg-gray-100" : "")}
    >
      <button className="flex flex-col items-center text-gray-400 p-4 w-full h-full">
        <span className="text-xl">{props.icon}</span>
        <span className="text-xs">{props.label}</span>
      </button>
    </Link>
  );
};
