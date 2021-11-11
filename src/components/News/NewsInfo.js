/* eslint-disable jsx-a11y/anchor-is-valid */

import { useParams } from "react-router";
import data from '../../assets/json/news.json'

function NewsInfo() {
  const { id } = useParams()

  const _RenderAnnouncementInfo = () => {
    return data[id].information.map((paragraph) => <p className="text-left">{paragraph.map((ele) => <>{ele}<br /></>)}</p>)
  }

  const _RenderActivityInfo = () => {
    let list = [];
    let keys = Object.keys(data[id].information)
    list = keys.map((element) =>
      <div>
        <p className="text-left text-green-default font-bold">【 {element} 】</p>
        <p className="text-left">{element === '活動連結' ? data[id].information[element] : data[id].information[element].map((ele) => <>{ele}<br /></>)}</p>
      </div>
    )
    return list;
  }

  return (
    <div className="w-full max-w-7xl px-10 grid gap-10 section justify-items-start">
      <div className="flex items-end">
        <div className="mr-10 px-5 py-2 bg-yellow-default text-white w-max">{data[id].type}</div>
        <div>發布時間：{data[id].newsTime}</div>
      </div>
      <h3 className="text-lg">{data[id].title}</h3>
      {data[id].type === '活動資訊' ? _RenderActivityInfo() : _RenderAnnouncementInfo()}
    </div>
  );
}

export default NewsInfo;
