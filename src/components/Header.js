/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as MenuIcon } from "../assets/icon/menu.svg";
import { ReactComponent as CloseIcon } from "../assets/icon/close.svg";
import { ReactComponent as UserIcon } from "../assets/icon/user.svg";
import { ReactComponent as ArrowIcon } from "../assets/icon/arrow-right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header({ setshowAuth }) {
  const [show, setshow] = useState(false);

  const _HndleClickBtn = (type = "toggle") => {
    if (type === "hide") setshow(false);
    else setshow(!show);
  };

  return (
    <>
      <div className="fixed top-0 w-full bg-white md:p-9 p-4 h-header text-black flex items-center justify-between z-40 shadow-defalut shadow-md text-sm">
        <NavLink
          className="w-max grid grid-col-2 grid-rows-2 grid-flow-col shadow-text"
          to="/"
          activeClassName=""
          onClick={() => _HndleClickBtn("hide")}
        >
          <img className="row-span-2 mr-3" src={logo} alt="" />
          <h1 className="font-en tracking-widest">TAIWAN BIKE</h1>
          <h1>台灣自行車資訊網</h1>
        </NavLink>
        <div className="hidden lg:flex relative">
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
              to="/route"
              activeStyle={{
                borderColor: "#0D706D",
              }}
            >
              自行車路線
            </NavLink>
            {/* <div className="hidden group-hover:block absolute top-16 z-50 bg-green-default rounded translate-x-50-y-75 right-1/2">
              <NavLink
                className="nav-link group-hover:nav-link-hover border-0 text-white font-medium p-2 hover:text-yellow-disable"
                to="/route/district"
                activeStyle={{
                  color: "#FEF2D5",
                }}
              >
                區域路線
              </NavLink>
              <div className="border-b-2 border-white w-5/6 mx-auto"></div>
              <NavLink
                className="nav-link group-hover:nav-link-hover border-0 text-white font-medium p-2 hover:text-yellow-disable"
                to="/route/store"
                activeStyle={{
                  color: "#FEF2D5",
                }}
              >
                常用路線
              </NavLink>
            </div> */}
          </div>
          <div className="group ml-8 w-max h-header flex items-center relative">
            <NavLink
              className="nav-link group-hover:nav-link-hover"
              to="/station"
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
            <a
              className="nav-link text-yellow-default group-hover:text-yellow-hover"
              onClick={() => setshowAuth(true)}
            >
              登入
            </a>
            {/* <UserIcon /> */}
          </div>
        </div>
        <div className="lg:hidden relative" onClick={_HndleClickBtn}>
          <div className={!show ? "block" : "hidden"}>
            <MenuIcon />
          </div>
          <div className={show ? "block" : "hidden"}>
            <CloseIcon />
          </div>
        </div>
      </div>
      <div
        className={`${
          show ? "fixed" : "hidden"
        } h-screen bg-white z-40 w-full px-7 md:px-16 pt-14`}
      >
        <div className="flex items-center relative mb-6 md:w-3/5 max-w-md md:max-w-full">
          <input
            className="input-text mb-2 py-2.5"
            type="text"
            placeholder="請輸入關鍵字"
          />
          <a className="absolute right-0 mb-2.5 mx-4">
            <FontAwesomeIcon icon={faSearch} size="lg" color="#333333" />
          </a>
        </div>
        <a
          className="mb-4 nav-link group flex items-center flex-row"
          onClick={() => setshowAuth(true)}
        >
          <span className="text-xl text-yellow-default group-hover:text-yellow-hover">
            登入
          </span>
          <ArrowIcon className="ml-3" />
        </a>
        {/* <div className="mb-4 nav-link group flex items-center flex-row">
          <UserIcon className="ml-1 mr-4" />
          <span className="text-xl text-yellow-default">
            已登入
          </span>
        </div> */}
        <div className="border-b border-gray-light mb-10"></div>
        <div className="grid md:grid-flow-col md:grid-cols-none grid-cols-2 gap-y-10 gap-x-10 md:max-w-full max-w-lg">
          <div className="grid gap-3 justify-start grid-rows-3">
            <span className="font-bold text-left tracking-wide md:text-xl">
              最新消息
            </span>
            <Link
              onClick={_HndleClickBtn}
              to="/news/announcement"
              className="text-left tracking-wide hover:text-green-hover"
            >
              最新公告
            </Link>
            <Link
              onClick={_HndleClickBtn}
              to="/news/activity"
              className="text-left tracking-wide hover:text-green-hover"
            >
              活動資訊
            </Link>
          </div>
          <div className="grid gap-3 justify-start grid-rows-3">
            <span className="font-bold text-left tracking-wide md:text-xl">
              自行車路線
            </span>
            <Link
              onClick={_HndleClickBtn}
              to="/route/district"
              className="text-left tracking-wide hover:text-green-hover"
            >
              區域路線
            </Link>
            {/* <Link onClick={_HndleClickBtn} to='/route/store' className="text-left tracking-wide hover:text-green-hover">常用路線</Link> */}
          </div>
          <div className="grid gap-3 justify-start grid-rows-3">
            <span className="font-bold text-left tracking-wide md:text-xl">
              單車租借
            </span>
            <Link
              onClick={_HndleClickBtn}
              to="/station/rent"
              className="text-left tracking-wide hover:text-green-hover"
            >
              站點資訊
            </Link>
            <Link
              onClick={_HndleClickBtn}
              to="/station/store"
              className="text-left tracking-wide hover:text-green-hover"
            >
              常用路線
            </Link>
          </div>
          <div className="grid gap-3 justify-start grid-rows-3">
            <span className="font-bold text-left tracking-wide md:text-xl">
              騎乘小叮嚀
            </span>
            <Link
              onClick={_HndleClickBtn}
              to="/safety"
              className="text-left tracking-wide hover:text-green-hover"
            >
              騎乘小叮嚀
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
