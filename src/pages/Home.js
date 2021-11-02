import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import NewsItem from '../components/NewsItem'

import main from '../assets/main.png'
import bike from '../assets/icon/bike.png'
import timeline from '../assets/icon/timeline.png'

function Home() {
  return (
    <div>
      <div className="relative h-full">
        <img src={main} alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <h2 className="text-white tracking-widest mb-8">台灣自行車資訊網</h2>
          <div className="flex">
            <input
              className="input-text mb-2"
              type="text"
              placeholder="請輸入關鍵字"
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      <div className="pt-16 pb-12 grid grid-flow-col gap-20 justify-center">
        <Link className="bg-green-default py-4 flex items-center justify-center w-96 rounded" to="/roadmap/district">
          <img className="w-10" src={timeline} alt="" />
          <span class="font-bold text-white text-2xl ml-6">自行車路線查詢</span>
        </Link>
        <Link className="bg-yellow-default py-4 flex items-center justify-center w-96 rounded" to="/rent">
          <img className="w-10" src={bike} alt="" />
          <span class="font-bold text-white text-2xl ml-6">單車租借資訊</span>
        </Link>
      </div>
      <div className="border section">
        <h3>最新消息</h3>
        <div className="border w-full">
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    </div>
  );
}

export default Home;
