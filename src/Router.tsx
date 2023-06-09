import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Home } from "./Pages/Home";
import { Post } from "./Pages/Post";
import { ROUTES } from "./utils/constants";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<DefaultLayout />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={`${ROUTES.post}/:id`} element={<Post />} />
      </Route>
    </Routes>
  );
};
