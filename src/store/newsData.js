import { createContext, useReducer } from "react";
import data_news from "../assets/json/news.json";

export const StoreContext = createContext();

let data_announcement = [];
let data_activity = [];

data_news.forEach((ele) => {
  if (ele.type === "活動資訊") data_activity.push(ele);
  else data_announcement.push(ele);
});

const initialState = {
  news: [],
  news_announcement: [],
  news_activity: []
};

initialState.news = data_news.sort(function (a, b) {
    const one = a.newsTime.split(" / ").join("");
    const two = b.newsTime.split(" / ").join("");
    return two - one;
  })
  .map((item, idx) => {
    if (item.type === "活動資訊") initialState.news_activity.push(item);
    else initialState.news_announcement.push(item);
    item.id = idx;
    return item
  });

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function NewsStoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
