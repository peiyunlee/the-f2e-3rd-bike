import data_news from "./json/news.json";

export default data_news
  .sort(function (a, b) {
    const one = a.newsTime.split(" / ").join("");
    const two = b.newsTime.split(" / ").join("");
    return two - one;
  })
  .map((item, idx) => {
    item.id = idx;
    return item;
  });
