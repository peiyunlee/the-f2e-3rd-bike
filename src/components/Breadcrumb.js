import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import routes from "../routes";

const flattenArr = (arr) =>
  arr.reduce(function (prev, item) {
    prev.push(item);
    return prev.concat(
      Array.isArray(item.routes) ? flattenArr(item.routes) : []
    );
  }, []);

const flattenRoutes = flattenArr(routes);

function Breadcrumb(props) {
  useEffect(() => {
    console.log(flattenRoutes);
  }, []);
  return (
    <div className="px-10 pt-6 flex items-center text-black">
      {props.location.pathname.split("/").map((ele, idx) => {
        if (idx === 0)
          return (
            <NavLink
              exact
              to={"/"}
              className="mx-2.5 text-sm hover:text-green-hover"
              activeClassName="text-green-default"
            >
              首頁
            </NavLink>
          );
        const index = flattenRoutes.findIndex(
          (route) => route.pathname === ele
        );
        return (
          <>
            <FontAwesomeIcon icon={faAngleRight} color="#333333" size="sm" />
            <NavLink
              exact
              to={flattenRoutes[index].path}
              className="mx-2.5 text-sm hover:text-green-hover"
              activeClassName="text-green-default"
            >
              {flattenRoutes[index].breadcrumbName}
            </NavLink>
          </>
        );
      })}
      {/* <NavLink
        exact
        to="/news/announcement"
        className="mx-2.5 text-sm hover:text-green-hover"
        activeClassName="text-green-default"
      >
        最新消息
      </NavLink>
      <FontAwesomeIcon icon={faAngleRight} color="#333333" size="sm" />
      <NavLink
        to="/news/announcement"
        className="mx-2.5 text-sm hover:text-green-hover"
        activeClassName="text-green-default"
      >
        最新公告
      </NavLink> */}
    </div>
  );
}

export default Breadcrumb;
