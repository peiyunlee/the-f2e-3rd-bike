import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../utils/routes";
import data_news from '../assets/json/news.json'

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

  const _RenderBreadItem = () => {
    let list = [];
    location.pathname
      .split("/")
      .slice(0, 3)
      .forEach((ele, idx) => {
        if (idx === 0)
          list.push(
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
        else {
          const index = flattenRoutes.findIndex(
            (route) => route.pathname === ele
          );
          list.push(
            <FontAwesomeIcon
              key={`icon-${flattenRoutes[index].path}`}
              icon={faAngleRight}
              color="#333333"
              size="sm"
            />
          );
          list.push(
            <NavLink
              key={`navlink-${flattenRoutes[index].path}`}
              exact
              to={flattenRoutes[index].path}
              className="mx-2.5 text-sm hover:text-green-hover"
              activeClassName="text-green-default"
            >
              {flattenRoutes[index].breadcrumbName}
            </NavLink>
          );
        }
      });
    return list;
  };

  return (
    <div className="px-10 pt-6 flex items-center text-black">
      {_RenderBreadItem()}
    </div>
  );
}

export default Breadcrumb;
