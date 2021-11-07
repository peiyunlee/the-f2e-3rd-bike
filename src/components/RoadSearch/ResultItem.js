/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useContext, useMemo } from "react";
import { StoreContext } from "../../store/mapLayer";
import {
  addDistrictRoute,
  removeDistrictRoute,
  setPopup,
} from "../../actions/mapLayer";

function ResultItem(props) {
  const [input_checked, setinput_checked] = useState(props.data.checked);
  const {
    dispatch,
    state: { popup },
  } = useContext(StoreContext);

  useMemo(() => {
    console.log("ResultItem refresh data.checked");
    setinput_checked(props.data.checked);
  }, [props]);

  function _HandleChecked() {
    setinput_checked(!input_checked);
    if (props.data.idx !== undefined)
      removeDistrictRoute(dispatch, props.data.idx);
    else addDistrictRoute(dispatch, props.data);
  }

  function _HandleClickItem() {
    const positions = props.data.Geometry.slice(18, -2)
      .split(",")
      .map((ele) => ele.split(" ").reverse());

    const result = {
      position: positions[parseInt(positions.length / 2)],
      RouteName: props.data.RouteName,
      City: props.data.City,
      RoadSectionStart: props.data.RoadSectionStart,
      RoadSectionEnd: props.data.RoadSectionEnd,
      CyclingLength: props.data.CyclingLength,
    };
    setPopup(dispatch, result);
  }

  return (
    <a
      className={`resultlist-item ${
        props.data.idx === undefined
          ? "cursor-default"
          : "hover:bg-yellow-disable"
      }  ${props.data.RouteName === popup.RouteName ? "bg-yellow-disable" : ""}`}
      onClick={() => {
        if (props.data.idx !== undefined) _HandleClickItem();
      }}
    >
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
