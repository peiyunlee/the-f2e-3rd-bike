import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Breadcrumb() {
  return (
    <div className="px-10 pt-6 flex items-center text-black">
        <span className="mx-2.5">首頁</span>
        <FontAwesomeIcon icon={faAngleRight} color="#333333"/>
        <span className="mx-2.5">最新消息</span>
        <FontAwesomeIcon icon={faAngleRight} color="#333333" />
        <span className="mx-2.5">最新公告</span>
    </div>
  );
}

export default Breadcrumb;
