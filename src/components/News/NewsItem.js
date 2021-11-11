/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function NewsItem({ data, type }) {
  return (
    <Link to={`/news/detail/${data.id}`} className="group newsitem hover:border-green-hover">
      <div className="grid grid-flow-col gap-10 mr-20 items-center">
        <div className="mr-10 text-gray-default">
          {type === "announcement" ? data.type : data.city}
        </div>
        <div className="mr-5 text-gray-default w-48 text-left">
          {type === "announcement" ? data.newsTime : data.activityTime}
        </div>
        <div className="group-hover:text-green-hover text-left">
          {data.title}
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleRight} color="#828282" size="lg" />
    </Link>
  );
}

export default NewsItem;
