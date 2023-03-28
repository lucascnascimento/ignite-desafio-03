import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type IconLabelProps = {
  icon: "userGroup" | "building" | "gitHub";
  children: ReactNode;
};

const ICONS = {
  userGroup: faUserGroup,
  building: faBuilding,
  gitHub: faGithub as IconProp,
};

export const IconLabel = ({ icon = "userGroup", children }: IconLabelProps) => {
  return (
    <div className="flex gap-8 items-center">
      <FontAwesomeIcon icon={ICONS[icon]} color="#3A536B" />
      <span>{children}</span>
    </div>
  );
};
