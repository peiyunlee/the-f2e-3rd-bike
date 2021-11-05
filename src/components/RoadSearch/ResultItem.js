/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";

function ResultItem(props) {
  const [input_checked, setinput_checked] = useState(false);

  useEffect(() => {
    setinput_checked(props.data.checked);
  }, [props.data.checked]);

  function _HandleChecked() {
    setinput_checked(!input_checked);
    props.HandleCheckSingle(props.data.idx);
  }

  return (
    <a className="resultlist-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={input_checked}
        onChange={_HandleChecked}
      />
      <span className="font-ch tracking-normal">{props.data.name}</span>
    </a>
  );
}

export default ResultItem;
