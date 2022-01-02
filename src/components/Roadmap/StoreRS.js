import { useSelector } from "react-redux";
import StoreItem from "./StoreItem";

function StoreRS() {
  const { storeRoutes } = useSelector((store) => store.authReducer);
  return (
    <div className="bg-white max-h-full p-5 rounded w-80">
      <h2 className="mb-3 text-xl">常用站牌</h2>
      <div className="w-full border-b border-gray mb-3"></div>
      <div className="grid gap-0.5">
        {storeRoutes.map((ele, idx) => (
          <StoreItem key={`store+${ele.RouteName}`} data={ele} />
        ))}
      </div>
    </div>
  );
}

export default StoreRS;
