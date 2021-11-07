/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="p-9 h-header text-black flex items-center justify-between z-50 shadow-defalut shadow-md">
      <NavLink
        className="w-max grid grid-col-2 grid-rows-2 grid-flow-col shadow-text"
        to="/"
        activeClassName=""
      >
        <img className="row-span-2 mr-3" src={logo} alt="" />
        <h1 className="font-en tracking-widest">TAIWAN BIKE</h1>
        <h1>台灣自行車資訊網</h1>
      </NavLink>
      <div className="flex relative">
        <div className="group ml-8 w-max h-header flex items-center relative">
          <NavLink
            className="nav-link group-hover:nav-link-hover"
            to="/news"
            activeStyle={{
              borderColor: "#0D706D",
            }}
          >
            最新消息
          </NavLink>
          <div className="hidden group-hover:block absolute top-16 z-50 bg-green-default rounded translate-x-50-y-75 right-1/2">
            <NavLink
              className="nav-link group-hover:nav-link-hover border-0 text-white font-medium p-2 hover:text-yellow-disable"
              to="/news/announcement"
              activeStyle={{
                color: "#FEF2D5",
              }}
            >
              最新公告
            </NavLink>
            <div className="border-b-2 border-white w-5/6 mx-auto"></div>
            <NavLink
              className="nav-link group-hover:nav-link-hover border-0 text-white font-medium p-2 hover:text-yellow-disable"
              to="/news/activity"
              activeStyle={{
                color: "#FEF2D5",
              }}
            >
              活動資訊
            </NavLink>
          </div>
        </div>
        <div className="group ml-8 w-max h-header flex items-center relative">
          <NavLink
            className="nav-link group-hover:nav-link-hover"
            to="/roadmap"
            activeStyle={{
              borderColor: "#0D706D",
            }}
          >
            自行車路線
          </NavLink>
          <div className="hidden group-hover:block absolute top-16 z-50 bg-green-default rounded translate-x-50-y-75 right-1/2">
            <NavLink
              className="nav-link group-hover:nav-link-hover border-0 text-white font-medium p-2 hover:text-yellow-disable"
              to="/roadmap/district"
              activeStyle={{
                color: "#FEF2D5",
              }}
            >
              區域路線
            </NavLink>
            <div className="border-b-2 border-white w-5/6 mx-auto"></div>
            <NavLink
              className="nav-link group-hover:nav-link-hover border-0 text-white font-medium p-2 hover:text-yellow-disable"
              to="/roadmap/round"
              activeStyle={{
                color: "#FEF2D5",
              }}
            >
              環島路線
            </NavLink>
          </div>
        </div>
        <div className="group ml-8 w-max h-header flex items-center relative">
          <NavLink
            className="nav-link group-hover:nav-link-hover"
            to="/rent"
            activeStyle={{
              borderColor: "#0D706D",
            }}
          >
            單車租借
          </NavLink>
        </div>
        <div className="group ml-8 w-max h-header flex items-center relative">
          <NavLink
            className="nav-link group-hover:nav-link-hover"
            to="/safety"
            activeStyle={{
              borderColor: "#0D706D",
            }}
          >
            騎乘小叮嚀
          </NavLink>
        </div>
        <div className="group ml-8 w-max h-header flex items-center relative">
          <NavLink
            className="nav-link group-hover:nav-link-hover"
            to="/qa"
            activeStyle={{
              borderColor: "#0D706D",
            }}
          >
            Q & A
          </NavLink>
        </div>
        <div className="group ml-8 w-max h-header flex items-center relative">
          <a className="nav-link text-yellow-default group-hover:text-yellow-hover">
            登入
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
