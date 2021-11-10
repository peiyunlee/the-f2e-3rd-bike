/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { NavLink, useHistory,useLocation } from "react-router-dom";

import NewsItem from "./NewsItem";

function Activity({ news }) {
  let history = useHistory();
  let location = useLocation();

  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    const pathArr = location.pathname.split("/");
    if (pathArr.length >= 4 && pathArr[3] !== "") setpage(parseInt(pathArr[3]));
    else setpage(1)
  }, [location]);

  useEffect(() => {
    setdata(news.filter((ele)=>(ele.type === '活動資訊')));
  }, [news]);

  function _renderPageBtn() {
    let list = [];
    list.push(
      <NavLink
        key={`/news/activity/`}
        className="text-black font-bold mx-2"
        exact
        to={`/news/activity/`}
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
  }

  function _clickPageBtn(type, newpage = 0) {
    if (type === "plus" && page + 1 <= parseInt(data.length / 10) + 1) {
      history.push("/news/activity/" + (page + 1));
    } else if (type === "minus" && page - 1 >= 1) {
      if (page - 1 === 1) history.push("/news/activity/");
      else history.push("/news/activity/" + (page - 1))
    }
  }

  return (
    <div className="w-full max-w-7xl px-10 grid gap-10 justify-items-center section">
      <h2>最新公告</h2>
      <div className="grid grid-flow-col gap-10">
        <div className="grid grid-flow-col gap-10 justify-items-start items-center">
          <span className="font-bold">選擇分類</span>
          <select className="input-select w-32">
            <option defaultValue value="全部">
              全部分類
            </option>
            <option value="一般">一般</option>
            <option value="活動">活動</option>
          </select>
        </div>
        <div className="grid grid-flow-col gap-10 justify-items-start items-center">
          <span className="font-bold">選擇時間</span>
          <select className="input-select w-32">
            <option defaultValue value="全部">
              全部年份
            </option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <select className="input-select w-32">
            <option defaultValue value="全部">
              全部月份
            </option>
            <option value="11">11</option>
            <option value="10">10</option>
          </select>
        </div>
        <a className="btn bg-yellow-default text-white w-full hover:bg-yellow-hover">
          查詢
        </a>
      </div>
      <div className="w-full">
        {data.slice(0 + (page - 1) * 10, 10 + (page - 1) * 10).map((item) => (
          <NewsItem key={item.title} data={item} type={"activity"} />
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

export default Activity;
