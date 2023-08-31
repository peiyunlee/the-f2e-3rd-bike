/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState,useEffect } from "react";
import city_data from "../../assets/json/city.json";
import { getStationInfo } from "../../api/stationApi";
import * as actions from "../../actions/stationMap";
import { useDispatch } from "react-redux";

function SearchBar() {
  const dispatch = useDispatch();
  const [town, settown] = useState(city_data[0].Town);
  const [input_city, setinput_city] = useState({ name: "選擇", idx: -1 });
  const [isSearch, setisSearch] = useState(false);

  useEffect(() => {
    if(isSearch)
      setInterval(_refreshResultData,60000)
  }, [isSearch]);

  const _HandleSelectCity = (event) => {
    if (event.target.value !== "選擇") {
      const idx = city_data.findIndex(
        (item) => item.City === event.target.value
      );
      setinput_city({ name: event.target.value, idx: idx });
      settown(city_data[idx].Town);
    }
  };

  const _getResultData = async () => {
    if (input_city.name === "選擇") return;
    setisSearch(true)
    const result = await getStationInfo(input_city.name);
    if (result !== undefined) {
      dispatch(
        actions.setStations(result.stationInfo, result.stationAvailability)
      );
      dispatch(actions.setMapCenterPos(city_data[input_city.idx].Position));
    }
  };

  const _refreshResultData = async () => {
    if (input_city.name === "選擇") return;
    const result = await getStationInfo(input_city.name);
    if (result !== undefined) {
      dispatch(
        actions.setStations(result.stationInfo, result.stationAvailability)
      );
    }
  };

  return (
    <div className="bg-white max-h-full p-5 rounded w-80">
      <h2 className="mb-3 text-xl">站點搜尋</h2>
      <input
        className="input-text mb-2"
        type="text"
        placeholder="請輸入關鍵字"
      />
      <div className="mb-4 grid grid-flow-col grid-cols-2 gap-x-5 w-full justify-start">
        <div className="flex flex-col items-start w-full">
          <span className="font-bold mb-2">縣市</span>
          <select
            className="input-select"
            onChange={_HandleSelectCity}
            value={input_city.name}
          >
            <option defaultValue value="選擇">
              選擇
            </option>
            {city_data.map((item, idx) => (
              <option key={`cityOption-${idx}`} value={item.City}>
                {item.CityName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-start w-full">
          <span className="font-bold mb-2">鄉鎮區</span>
          <select className="input-select" disabled>
            <option defaultValue value="全部">
              全部
            </option>
            {/* {town.map((item, idx) => (
              <option key={`townOption-${idx}`} value={item.TownName}>
                {item.TownName}
              </option>
            ))}  */}
          </select>
        </div>
      </div>
      <a
        className="btn bg-green-default w-full text-white mr-2.5 block"
        onClick={_getResultData}
      >
        搜尋
      </a>
    </div>
  );
}

export default SearchBar;
