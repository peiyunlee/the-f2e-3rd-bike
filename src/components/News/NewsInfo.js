/* eslint-disable jsx-a11y/anchor-is-valid */

import { useParams } from "react-router";
import data from "../../assets/newSort";
import { Fragment } from "react";

function NewsInfo() {
  const { id } = useParams();

  const _RenderAnnouncementInfo = () => {
    return data[id].information.map((paragraph, idx) => 
      <p key={`p-${idx}`} className="text-left">
        {paragraph.map((ele, index) => (
          <Fragment key={`fragment-${idx}-${index}`}>
            <span>{ele}</span>
            <br />
          </Fragment>
        ))}
      </p>
    )
  };

  const _RenderActivityInfo = () => {
    let list = [];
    let keys = Object.keys(data[id].information);
    list.push(
      <div>
        <p className="text-left text-green-default font-bold mb-4">
          【 活動時間 】
        </p>
        <p className="text-left pl-2">{data[id].activityTime}</p>
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
                href={data[id].information[element]}
                target="_blank"
                rel="noreferrer"
                className="text-blue"
              >
                {data[id].information[element]}
              </a>
            ) : (
              data[id].information[element].map((ele) => (
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
    <div className="w-full max-w-7xl px-10 grid gap-10 section justify-items-start">
      <div className="flex items-end">
        <div className="mr-10 px-5 py-2 bg-yellow-default text-white w-max">
          {data[id].type}
        </div>
        <div>發布時間：{data[id].newsTime}</div>
      </div>
      <h3 className="text-left">{data[id].title}</h3>
      {data[id].type === "活動資訊"
        ? _RenderActivityInfo()
        : _RenderAnnouncementInfo()}
    </div>
  );
}

export default NewsInfo;
