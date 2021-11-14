/* eslint-disable jsx-a11y/anchor-is-valid */

import { useParams } from "react-router";
import { Fragment, useContext } from "react";
import { StoreContext } from "../../store/newsData";

function NewsInfo() {
  const { id } = useParams();

  const {
    state: { news },
  } = useContext(StoreContext);

  const _RenderAnnouncementInfo = () => {
    return news[id].information.map((paragraph, idx) => (
      <p key={`p-${idx}`} className="text-left">
        {paragraph.map((ele, index) => (
          <Fragment key={`fragment-${idx}-${index}`}>
            <span>{ele}</span>
            <br />
          </Fragment>
        ))}
      </p>
    ));
  };

  const _RenderActivityInfo = () => {
    let list = [];
    let keys = Object.keys(news[id].information);
    list.push(
      <div>
        <p className="text-left text-green-default font-bold mb-4">
          【 活動時間 】
        </p>
        <p className="text-left pl-2">{news[id].activityTime}</p>
      </div>
    );
    list.push(
      keys.map((element) => (
        <div>
          <p className="text-left text-green-default font-bold mb-4">
            【 {element} 】
          </p>
          <p className="text-left pl-2">
            {element === "活動連結" ? (
              <a
                key={"link"}
                href={news[id].information[element]}
                target="_blank"
                rel="noreferrer"
                className="text-blue"
              >
                {news[id].information[element]}
              </a>
            ) : (
              news[id].information[element].map((ele) => (
                <>
                  {ele}
                  <br />
                </>
              ))
            )}
          </p>
        </div>
      ))
    );
    return list;
  };

  return (
    <div className="w-full max-w-7xl md:px-10 px-5 grid gap-10 section justify-items-start">
      <div className="flex md:items-end md:flex-row flex-col">
        <div className="mr-10 px-5 py-2 bg-yellow-default text-white w-max md:mb-0 mb-5">
          {news[id].type}
        </div>
        <div>發布時間：{news[id].newsTime}</div>
      </div>
      <h3 className="text-left">{news[id].title}</h3>
      {news[id].type === "活動資訊"
        ? _RenderActivityInfo()
        : _RenderAnnouncementInfo()}
    </div>
  );
}

export default NewsInfo;
