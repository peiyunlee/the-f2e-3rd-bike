import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import ResultItem from "./ResultItem";

function RoundRS() {
  const test = [
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
  ];
  return (
    <div className="w-full flex flex-col min-h-0">
      <div className="flex flex-col items-start w-80">
        <h2 className="mb-3">環島路線搜尋</h2>
        <input
          className="input-text mb-2"
          type="text"
          placeholder="請輸入關鍵字"
        />
        <div className="grid mb-4 grid-flow-col gap-4 w-full">
          <div className="flex flex-col items-start">
            <span className="font-bold mb-2">經過縣市</span>
            <select className="input-select">
              <option defaultValue value="全部">
                全部
              </option>
              <option value="台北市">台北市</option>
              <option value="台北市">台北市</option>
              <option value="台北市">台北市</option>
            </select>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold mb-2">路線分類</span>
            <select className="input-select">
              <option defaultValue value="全部">
                全部
              </option>
              <option value="自行車與行人共用道">自行車與行人共用道</option>
              <option value="自行車與行人共用道">自行車與行人共用道</option>
              <option value="自行車與行人共用道">自行車與行人共用道</option>
            </select>
          </div>
        </div>
        <a href="/" className="btn bg-green-default w-full">
          <span className="text-white mr-2.5">搜尋</span>
          <FontAwesomeIcon icon={faArrowDown} color="white" />
        </a>
      </div>
      <div className="flex flex-col items-start w-full mt-6 h-full flex-grow min-h-0">
        <div className="font-bold mb-2">搜尋結果</div>
        <div className="mb-2 flex items-center">
          <input
            className="checkbox"
            type="checkbox"
            value="all"
          />
          <span>全選加入地圖</span>
        </div>
        <div className="w-full border-b border-gray-light mb-3"></div>
        <div className="resultlist">
          {test.map((item, idx) => (
            <ResultItem key={idx} name={item} checked={false}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoundRS;
