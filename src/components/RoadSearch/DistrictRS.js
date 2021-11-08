// /* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState, useMemo, useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { StoreContext } from "../../store/mapLayer";

// import ResultList from "./ResultList";

// import { removeDistrictRouteList } from "../../actions/mapLayer";
// import city from "../../assets/json/city.json";

// import axios from "../api";

// function DistrictRS({ layerRoutes }) {
//   const [result, setresult] = useState([]);
//   const [town, settown] = useState([]);
//   const [input_city, setinput_city] = useState("選擇");

//   const { dispatch } = useContext(StoreContext);

//   useMemo(() => {
//     _SyncResult();
//     console.log("districtRS refresh layerRoutes");
//   }, [layerRoutes]);

//   function _SyncResult() {
//     let newresult = result;
//     newresult.forEach((ele) => {
//       const index = layerRoutes.findIndex(
//         (routes) => routes.RouteName === ele.RouteName
//       );

//       if (index !== -1) {
//         ele.idx = index;
//         ele.checked = true;
//       } else {
//         ele.idx = undefined;
//         ele.checked = false;
//       }
//     });
//     setresult(newresult);
//   }

//   const _fetchData = async (baseURL) => {
//     try {
//       const result = await axios.get(baseURL);
//       return result.data;
//     } catch (error) {
//       alert("GET Error!!");
//     }
//   };

//   const _HandleSelectCity = (event) => {
//     setinput_city(event.target.value);
//     if (event.target.value !== "選擇") {
//       const idx = city.findIndex((item) => item.City === event.target.value);
//       if (idx !== -1) settown(city[idx].Town);
//     }
//   };

//   const _getResultData = async () => {
//     removeDistrictRouteList(dispatch)
//     const baseURL = `https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/${input_city}?$orderby=RouteName&$top=30&$format=JSON`;
//     let result = await _fetchData(baseURL);
//     if (result !== undefined) {
//       setresult(
//         result
//           .map((ele) => ({ ...ele, checked: false }))
//           .sort((a, b) => {
//             return a.RouteName.localeCompare(b.RouteName, "zh-hant");
//           })
//       );
//     }
//     console.log(result);
//   };

//   return (
//     <div className="w-full flex flex-col min-h-0">
//       <div className="flex flex-col items-start w-80">
//         <h2 className="mb-3 text-2xl">區域路線搜尋</h2>
//         <input
//           className="input-text mb-2"
//           type="text"
//           placeholder="請輸入關鍵字"
//         />
//         <div className="mb-4 grid grid-flow-col grid-cols-2 gap-x-5 w-full justify-start">
//           <div className="flex flex-col items-start w-full">
//             <span className="font-bold mb-2">縣市</span>
//             <select
//               className="input-select"
//               onChange={_HandleSelectCity}
//               value={input_city}
//             >
//               <option defaultValue value="選擇">
//                 選擇
//               </option>
//               {city.map((item, idx) => (
//                 <option key={`cityOption-${idx}`} value={item.City}>
//                   {item.CityName}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="flex flex-col items-start w-full">
//             <span className="font-bold mb-2">鄉鎮區</span>
//             <select className="input-select">
//               <option defaultValue value="全部">
//                 全部
//               </option>
//               {town.map((item, idx) => (
//                 <option key={`townOption-${idx}`} value={item.TownName}>
//                   {item.TownName}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <a className="btn bg-green-default w-full" onClick={_getResultData}>
//           <span className="text-white mr-2.5">搜尋</span>
//           <FontAwesomeIcon icon={faArrowDown} color="white" />
//         </a>
//       </div>
//       <div className="flex flex-col items-start w-full mt-6 h-full flex-grow min-h-0">
//         <div className="font-bold mb-2">搜尋結果</div>
//         <ResultList result={result} />
//       </div>
//     </div>
//   );
// }

// export default DistrictRS;
