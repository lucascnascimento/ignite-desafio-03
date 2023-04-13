import { User } from "../../@types";
import { Followers } from "../Followers";
import { IconLabel } from "../IconLabel";
import { LinkButton } from "../LinkButton";

type ProfileProps = {
  user: User;
};

export const Profile = ({ user }: ProfileProps) => {
  const { avatar_url, company, followers, login, name, html_url, bio } = user;

  return (
    <section className="headerCard gap-32">
      <img src={avatar_url} alt="" className="w-[148px] h-[148px] rounded-lg" />
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1>{name}</h1>
          <LinkButton label="github" to={html_url} isExternalLink />
        </div>
        <p className="mt-8">{bio}</p>
        <div className="flex gap-24 mt-auto">
          {login && <IconLabel icon={"gitHub"}>{login}</IconLabel>}
          {company && <IconLabel icon={"building"}>{company}</IconLabel>}
          <Followers followers={followers} />
        </div>
      </div>
    </section>
  );
};
