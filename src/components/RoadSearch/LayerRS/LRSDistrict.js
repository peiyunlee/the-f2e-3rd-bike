import { useState } from "react";

import ResultList from "../ResultList";

function LRSDistrict() {
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
    <div className="flex flex-col items-start w-full h-full flex-grow min-h-0">
      <ResultList test={test} settest={settest} />
    </div>
  );
}

export default LRSDistrict;
