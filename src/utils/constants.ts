import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const ROUTES = {
  home: "/",
  post: "/post",
};

export const ICONS = {
  userGroup: faUserGroup,
  building: faBuilding,
  gitHub: faGithub as IconProp,
  arrowUpRightFromSquare: faArrowUpRightFromSquare,
  chevronLeft: faChevronLeft,
  calendarDay: faCalendarDay,
  comment: faComment,
};

export type Icon = keyof typeof ICONS;
