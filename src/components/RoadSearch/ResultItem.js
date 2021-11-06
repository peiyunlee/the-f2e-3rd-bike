/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useContext, useMemo } from "react";
import { StoreContext } from "../../store/mapLayer";
import { addDistrictRoute, removeDistrictRoute } from "../../actions/mapLayer";

function ResultItem(props) {
  const [input_checked, setinput_checked] = useState(props.data.checked);
  const { dispatch } = useContext(StoreContext);

  useMemo(() => {
    console.log("ResultItem refresh data.checked")
    setinput_checked(props.data.checked);
  }, [props]);

  function _HandleChecked() {
    setinput_checked(!input_checked);
    if (props.data.idx !== undefined) removeDistrictRoute(dispatch, props.data.idx);
    else addDistrictRoute(dispatch, props.data);
  }

  return (
    <a className="resultlist-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={input_checked}
        onChange={_HandleChecked}
      />
      <span className="font-ch tracking-normal">
        {props.data.RouteName + props.data.idx}
      </span>
    </a>
  );
}

export default ResultItem;
