import { useState } from "react";

import ResultItem from "./ResultItem";

function ResultList(props) {
  const [input_checkAll, setinput_checkAll] = useState(false);

  function HandleCheckAll() {
    //check all
    let newresult = props.result;
    newresult.forEach((item) => {
      item.checked = !input_checkAll;
    });
    props.setresult(newresult);
    setinput_checkAll(!input_checkAll);
  }

  function HandleCheckSingle(idx) {
    //check single route
    let newresult = props.result;
    newresult[idx].checked = !newresult[idx].checked;
    props.setresult(newresult);

    if (newresult[idx].checked) {
      //checked
      if (!props.result.every((item) => item.checked)) return;
      setinput_checkAll(true);
    } else {
      //unchecked
      setinput_checkAll(false);
    }
  }

  return (
    <>
      <div className="mb-2 flex items-center">
        <input
          className="checkbox focus:outline-none"
          type="checkbox"
          value="checkAll"
          checked={input_checkAll}
          onChange={HandleCheckAll}
        />
        <span>全選加入地圖</span>
      </div>
      <div className="w-full border-b border-gray-light mb-3"></div>
      <div className="resultlist">
        {props.result.map((item, idx) => (
          <ResultItem
            key={`district-result-${idx}`}
            data={{ idx: idx, name: item.RouteName, checked: item.checked }}
            HandleCheckSingle={HandleCheckSingle}
          />
        ))}
      </div>
    </>
  );
}

export default ResultList;
