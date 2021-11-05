import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink,useLocation } from "react-router-dom";
import routes from "../routes";

const flattenArr = (arr) =>
  arr.reduce(function (prev, item) {
    prev.push(item);
    return prev.concat(
      Array.isArray(item.routes) ? flattenArr(item.routes) : []
    );
  }, []);

const flattenRoutes = flattenArr(routes);

function Breadcrumb() {
  let location = useLocation();

  return (
    <div className="px-10 pt-6 flex items-center text-black">
      {location.pathname.split("/").map((ele, idx) => {
        if (idx === 0)
          return (
            <NavLink
              key={"/"}
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
              key={flattenRoutes[index].path}
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
    </div>
  );
}

export default Breadcrumb;
