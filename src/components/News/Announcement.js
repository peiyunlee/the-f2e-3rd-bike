/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";

import NewsItem from "./NewsItem";

function Announcement({ news }) {
  let history = useHistory();
  let location = useLocation();

  const [page, setpage] = useState(1);

  const [data, setdata] = useState(news);
  const [input_category, setinput_category] = useState("全部");
  const [input_year, setinput_year] = useState("all");

  useEffect(() => {
    const pathArr = location.pathname.split("/");
    if (pathArr.length >= 4 && pathArr[3] !== "") setpage(parseInt(pathArr[3]));
    else setpage(1);
  }, [location]);

  const _renderPageBtn = () => {
    let list = [];
    list.push(
      <NavLink
        key={`/news/announcement/`}
        className="text-black font-bold mx-2"
        exact
        to={`/news/announcement/`}
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
          key={`/news/announcement/${i}/`}
          className="text-black font-bold mx-2"
          exact
          to={`/news/announcement/${i}/`}
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

  const _clickPageBtn = (type, newpage = 0) => {
    if (type === "plus" && page + 1 <= parseInt(data.length / 10) + 1) {
      history.push("/news/announcement/" + (page + 1)+'/');
    } else if (type === "minus" && page - 1 >= 1) {
      if (page - 1 === 1) history.push("/news/announcement");
      else history.push("/news/announcement/" + (page - 1)+'/');
    }
  };

  const _HandleSelectCategory = (event) => {
    setinput_category(event.target.value);
  };

  const _HandleSelectYear = (event) => {
    setinput_year(event.target.value);
  };

  const _ClickSearchBtn = (event) => {
    let result = [];
    if (input_category === "全部") result = news;
    else result = news.filter((ele) => ele.type === input_category);

    if (input_year !== "all")
      result = result.filter((ele) => ele.newsTime.slice(0, 4) === input_year);

    if (result.length > 0) setdata(result);
    else alert("查無資料");
  };

  return (
    <div className="w-full max-w-7xl px-10 grid gap-10 justify-items-center section">
      <h2>最新公告</h2>
      <div className="grid grid-flow-col gap-10">
        <div className="grid grid-flow-col gap-10 justify-items-start items-center">
          <span className="font-bold">選擇分類</span>
          <select
            className="input-select w-32"
            onChange={_HandleSelectCategory}
            value={input_category}
          >
            <option defaultValue value="全部">
              全部分類
            </option>
            <option value="緊急通知">緊急通知</option>
            <option value="營運資訊">營運資訊</option>
          </select>
        </div>
        <div className="grid grid-flow-col gap-10 justify-items-start items-center">
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
          className="btn bg-yellow-default text-white w-full hover:bg-yellow-hover"
          onClick={_ClickSearchBtn}
        >
          查詢
        </a>
      </div>
      <div className="w-full px-10">
        {data.slice(0 + (page - 1) * 10, 10 + (page - 1) * 10).map((item) => (
          <NewsItem key={item.title} data={item} type={"announcement"} />
        ))}
      </div>
      <div>
        <a className="mx-4" onClick={() => _clickPageBtn("minus")}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            color={page === 1 ? "#c8c8c8" : "#33333"}
          />
        </a>
        {_renderPageBtn()}
        <a className="mx-4" onClick={() => _clickPageBtn("plus")}>
          <FontAwesomeIcon
            icon={faAngleRight}
            color={
              page === parseInt(data.length / 10) + 1 ? "#c8c8c8" : "#33333"
            }
          />
        </a>
      </div>
    </div>
  );
}

export default Announcement;
