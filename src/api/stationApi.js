import axios from "../api";

const baseUrl_Availability = `https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/`;
const baseUrl_Param_Availability = `?$format=JSON`;

const baseUrl_info = `https://ptx.transportdata.tw/MOTC/v2/Bike/Station/`;
const baseUrl_Param_info = `?$format=JSON`;

export const getStationInfo = async (city) => {
  try {
    const result_info = await axios.get(baseUrl_info + city + baseUrl_Param_info);
    const result_availability = await axios.get(baseUrl_Availability + city + baseUrl_Param_Availability);
    return { stationInfo: result_info.data, stationAvailability: result_availability.data };
  } catch (error) {
    alert("查無資料!!");
  }
};
