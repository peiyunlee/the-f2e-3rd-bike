import axios from "../api";

const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = `https://taiwan-bike-api.herokuapp.com/api/v1/users`;

export const register = async (inputData) => {
  if (inputData.password1 !== inputData.password2)
    return {
      status: 422,
      detail: "*兩次密碼不符合",
    };

  try {
    const res = await axios.post(baseUrl + "/register", inputData);
    console.log("success", res.data);
    return { status: res.status, user: res.data };
  } catch (error) {
    let detail = "";
    if (error.response === undefined)
      return {
        status: 200,
        detail: "success",
      };

    switch (error.response.status) {
      case 400:
        detail = "*E-mail重複註冊";
        break;
      case 422:
        detail = error.response.data.detail;
        break;
      case 500:
        detail = "success";
        alert("註冊成功");
        break;
      default:
        break;
    }
    return {
      status: error.response.status,
      detail: detail,
    };
  }
};

export const login = async (inputData) => {
    try {
        const res = await axios.post(baseUrl + "/signin", inputData);
        console.log("success", res.data);
        return { status: res.status, user: res.data };
      } catch (error) {
        let detail = "";
        if (error.response === undefined)
          return {
            status: 200,
            detail: "sssuccess",
          };
    
        switch (error.response.status) {
          case 404:
            detail = error.response.data.detail;
            break;
          case 422:
            detail = error.response.data.detail;
            break;
          default:
            break;
        }
        return {
          status: error.response.status,
          detail: detail,
        };
      }
};
