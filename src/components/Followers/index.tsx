import { IconLabel } from "../IconLabel";

type FollowersProps = {
  followers?: number;
};

export const Followers = ({ followers }: FollowersProps) => {
  let followersText = "";

  if (!followers) return null;

  if (followers === 1) {
    followersText = `${followers} seguidor`;
  } else {
    followersText = `${followers} seguidores`;
  }

  return <IconLabel icon={"userGroup"}>{followersText}</IconLabel>;
};
