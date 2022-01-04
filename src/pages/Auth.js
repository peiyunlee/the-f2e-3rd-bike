/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import SignupForm from "../components/Auth/SignupForm";
import { ReactComponent as CloseIcon } from "../assets/icon/close.svg";

function Auth({ setshowAuth }) {
  const [isLogin, setisLogin] = useState(true);

  return (
    <div className="w-full h-screen fixed z-50 top-0 flex justify-center items-center">
      <div className="py-10 px-20 bg-white z-10 relative rounded">
        <a
          className="absolute top-6 right-6"
          onClick={() => setshowAuth(false)}
        >
          <CloseIcon />
        </a>
        {isLogin ? (
          <LoginForm setisLogin={setisLogin} setshowAuth={setshowAuth}/>
        ) : (
          <SignupForm setisLogin={setisLogin} />
        )}
      </div>
      <div
        className="bg-gray-dark w-full h-full absolute z-0"
        onClick={() => setshowAuth(false)}
      ></div>
    </div>
  );
}

export default Auth;
