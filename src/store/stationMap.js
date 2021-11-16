import { createContext, useReducer } from "react";
import * as actions from "../utils/actions/stationMap";

export const StoreContext = createContext();

const initialState = {
  stations: [],
  popup: {},
  mapCenterPos:[23.583234, 120.5825975]
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_STATIONS:
      let arr = [];
      action.payload.infoList.forEach((iItem)=>{
        const idx = action.payload.availabilityList.findIndex((aItem)=>aItem.StationUID === iItem.StationUID)
        if(idx !== -1){
          arr.push({...iItem,...action.payload.availabilityList[idx]})
        }
      })
      console.log(arr)
      return {
        ...state,
        stations: [
          ...arr
        ],
      };
    case actions.SET_POPUP:
      return {
        ...state,
        popup: action.payload,
      };
      case actions.SET_MAP_CENTER_POS:
        return {
          ...state,
          mapCenterPos: action.payload,
        };
    default:
      return state;
  }
}

export function SMStoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
