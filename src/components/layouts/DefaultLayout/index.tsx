import { Outlet } from "react-router-dom";
import { Header } from "../../Header";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div className="max-w-[864px] mx-auto mt-[-82px]">
        <Outlet />
      </div>
    </>
  );
};
