import { Link } from "react-router-dom";
import { CardInfo } from "../../@types";
import { ROUTES } from "../../utils/constants";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type CardProps = {
  cardInfo: CardInfo;
};

export const Card = ({ cardInfo }: CardProps) => {
  const { body, title, updated_at, number } = cardInfo;

  return (
    <Link to={`${ROUTES.post}/${number}`} state={{ number }}>
      <article className="bg-base-post rounded-[10px] p-32 h-[260px] hover:outline-2 hover:outline hover:outline-base-label">
        <div className="flex justify-between">
          <h1 className="text-xl">{title}</h1>
          <time className="text-base-span text-sm whitespace-nowrap ml-16">
            {" "}
            {formatDistanceToNow(new Date(updated_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </time>
        </div>

        <p className="text-base-text mt-20 overflow-hidden overflow-ellipsis line-clamp-5">
          {body}
        </p>
      </article>
    </Link>
  );
};
