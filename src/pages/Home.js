/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import NewsItem from "../components/News/NewsItem";

import main from "../assets/main.png";
import bike from "../assets/icon/bike.png";
import timeline from "../assets/icon/timeline.png";

import { useSelector } from "react-redux";

function Home() {
  const { news_announcement, news_activity } = useSelector(
    (store) => store.newsDataReducer
  );
  

  return (
    <div className="pb-20 w-full mt-header">
      <div className="relative h-full w-full">
        <div className="overflow-hidden flex justify-center">
          <img className="home-main-img lg:mr-0 mr-56" src={main} alt="" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <h2 className="text-white md:tracking-widest tracking-wide mb-8 text-right">
            台灣自行車資訊網
          </h2>
          <div className="flex items-center relative">
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
      <div className="pt-16 pb-12 grid grid-flow-col md:gap-20 gap-10 justify-center">
        <Link
          className="shadow-md bg-green-default md:py-4 py-3 flex items-center justify-center lg:w-96 md:w-72 w-36 rounded hover:bg-green-hover"
          to="/route/district"
        >
          <img className="md:block hidden w-10" src={timeline} alt="" />
          <span className="font-bold text-white text-xl md:ml-6 md:mr-4">
            自行車路線
          </span>
        </Link>
        <Link
          className="shadow-md bg-yellow-default md:py-4 py-3 flex items-center justify-center lg:w-96 md:w-72 w-36 rounded hover:bg-yellow-hover"
          to="/station"
        >
          <img className="md:block hidden w-10" src={bike} alt="" />
          <span className="font-bold text-white text-xl md:ml-6 md:mr-4">
            單車租借
          </span>
        </Link>
      </div>
      <div className="section grid grid-cols-1 justify-items-center gap-10">
        <h3>最新公告</h3>
        <div className="w-full max-w-screen-xl lg:px-10">
          {news_announcement.slice(0, 5).map((item, idx) => (
            <NewsItem
              key={`news-announcement-${idx}`}
              data={item}
              type={"announcement"}
            />
          ))}
        </div>
        <Link
          className="flex btn bg-green-default text-white hover:bg-green-hover"
          to="/news/announcement"
        >
          更多最新公告
        </Link>
      </div>
      <div className="section grid grid-cols-1 justify-items-center gap-10">
        <h3>近期活動</h3>
        <div className="w-full max-w-screen-xl lg:px-10">
          {news_activity.slice(0, 5).map((item, idx) => (
            <NewsItem
              key={`news-activity-${idx}`}
              data={item}
              type={"activity"}
            />
          ))}
        </div>
        <Link
          className="flex btn bg-green-default text-white hover:bg-green-hover"
          to="/news/activity"
        >
          更多活動資訊
        </Link>
      </div>
    </div>
  );
}

export default Home;
