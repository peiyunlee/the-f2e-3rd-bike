/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function NewsItem({ data, type }) {
  return (
    <Link to={`/news/detail/${type}/${data.id}`} className="group newsitem hover:border-green-hover">
      <div className="grid xl:grid-flow-col xl:grid-rows-1 xl:grid-cols-none grid-template-columns-min-content md:mr-16 sm:mr-5 xl:items-center">
        <div className="xl:mr-16 mr-10 xl:mb-0 mb-3 text-gray-default xl:w-20 w-max xl:text-center text-left">
          {type === "announcement" ? data.type : data.city}
        </div>
        <div className="text-gray-default xl:w-48 w-max text-left md:mr-16">
          {type === "announcement" ? data.newsTime : data.activityTime}
        </div>
        <div className="group-hover:text-green-hover text-justify xl:grid-cols-none col-span-2">
          {data.title}
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleRight} color="#828282" size="lg" className="sm:block hidden"/>
    </Link>
  );
}

export default NewsItem;
