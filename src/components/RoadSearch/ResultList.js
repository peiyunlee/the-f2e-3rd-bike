import { useState } from "react";

import ResultItem from "./ResultItem";

function ResultList({ test,settest }) {
  const [isCheckAll, setisCheckAll] = useState(false);

  function HandleCheckAll() {
    let newtest = test;
    newtest.forEach((item) => {
      item.checked = !isCheckAll;
    });
    settest(newtest);
    setisCheckAll(!isCheckAll);
  }
  
  return (
    <>
      <div className="mb-2 flex items-center">
        <input
          className="checkbox focus:outline-none"
          type="checkbox"
          value="checkAll"
          checked={isCheckAll}
          onChange={HandleCheckAll}
        />
        <span>全選加入地圖</span>
      </div>
      <div className="w-full border-b border-gray-light mb-3"></div>
      <div className="resultlist">
        {test.map((item, idx) => (
          <ResultItem key={idx} name={item.name} checked={item.checked}/>
        ))}
      </div>
    </>
  );
}

export default ResultList;
