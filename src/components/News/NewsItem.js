/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function NewsItem({ data, type }) {
  return (
    <Link to={`/news/detail/${type}/${data.id}`} className="group newsitem hover:border-green-hover">
      <div className="grid lg:grid-flow-col lg:grid-rows-1 lg:grid-cols-none grid-template-columns-min-content mr-16 lg:items-center">
        <div className="lg:mr-16 mr-10 lg:mb-0 mb-3 text-gray-default lg:w-20 w-max lg:text-center text-left">
          {type === "announcement" ? data.type : data.city}
        </div>
        <div className={`text-gray-default lg:w-48 w-max text-left ${type === "announcement" ? 'mr-16' : 'mr-16'} `}>
          {type === "announcement" ? data.newsTime : data.activityTime}
        </div>
        <div className="group-hover:text-green-hover text-justify lg:grid-cols-none col-span-2">
          {data.title}
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleRight} color="#828282" size="lg" />
    </Link>
  );
}

export default NewsItem;
