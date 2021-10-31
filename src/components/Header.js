/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/logo.png";
import { NavLink, BrowserRouter } from "react-router-dom";

function Header() {
  return (
    <div className="p-10 h-header text-black flex items-center justify-between z-50 shadow-defalut">
      <BrowserRouter forceRefresh={true}>
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
          <a className="nav-link hover:nav-link-hover">
            最新消息
          </a>
          <NavLink
            className="nav-link hover:nav-link-hover"
            to="/roadmap/district"
            activeStyle={{
              borderColor: "#0D706D",
            }}
          >
            自行車路線
          </NavLink>
          <a className="nav-link hover:nav-link-hover">
            單車租借
            <div className="nav-link-border group-hover:nav-link-hover"></div>
          </a>
          <a className="nav-link hover:nav-link-hover">
            騎乘小叮嚀
            <div className="nav-link-border group-hover:nav-link-hover"></div>
          </a>
          <a className="nav-link hover:nav-link-hover">
            相關連結
            <div className="nav-link-border group-hover:nav-link-hover"></div>
          </a>
          <a className="nav-link hover:nav-link-hover">
            Q & A
            <div className="nav-link-border group-hover:nav-link-hover"></div>
          </a>
          <a
           
            className="nav-link text-yellow-default hover:text-yellow-hover"
          >
            登入
          </a>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Header;
