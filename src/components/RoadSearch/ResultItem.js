/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";

function ResultItem({ name, checked }) {
  const [input_checked, setinput_checked] = useState(false);

  useEffect(() => {
    setinput_checked(checked);
  }, [checked]);

  function HandleChecked() {
    setinput_checked(!input_checked);
  }

  return (
    <a className="resultlist-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={input_checked}
        onChange={HandleChecked}
      />
      <span className="font-ch tracking-normal">{name}</span>
    </a>
  );
}

export default ResultItem;
