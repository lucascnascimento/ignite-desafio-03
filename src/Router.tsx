import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Home } from "./Pages/Home";
import { ROUTES } from "./utils/constants";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<DefaultLayout />}>
        <Route path={ROUTES.home} element={<Home />} />
      </Route>
    </Routes>
  );
};
