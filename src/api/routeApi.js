import axios from "../api";

const baseUrl = `https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/`;
const baseUrl_Param = `%24orderby=RouteName&%24format=JSON`;

export const getRouteResultByCity = async (cityName) => {
  try {
    let result = await axios.get(`${baseUrl}${cityName}?${baseUrl_Param}`);
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
    alert("查無資料!!");
  }
};

export const getSingleRouteResult = async (cityName, routeName) => {
  try {
    let result = await axios.get(`${baseUrl}${cityName}?%24filter=RouteName%20eq%20'${routeName}'&%24orderby=RouteName&%24top=30&%24format=JSON`);
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
    console.log(routeName)
  }
};

