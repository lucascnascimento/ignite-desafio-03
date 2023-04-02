import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Icon, ICONS } from "../../utils/constants";

type LinkButtonProps = {
  label: string;
  icon?: Icon;
  iconPosition?: "left" | "right";
  isExternalLink?: boolean;
  to: string;
};

export const LinkButton = ({
  label,
  icon = "arrowUpRightFromSquare",
  iconPosition = "right",
  to,
  isExternalLink,
}: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className="flex gap-8 text-blue text-xs uppercase font-bold items-center"
      target={isExternalLink ? "_blank" : "_self"}
    >
      {iconPosition === "left" ? <FontAwesomeIcon icon={ICONS[icon]} /> : null}
      {label}
      {iconPosition === "right" ? <FontAwesomeIcon icon={ICONS[icon]} /> : null}
    </Link>
  );
};
