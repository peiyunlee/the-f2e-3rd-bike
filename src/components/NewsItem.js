/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function NewsItem() {
  return (
    <a className="group newsitem">
      <div className="grid grid-flow-col gap-10 mr-20">
        <div className="mr-10 text-gray-default">一般公告</div>
        <div className="mr-10 text-gray-default">2021 / 10 / 27</div>
        <div className="group-hover:text-green-hover">
          最美伸展台 芝蘭公園海上觀景平台啟用
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleRight} color="#828282" size="lg" />
    </a>
  );
}

export default NewsItem;
