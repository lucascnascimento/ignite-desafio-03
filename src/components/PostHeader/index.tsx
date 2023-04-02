import { IconLabel } from "../IconLabel";
import { LinkButton } from "../LinkButton";

export const PostHeader = () => {
  return (
    <section className="headerCard flex-col">
      <div className="flex justify-between">
        <LinkButton
          label="voltar"
          to=".."
          iconPosition="left"
          icon="chevronLeft"
        />
        <LinkButton label="ver no github" to="www.github.com" />
      </div>
      <h1 className="mt-20">JavaScript data types and data structures</h1>
      <div className="flex gap-24 mt-8">
        <IconLabel icon="gitHub">cameronwll</IconLabel>
        <IconLabel icon="calendarDay">
          <time>Há 1 dia</time>
        </IconLabel>
        <IconLabel icon="comment">5 comentários</IconLabel>
      </div>
    </section>
  );
};
