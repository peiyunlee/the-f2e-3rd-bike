// import { useEffect } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
function StoreItem({ data }) {
  
  return (
    <a
      className={`${
        data.isStored ? "bg-green-bg" : "bg-gray-light"
      } p-4 flex justify-between items-center`}
    >
      <div>{data.RouteName}</div>
      <div className="text-sm text-gray-default">全長 138m</div>
    </a>
  );
}

export default StoreItem;
