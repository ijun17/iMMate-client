export const Footer = () => {
  return (
    <footer className="flex-1 w-full bg-white border-t border-gray-200 flex justify-center">
      <div className="flex justify-between max-w-screen-lg w-full">
        <FooterIcon icon="🏠" label="Home" />
        <FooterIcon icon="📘" label="Book" />
        <FooterIcon icon="🔔" label="Alerts" />
        <FooterIcon icon="👤" label="Profile" />
      </div>
    </footer>
  );
};

const FooterIcon = (props: { icon: string; label: string }) => {
  return (
    <button className="flex flex-col items-center text-gray-400 flex-1 p-4">
      <span className="text-xl">{props.icon}</span>
      <span className="text-xs">{props.label}</span>
    </button>
  );
};
