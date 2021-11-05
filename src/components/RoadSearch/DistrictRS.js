/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import ResultList from "./ResultList";

import routes from "../../assets/json/district_taipei.json";
import city from "../../assets/json/city.json";

const data = routes.map((ele) => ({ ...ele, checked: false }));

function DistrictRS() {
  const [result, setresult] = useState(data);

  return (
    <div className="w-full flex flex-col min-h-0">
      <div className="flex flex-col items-start w-80">
        <h2 className="mb-3 text-2xl">區域路線搜尋</h2>
        <input
          className="input-text mb-2"
          type="text"
          placeholder="請輸入關鍵字"
        />
        <div className="grid mb-4 gap-2.5 gap-x-6 w-full justify-start">
          <div className="flex flex-col items-start w-28">
            <span className="font-bold mb-2">縣市</span>
            <select className="input-select">
              <option defaultValue value="選擇">
                選擇
              </option>
              {city.map((item,idx) => (
                <option key={`cityOption-${idx}`} value={item.CityName}>{item.CityName}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start w-28">
            <span className="font-bold mb-2">鄉鎮區</span>
            <select className="input-select">
              <option defaultValue value="全部">
                全部
              </option>
              <option value="台北市">台北市</option>
              <option value="台北市">台北市</option>
              <option value="台北市">台北市</option>
            </select>
          </div>
          <div className="flex flex-col items-start col-span-2 w-52">
            <span className="font-bold mb-2">路線分類</span>
            <select className="input-select">
              <option defaultValue value="全部">
                全部
              </option>
              <option value="自行車專用道">自行車專用道</option>
              <option value="自行車與行人共用道">自行車與行人共用道</option>
              <option value="慢車道">慢車道</option>
              <option value="混和車道">混和車道</option>
            </select>
          </div>
        </div>
        <a className="btn bg-green-default w-full">
          <span className="text-white mr-2.5">搜尋</span>
          <FontAwesomeIcon icon={faArrowDown} color="white" />
        </a>
      </div>
      <div className="flex flex-col items-start w-full mt-6 h-full flex-grow min-h-0">
        <div className="font-bold mb-2">搜尋結果</div>
        <ResultList result={result} setresult={setresult} />
      </div>
    </div>
  );
}

export default DistrictRS;
