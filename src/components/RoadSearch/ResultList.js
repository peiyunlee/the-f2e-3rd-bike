import { useState, useMemo, useContext } from "react";
import { StoreContext } from "../../store/mapLayer";
import {
  addDistrictRouteList,
  removeDistrictRouteList,
} from "../../actions/mapLayer";

import ResultItem from "./ResultItem";

function ResultList(props) {
  const [input_checkAll, setinput_checkAll] = useState(false);
  const { dispatch } = useContext(StoreContext);

  useMemo(() => {
    console.log("ResultList refresh result")
    _SyncCheckAll();
  }, [props]);

  function _SyncCheckAll() {
    setinput_checkAll(props.result.every((ele) => ele.checked));
    // console.log(result.every((ele) => ele.checked));
  }

  function _HandleCheckAll() {
    if (!input_checkAll)
      addDistrictRouteList(
        dispatch,
        props.result.filter((item) => !item.checked)
      );
    else removeDistrictRouteList(dispatch, props.result);
    setinput_checkAll(!input_checkAll);
  }

  return (
    <>
      <div className="mb-2 flex items-center">
        <input
          className="checkbox focus:outline-none"
          type="checkbox"
          value="checkAll"
          checked={input_checkAll}
          onChange={_HandleCheckAll}
        />
        <span>全選加入地圖</span>
      </div>
      <div className="w-full border-b border-gray-light mb-3"></div>
      <div className="resultlist">
        {props.result.map((item, idx) => (
          <ResultItem key={`district-result-${idx}`} data={item} />
        ))}
      </div>
    </>
  );
}

export default ResultList;
