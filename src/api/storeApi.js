import axios from ".";

// const cors = "https://cors-anywhere.herokuapp.com/";
// const baseUrl = `https://taiwan-bike-api.herokuapp.com/api/v1/users`;
const baseUrl = `http://localhost:5000/api/v1/store`;

export const createStore = async (userData, access_token) => {
  try {
    const res = await axios.post(baseUrl, userData, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    console.log("success create store");
    return { status: res.status, store: res.data };
  } catch (error) {
    // let detail = "";
    // if (error.response === undefined)
    //   return {
    //     status: 500,
    //     detail: "success",
    //   };
    return {
      status: error.response.status,
      detail: error.response.detail,
    };
  }
};

export const storeRoute = async (routeData, access_token) => {
  try {
    const res = await axios.post(baseUrl + "/route", routeData, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    console.log("success store route");
    return { status: res.status, route: res.data };
  } catch (error) {
    // let detail = "";
    // if (error.response === undefined)
    //   return {
    //     status: 500,
    //     detail: "success",
    //   };
    switch (error.response.status) {
      case 401:
        alert("請先登入");
        break;
      default:
        break;
    }
    return {
      status: error.response.status,
      detail: error.response.detail,
    };
  }
};

export const removeStoreRoute = async (routeData, access_token) => {
  try {
    const res = await axios.post(baseUrl + "/route/remove", routeData, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    console.log("success remove store route");
    return { status: res.status, route: res.data };
  } catch (error) {
    // let detail = "";
    // if (error.response === undefined)
    //   return {
    //     status: 500,
    //     detail: "success",
    //   };
    switch (error.response.status) {
      case 401:
        alert("請先登入");
        break;
      default:
        break;
    }
    return {
      status: error.response.status,
      detail: error.response.detail,
    };
  }
};

export const getStoredRoutesByUserId = async (userId) => {
  try {
    const res = await axios.get(`${baseUrl}/route/user/${userId}`);
    console.log("success get stored route");
    return { status: res.status, routes: res.data };
  } catch (error) {
    // let detail = "";
    // if (error.response === undefined)
    //   return {
    //     status: 500,
    //     detail: "success",
    //   };
    return {
      status: error.response.status,
      detail: error.response.detail,
    };
  }
};
