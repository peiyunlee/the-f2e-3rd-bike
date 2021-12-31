import data_news from "../assets/json/news.json";

let data_announcement = [];
let data_activity = [];

data_news.forEach((ele) => {
  if (ele.type === "活動資訊") data_activity.push(ele);
  else data_announcement.push(ele);
});

const initialState = {
  news: [],
  news_announcement: [],
  news_activity: [],
};

initialState.news = data_news
  .sort(function (a, b) {
    const one = a.newsTime.split(" / ").join("");
    const two = b.newsTime.split(" / ").join("");
    return two - one;
  })
  .map((item, idx) => {
    if (item.type === "活動資訊") initialState.news_activity.push(item);
    else initialState.news_announcement.push(item);
    item.id = idx;
    return item;
  });

export function newsDataReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
