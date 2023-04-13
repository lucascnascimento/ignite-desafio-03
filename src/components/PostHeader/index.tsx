import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IssueResponse } from "../../@types";
import { IconLabel } from "../IconLabel";
import { LinkButton } from "../LinkButton";

type PostHeaderProps = {
  issueInfo: IssueResponse;
};

export const PostHeader = ({ issueInfo }: PostHeaderProps) => {
  const { comments, html_url, title, user, updated_at } = issueInfo;

  const getCommentsText = () => {
    if (comments === 1) {
      return "1 comentário";
    }

    return `${comments} comentários`;
  };

  return (
    <section className="headerCard flex-col">
      <div className="flex justify-between">
        <LinkButton
          label="voltar"
          to=".."
          iconPosition="left"
          icon="chevronLeft"
        />
        <LinkButton label="ver no github" to={html_url} isExternalLink />
      </div>
      <h1 className="mt-20">{title}</h1>
      <div className="flex gap-24 mt-8">
        <IconLabel icon="gitHub">{user.login}</IconLabel>
        <IconLabel icon="calendarDay">
          <time>
            {formatDistanceToNow(new Date(updated_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </time>
        </IconLabel>
        <IconLabel icon="comment">{getCommentsText()}</IconLabel>
      </div>
    </section>
  );
};
