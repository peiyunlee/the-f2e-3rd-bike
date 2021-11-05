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
      <div className="flex">
        <NavLink
          className="group nav-link hover:nav-link-hover bottom-0"
          to="/news"
          activeStyle={{
            borderColor: "#0D706D",
          }}
        >
          <span>最新消息</span>
          <div className="w-full border-b-2 border-white mt-2 absolute bottom-4 group-hover:border-green-hover"></div>
          <div className="mt-3 hidden group-hover:flex hover:flex absolute w-max flex-col items-center bg-green-default -left-3 z-50 rounded translate-y-75">
            <NavLink
              className="nav-link border-0 w-full text-white m-0 px-3 py-2 font-medium hover:text-yellow-disable max-h-10"
              to="/news/announcement"
              activeStyle={{
                color: "#FEF2D5",
              }}
            >
              最新公告
            </NavLink>
            <div className="w-4/5 border-b-2 border-white"></div>
            <NavLink
              className="nav-link border-0 w-full text-white m-0 px-3 font-medium hover:text-yellow-disable max-h-10"
              to="/news/activity"
              activeStyle={{
                color: "#FEF2D5",
              }}
            >
              活動資訊
            </NavLink>
          </div>
        </NavLink>
        <NavLink
          className="group nav-link hover:nav-link-hover"
          to="/roadmap/district"
          activeStyle={{
            borderColor: "#0D706D",
          }}
        >
          <span>自行車路線</span>
          <div className="w-full border-b-2 border-white mt-2 absolute bottom-4 group-hover:border-green-hover"></div>
        </NavLink>
        <NavLink
          className="group nav-link hover:nav-link-hover"
          to="/rent"
          activeStyle={{
            borderColor: "#0D706D",
          }}
        >
          <span>單車租借</span>
          <div className="w-full border-b-2 border-white mt-2 absolute bottom-4 group-hover:border-green-hover"></div>
        </NavLink>
        <NavLink
          className="group nav-link hover:nav-link-hover"
          to="/safety"
          activeStyle={{
            borderColor: "#0D706D",
          }}
        >
          <span>騎乘小叮嚀</span>
          <div className="w-full border-b-2 border-white mt-2 absolute bottom-4 group-hover:border-green-hover"></div>
        </NavLink>
        <NavLink
          className="group nav-link hover:nav-link-hover"
          to="/link"
          activeStyle={{
            borderColor: "#0D706D",
          }}
        >
          <span>相關連結</span>
          <div className="w-full border-b-2 border-white mt-2 absolute bottom-4 group-hover:border-green-hover"></div>
        </NavLink>
        <NavLink
          className="group nav-link hover:nav-link-hover"
          to="/qa"
          activeStyle={{
            borderColor: "#0D706D",
          }}
        >
          <span>Q & A</span>
          <div className="w-full border-b-2 border-white mt-2 absolute bottom-4 group-hover:border-green-hover"></div>
        </NavLink>
        <a className="nav-link text-yellow-default hover:text-yellow-hover">
          登入
        </a>
      </div>
    </div>
  );
}

export default Header;
