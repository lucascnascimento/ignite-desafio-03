import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { ProfileSkeleton } from "../../components/Skeletons/ProfileSkeleton";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useSearchIssues } from "../../hooks/useSearchIssues";

export const Home = () => {
  const { data, isLoading } = useFetchUser(import.meta.env.VITE_USERNAME);
  useSearchIssues("");

  return (
    <>
      {isLoading || !data ? <ProfileSkeleton /> : <Profile user={data} />}
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
      <div className="grid grid-cols-2 gap-32 my-48">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
