import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../utils/routes";
import news from "../assets/newSort";

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
    let isDetail = false;
    const pathNameArr = location.pathname.split("/");
    pathNameArr.slice(1, 4).forEach((ele,idx) => {
      let pathName = "";
      let toPath = "";
      let breadcrumbName = "";
      if (ele !== "detail") {
        const index = flattenRoutes.findIndex(
          (route) => route.pathname === ele
        );

        pathName = flattenRoutes[index].pathname;
        toPath = flattenRoutes[index].path;
        breadcrumbName = flattenRoutes[index].breadcrumbName;

        list.push(
          <FontAwesomeIcon
            key={`icon-${pathName}`}
            icon={faAngleRight}
            color="#333333"
            size="sm"
          />
        );
        list.push(
          <NavLink
            key={`navlink-${pathName}`}
            exact
            to={toPath}
            className="mx-2.5 text-sm hover:text-green-hover min-w-max"
            activeClassName="text-green-default"
          >
            {breadcrumbName}
          </NavLink>
        );

        if (isDetail && idx === 2) {
          pathName = `detail-${pathNameArr[4]}`;
          toPath = location;
          breadcrumbName = news[pathNameArr[4]].title;

          list.push(
            <FontAwesomeIcon
              key={`icon-${pathName}`}
              icon={faAngleRight}
              color="#333333"
              size="sm"
            />
          );
          list.push(
            <NavLink
              key={`navlink-${pathName}`}
              exact
              to={toPath}
              className="mx-2.5 text-sm hover:text-green-hover min-w-max"
              activeClassName="text-green-default"
            >
              {breadcrumbName}
            </NavLink>
          );
        }
      } else isDetail = true;
    });
    return list;
  };

  return (
    <div className="mt-header md:px-10 px-5 pt-6 flex items-center text-black max-w-7xl m-auto">
      <NavLink
        key={"/"}
        exact
        to={"/"}
        className="mr-2.5 text-sm hover:text-green-hover min-w-max"
        activeClassName="text-green-default"
      >
        首頁
      </NavLink>
      {_RenderBreadItem()}
    </div>
  );
}

export default Breadcrumb;
