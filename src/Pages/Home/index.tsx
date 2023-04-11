import { useState } from "react";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { ProfileSkeleton } from "../../components/Skeletons/ProfileSkeleton";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useSearchIssues } from "../../hooks/useSearchIssues";
import { debounce } from "lodash";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const { data: user, isLoading: isLoadingUser } = useFetchUser(
    import.meta.env.VITE_USERNAME
  );
  const { data: issues, isLoading: isLoadingIssues } =
    useSearchIssues(inputValue);

  const debounceInput = debounce((value: string) => {
    setInputValue(value);
  }, 500);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    debounceInput(value);
  };

  return (
    <>
      {isLoadingUser || !user ? <ProfileSkeleton /> : <Profile user={user} />}
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
          onChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-32 my-48">
        {isLoadingIssues || !issues?.items ? (
          <div>...Loading</div>
        ) : (
          issues.items.map((item) => <Card cardInfo={item} key={item.id} />)
        )}
      </div>
    </>
  );
};
