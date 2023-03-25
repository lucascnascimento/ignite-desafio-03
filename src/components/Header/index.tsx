import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-center bg-header bg-cover">
      <img src={logo} alt="" className="pt-64 pb-[134px]" />
    </header>
  );
};
