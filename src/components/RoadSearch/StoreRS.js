// /* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState, useMemo } from "react";

// import ResultList from "./ResultList";

// import routes from "../../assets/json/district_taipei.json";

// const data = routes
//   .map((ele) => ({ ...ele, checked: false }))
//   .sort((a, b) => {
//     return a.RouteName.localeCompare(b.RouteName, "zh-hant");
//   });

// function StoreRS({ layerRoutes }) {
//   const [result, setresult] = useState(data);

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

//   return (
//     <div className="flex flex-col min-h-0 w-80 items-start">
//       <h2 className="mb-3 text-2xl">常用路線</h2>
//       <div className="flex flex-col items-start w-full h-full flex-grow min-h-0">
//         <ResultList result={result} />
//       </div>
//     </div>
//   );
// }

// export default StoreRS;
