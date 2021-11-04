import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Breadcrumb() {
  return (
    <div className="px-10 pt-6 flex items-center text-black">
        <NavLink exact to="/" className="mx-2.5 text-sm" activeClassName="text-green-default">首頁</NavLink>
        <FontAwesomeIcon icon={faAngleRight} color="#333333" size="sm"/>
        <NavLink exact to="/news/announcement" className="mx-2.5 text-sm" activeClassName="text-green-default">最新消息</NavLink>
        <FontAwesomeIcon icon={faAngleRight} color="#333333" size="sm" />
        <NavLink to="/news/announcement" className="mx-2.5 text-sm" activeClassName="text-green-default">最新公告</NavLink>
    </div>
  );
}

export default Breadcrumb;
