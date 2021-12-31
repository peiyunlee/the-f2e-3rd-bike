import * as mapActions from "../../actions/routeMap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
function StoreItem({ data }) {
  const dispatch = useDispatch();
  const { popup } = useSelector((store) => store.routeMapReducer);
  const [isPopup, setisPopup] = useState(false);

  useEffect(() => {
    setisPopup(popup.RouteName === data.RouteName && popup.City === data.City);
  }, [popup]);

  function _HandleClickItem() {
    const positions = data.positions;
    const result = {
      position: positions[parseInt(positions.length / 2)],
      RouteName: data.RouteName,
      City: data.City,
      RoadSectionStart: data.RoadSectionStart,
      RoadSectionEnd: data.RoadSectionEnd,
      CyclingLength: data.CyclingLength,
      isStored: data.isStored,
    };
    dispatch(mapActions.setPopup(result));
  }

  return (
    <a
      className={`${
        isPopup ? "bg-yellow-200" : "bg-green-bg"
      } p-4 flex justify-between items-center`}
      onClick={_HandleClickItem}
    >
      <div>{data.RouteName}</div>
      <div className="text-sm text-gray-default">
        全長 {data.CyclingLength / 1000}km
      </div>
    </a>
  );
}

export default StoreItem;
