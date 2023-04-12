import { useLocation } from "react-router-dom";
import { PostHeader } from "../../components/PostHeader";
import { useFetchIssue } from "../../hooks/useFetchIssue";

export const Post = () => {
  const { state } = useLocation();
  const { data, isLoading } = useFetchIssue(state.number);

  return (
    <div>
      <PostHeader />
    </div>
  );
};
