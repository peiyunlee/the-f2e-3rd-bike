/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";

import NewsItem from "./NewsItem";
import city_data from "../../assets/json/city.json";

function Activity({ news }) {
  let history = useHistory();
  let location = useLocation();

  const [page, setpage] = useState(1);
  const [data, setdata] = useState(news);
  const [input_city, setinput_city] = useState("-1");
  const [input_year, setinput_year] = useState("all");

  useEffect(() => {
    const pathArr = location.pathname.split("/");
    if (pathArr.length >= 4 && pathArr[3] !== "") setpage(parseInt(pathArr[3]));
    else setpage(1);
  }, [location]);

  const _RenderPageBtn = () => {
    let list = [];
    list.push(
      <NavLink
        key={`/news/activity`}
        className="text-black font-bold mx-2"
        exact
        to={`/news/activity`}
        activeStyle={{
          color: "#F8B714",
        }}
      >
        {1}
      </NavLink>
    );
    for (let i = 2; i <= data.length / 10 + 1; i++) {
      list.push(
        <NavLink
          key={`/news/activity/${i}`}
          className="text-black font-bold mx-2"
          exact
          to={`/news/activity/${i}`}
          activeStyle={{
            color: "#F8B714",
          }}
        >
          {i}
        </NavLink>
      );
    }
    return list;
  };

  const _ClickPageBtn = (type, newpage = 0) => {
    if (type === "plus" && page + 1 <= parseInt(data.length / 10) + 1) {
      history.push("/news/activity/" + (page + 1));
    } else if (type === "minus" && page - 1 >= 1) {
      if (page - 1 === 1) history.push("/news/activity");
      else history.push("/news/activity/" + (page - 1));
    }
  };

  const _HandleSelectCity = (event) => {
    setinput_city(event.target.value);
  };

  const _HandleSelectYear = (event) => {
    setinput_year(event.target.value);
  };

  const _ClickSearchBtn = (event) => {
    let result = [];
    if (input_city === "-1") result = news;
    else
      result = news.filter(
        (ele) => ele.city === city_data[input_city].CityName
      );

    if (input_year !== "all")
      result = result.filter(
        (ele) => ele.activityTime.slice(0,4) === input_year
      );

    if (result.length > 0) setdata(result);
    else alert("查無資料");
  };

  return (
    <div className="w-full max-w-7xl md:px-10 grid gap-10 justify-items-center section">
      <h2>活動資訊</h2>
      <div className="grid md:grid-flow-col smDefault:grid-cols-1 md:gap-10 gap-y-5 gap-x-10 justify-items-center">
        <div className="grid grid-flow-col md:gap-10 gap-5 justify-items-start items-center">
          <span className="font-bold">選擇地區</span>
          <select
            className="input-select w-32"
            onChange={_HandleSelectCity}
            value={input_city}
          >
            <option defaultValue value={"-1"}>
              全部地區
            </option>
            {city_data.map((item, idx) => (
              <option key={`cityOption-${idx}`} value={idx}>
                {item.CityName}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-flow-col md:gap-10 gap-5 justify-items-start items-center">
          <span className="font-bold">選擇時間</span>
          <select
            className="input-select w-32"
            onChange={_HandleSelectYear}
            value={input_year}
          >
            <option defaultValue value="all">
              全部年份
            </option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <a
          className="btn bg-yellow-default text-white md:w-full w-max smDefault:col-span-2 hover:bg-yellow-hover"
          onClick={_ClickSearchBtn}
        >
          查詢
        </a>
      </div>
      <div className="w-full lg:px-10">
        {data.slice(0 + (page - 1) * 10, 10 + (page - 1) * 10).map((item) => (
          <NewsItem key={item.title} data={item} type={"activity"} />
        ))}
      </div>
      {data.length > 0 ? (
        <div>
          <a className="mx-4" onClick={() => _ClickPageBtn("minus")}>
            <FontAwesomeIcon
              icon={faAngleLeft}
              color={page === 1 ? "#c8c8c8" : "#33333"}
            />
          </a>
          {_RenderPageBtn()}
          <a className="mx-4" onClick={() => _ClickPageBtn("plus")}>
            <FontAwesomeIcon
              icon={faAngleRight}
              color={
                page === parseInt(data.length / 10) + 1 ? "#c8c8c8" : "#33333"
              }
            />
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default Activity;
