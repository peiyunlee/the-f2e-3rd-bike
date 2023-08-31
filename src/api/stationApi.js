import axios from "axios";
import tdxHeaders from "./index"

const baseUrl_Availability = `https://tdx.transportdata.tw/api/basic/v2/Bike/Availability/City/`;
const baseUrl_Param_Availability = `?$format=JSON`;

const baseUrl_info = ` https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/`;
const baseUrl_Param_info = `?$format=JSON`;

export const getStationInfo = async (city) => {
  try {
    let url = baseUrl_info + city + baseUrl_Param_info
    const result_info = await axios.get(url, { headers: tdxHeaders });
    url = baseUrl_Availability + city + baseUrl_Param_Availability
    const result_availability = await axios.get(url, { headers: tdxHeaders })
    return { stationInfo: result_info.data, stationAvailability: result_availability.data };
  } catch (error) {
    if(error.response.status == 429){
      alert("API呼叫太多次");
    }
    else
      alert("查無資料!!");
  }
};
