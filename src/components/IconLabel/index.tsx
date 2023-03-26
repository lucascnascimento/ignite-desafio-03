import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type IconLabelProps = {
  icon: IconProp;
  children: ReactNode;
};

export const IconLabel = ({ icon, children }: IconLabelProps) => {
  return (
    <div className="flex gap-8">
      <FontAwesomeIcon icon={"coffee"} color="white" />
      <span>{children}</span>
    </div>
  );
};
