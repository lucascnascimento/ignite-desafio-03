import { Header } from "./components/Header";
import { Profile } from "./components/Profile";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[864px] mx-auto">
        <div className="mt-[-10%]">
          <Profile />
        </div>
        <div className="mt-72">
          <div className="flex justify-between">
            <label
              htmlFor="searchInput"
              className="text-lg text-base-subtitle font-bold"
            >
              Publicações
            </label>
            <span className="text-sm text-base-span">6 publicações</span>
          </div>
          <input
            id="searchInput"
            type={"text"}
            placeholder="Buscar conteúdo"
            className="mt-12 w-full bg-base-input py-12 px-16 border border-base-border rounded-md placeholder:text-base-label text-base-text focus:outline-none focus:shadow-input-focus"
          />
        </div>
      </div>
    </>
  );
}

export default App;
