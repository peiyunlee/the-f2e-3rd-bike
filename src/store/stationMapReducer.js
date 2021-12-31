
import * as actions from "../utils/actions/stationMap";

const initialState = {
  stations: [],
  mapCenterPos:[23.583234, 120.5825975]
};

export function stationMapReducer(state=initialState, action) {
  switch (action.type) {
    case actions.SET_STATIONS:
      let arr = [];
      action.payload.infoList.forEach((iItem)=>{
        const idx = action.payload.availabilityList.findIndex((aItem)=>aItem.StationUID === iItem.StationUID)
        if(idx !== -1){
          arr.push({...iItem,...action.payload.availabilityList[idx]})
        }
      })
      return {
        ...state,
        stations: [
          ...arr
        ],
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
