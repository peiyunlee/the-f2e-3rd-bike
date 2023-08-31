import axios from "axios";
import tdxHeaders from "./index"

const baseUrl = `https://tdx.transportdata.tw/api/basic/v2/Cycling/Shape/City/`;
const baseUrl_Param = `%24orderby=RouteName&%24format=JSON`;

export const getRouteResultByCity = async (cityName) => {
  try {
    let result = await axios.get(`${baseUrl}${cityName}?${baseUrl_Param}`, { headers: tdxHeaders });
    result.data = result.data
      .map((ele) => ({
        ...ele,
        positions: ele.Geometry.replace("MULTILINESTRING ", "")
          .replace("((", "")
          .replace("))", "")
          .split(",")
          .map((ele) =>
            ele
              .split(" ")
              .map((item) => item.replace("(", "").replace(")", ""))
              .reverse()
          ),
      }))
      .sort((a, b) => {
        return a.RouteName.localeCompare(b.RouteName, "zh-hant");
      });
    // console.log(result.data)
    return result.data;
  } catch (error) {
    if(error.response.status == 429){
      alert("API呼叫太多次");
    }
    else
      alert("查無資料!!");
  }
};

export const getSingleRouteResult = async (cityName, routeName) => {
  try {
    let result = await axios.get(`${baseUrl}${cityName}?%24filter=RouteName%20eq%20'${routeName}'&%24orderby=RouteName&%24top=30&%24format=JSON`, { headers: tdxHeaders });
    result.data = result.data
      .map((ele) => ({
        ...ele,
        positions: ele.Geometry.replace("MULTILINESTRING ", "")
          .replace("((", "")
          .replace("))", "")
          .split(",")
          .map((ele) =>
            ele
              .split(" ")
              .map((item) => item.replace("(", "").replace(")", ""))
              .reverse()
          ),
      }))
    // console.log(result.data)
    return result.data;
  } catch (error) {
    if(error.response.status == 429){
      alert("API呼叫太多次");
    }
    else
      console.log(routeName)
  }
};

