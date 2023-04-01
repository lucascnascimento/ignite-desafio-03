import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

export const Card = () => {
  return (
    <Link to={ROUTES.post}>
      <article className="bg-base-post rounded-[10px] p-32 h-[260px] hover:outline-2 hover:outline hover:outline-base-label">
        <div className="flex gap-16">
          <h1 className="text-xl">JavaScript data types and data structures</h1>
          <time className="text-base-span text-sm whitespace-nowrap">
            {" "}
            Há 1 dia
          </time>
        </div>

        <p className="text-base-text mt-20 overflow-hidden overflow-ellipsis line-clamp-5">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types: let foo = 42; // foo is now a number
          foo = 'bar'; // foo is now a string foo = true; // foo is now a
          boolean
        </p>
      </article>
    </Link>
  );
};
