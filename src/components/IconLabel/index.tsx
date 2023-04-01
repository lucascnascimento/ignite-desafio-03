import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, ICONS } from "../../utils/constants";

type IconLabelProps = {
  icon: Icon;
  children: ReactNode;
};

export const IconLabel = ({ icon = "userGroup", children }: IconLabelProps) => {
  return (
    <div className="flex gap-8 items-center">
      <FontAwesomeIcon icon={ICONS[icon]} color="#3A536B" />
      <span>{children}</span>
    </div>
  );
};
