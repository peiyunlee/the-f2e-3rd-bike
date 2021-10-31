/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import ResultItem from "./ResultItem";

function LayerRS() {
  const [showDistrictList, setShowDistrictList] = useState(true);
  const test = [
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
    "環島1-4",
  ];

  function HandleShowList() {
    setShowDistrictList(!showDistrictList);
  }

  return (
    <div className="flex flex-col min-h-0 w-80 items-start">
      <h2 className="mb-3">地圖圖層</h2>
      <div className="grid grid-flow-col gap-3.5 mb-4">
        <a
          onClick={() => HandleShowList()}
          className={
            showDistrictList ? "tab-active" : "tab hover:btn-green-hover"
          }
        >
          區域路線
        </a>
        <a
          onClick={() => HandleShowList()}
          className={
            !showDistrictList ? "tab-active" : "tab hover:btn-green-hover"
          }
        >
          環島路線
        </a>
      </div>
      <div className="flex flex-col items-start w-full h-full flex-grow min-h-0">
        <div className="mb-2 flex items-center">
          <input className="checkbox" type="checkbox" value="all" />
          <span>全選加入地圖</span>
        </div>
        <div className="w-full border-b border-gray-light mb-3"></div>
        <div className="resultlist">
          {test.map((item, idx) => (
            <ResultItem key={idx} name={item} checked={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LayerRS;
