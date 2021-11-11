/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import NewsItem from "../components/News/NewsItem";

import main from "../assets/main.png";
import bike from "../assets/icon/bike.png";
import timeline from "../assets/icon/timeline.png";

function Home({ news_announcement,news_activity }) {
  return (
    <div className="pb-16">
      <div className="relative h-full">
        <img className="w-screen" src={main} alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <h2 className="text-white tracking-widest mb-8">台灣自行車資訊網</h2>
          <div className="flex items-center">
            <input
              className="input-text mb-2 py-2.5"
              type="text"
              placeholder="請輸入關鍵字"
            />
            <a className="absolute right-0 mb-2.5 mx-4">
              <FontAwesomeIcon icon={faSearch} size="lg" color="#333333" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-12 grid grid-flow-col gap-20 justify-center">
        <Link
          className="shadow-md bg-green-default py-4 flex items-center justify-center w-96 rounded hover:bg-green-hover"
          to="/route/district/"
        >
          <img className="w-10" src={timeline} alt="" />
          <span className="font-bold text-white text-2xl ml-6 mr-4">自行車路線</span>
        </Link>
        <Link
          className="shadow-md bg-yellow-default py-4 flex items-center justify-center w-96 rounded hover:bg-yellow-hover"
          to="/station/"
        >
          <img className="w-10" src={bike} alt="" />
          <span className="font-bold text-white text-2xl ml-6 mr-4">單車租借</span>
        </Link>
      </div>
      <div className="section grid grid-cols-1 justify-items-center gap-10">
        <h3>最新公告</h3>
        <div className="w-full max-w-screen-xl px-10">
          {news_announcement.map((item,idx) => (
            <NewsItem key={`news-announcement-${idx}`}  data={item} type={"announcement"} />
          ))}
        </div>
        <Link
          className="flex btn bg-green-default text-white hover:bg-green-hover"
          to="/news/announcement/"
        >
          更多最新公告
        </Link>
      </div>
      <div className="section grid grid-cols-1 justify-items-center gap-10">
        <h3>近期活動</h3>
        <div className="w-full max-w-screen-xl px-10">
          {news_activity
            .map((item,idx) => (
              <NewsItem key={`news-activity-${idx}`} data={item} type={"activity"} />
            ))}
        </div>
        <Link
          className="flex btn bg-green-default text-white hover:bg-green-hover"
          to="/news/activity/"
        >
          更多活動資訊
        </Link>
      </div>
    </div>
  );
}

export default Home;
