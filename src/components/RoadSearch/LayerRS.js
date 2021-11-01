/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import LRSDistrict from "./LayerRS/LRSDistrict";
import LRSRound from "./LayerRS/LRSRound";

function LayerRS() {
  const [showDistrictList, setShowDistrictList] = useState(true);

  function HandleShowList() {
    setShowDistrictList(!showDistrictList);
  }

  return (
    <div className="flex flex-col min-h-0 w-80 items-start">
      <h2 className="mb-3 text-2xl">地圖圖層</h2>
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
      {!showDistrictList ? <LRSRound /> : <LRSDistrict />}
    </div>
  );
}

export default LayerRS;
