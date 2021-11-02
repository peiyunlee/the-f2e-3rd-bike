import NewsItem from "../components/NewsItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Announcement() {
  return (
    <div className="flex justify-center text-black">
      <div className="w-full max-w-7xl grid gap-10 justify-items-center section">
        <h2>最新消息</h2>
        <div className="grid grid-flow-col gap-10">
          <div className="grid grid-flow-col gap-10 justify-items-start items-center">
            <span className="font-bold">選擇分類</span>
            <select className="input-select w-32">
              <option defaultValue value="全部">
                全部分類
              </option>
              <option value="一般">一般</option>
              <option value="活動">活動</option>
            </select>
          </div>
          <div className="grid grid-flow-col gap-10 justify-items-start items-center">
            <span className="font-bold">選擇時間</span>
            <select className="input-select w-32">
              <option defaultValue value="全部">
                全部年份
              </option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
            <select className="input-select w-32">
              <option defaultValue value="全部">
                全部月份
              </option>
              <option value="11">11</option>
              <option value="10">10</option>
            </select>
          </div>
          <a className="btn bg-yellow-default text-white w-full">查詢</a>
        </div>
        <div className="w-full">
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleLeft} />
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>10</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
}

export default Announcement;
