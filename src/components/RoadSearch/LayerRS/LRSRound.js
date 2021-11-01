import { useState } from "react";

import ResultList from "../ResultList";

function LRSRound() {
  const [test, settest] = useState([
    { name: "環島1-4", checked: false },
    { name: "環島1-4", checked: false },
    { name: "環島1-4", checked: false },
    { name: "環島1-4", checked: false },
    { name: "環島1-4", checked: false },
    { name: "環島1-4", checked: false },
    { name: "環島1-4", checked: false },
  ]);

  return (
    <>
      <div className="flex flex-col items-start w-full h-full flex-grow min-h-0 mb-4">
        <div className="mb-2 flex items-center">
          <input
            className="checkbox focus:outline-none"
            type="checkbox"
            value="checkAll"
          />
          <span>全選加入地圖</span>
        </div>
        <div className="w-full border-b border-gray-light mb-1"></div>
        <div className="w-full flex flex-wrap px-3 h-full">
          <div className="my-0.5 mr-10">
            <input className="checkbox" type="checkbox" />
            <span className="font-ch tracking-normal">維修</span>
          </div>
          <div className="my-0.5 mr-10">
            <input className="checkbox" type="checkbox" />
            <span className="font-ch tracking-normal">救護</span>
          </div>
          <div className="my-0.5 mr-10">
            <input className="checkbox" type="checkbox" />
            <span className="font-ch tracking-normal">廁所</span>
          </div>
          <div className="my-0.5 mr-10">
            <input className="checkbox" type="checkbox" />
            <span className="font-ch tracking-normal">飲水設備</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full h-full flex-grow min-h-0">
        <ResultList test={test} settest={settest} />
      </div>
    </>
  );
}

export default LRSRound;
