import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="bg-green-bg">
      <div className="flex px-10 py-7 justify-between">
        <div>
          <NavLink
            className="w-max grid grid-col-2 grid-rows-2 grid-flow-col shadow-text mb-5"
            to="/"
            activeClassName=""
          >
            <img className="row-span-2 mr-3" src={logo} alt="" />
            <h1 className="font-en tracking-widest">TAIWAN BIKE</h1>
            <h1>台灣自行車資訊網</h1>
          </NavLink>
          <div className="text-sm font-enNormal">
            ©2021 , Taiwan Bike. All Rights Reserved.
          </div>
        </div>
        <div className="grid grid-flow-col items-start gap-12 pr-16">
          <div className="grid justify-items-start gap-4">
            <div className="font-bold font-ch tracking-wide">最新消息</div>
            <Link className="font-ch tracking-wide" to="/news/announcement">
              最新公告
            </Link>
            <Link className="font-ch tracking-wide" to="/news/activity">
              活動資訊
            </Link>
          </div>
          <div className="grid justify-items-start gap-4">
            <div className="font-bold font-ch tracking-wide">自行車路線</div>
            <Link className="font-ch tracking-wide" to="/roadmap/district">
              區域路線
            </Link>
            <Link className="font-ch tracking-wide" to="/roadmap/store">
              常用路線
            </Link>
          </div>
          <div className="grid justify-items-start gap-4">
            <div className="font-bold font-ch tracking-wide">單車租借</div>
            <Link className="font-ch tracking-wide" to="/">
              單車租借
            </Link>
          </div>
          <div className="grid justify-items-start gap-4">
            <div className="font-bold font-ch tracking-wide">騎乘小叮嚀</div>
            <Link className="font-ch tracking-wide" to="/">
              騎乘小叮嚀
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
