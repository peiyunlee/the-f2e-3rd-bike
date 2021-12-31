import { useState } from "react";
import * as authApi from "../../api/authApi";
import * as storeApi from "../../api/storeApi";

function SignupForm({ setisLogin }) {
  const MESSAGE = [" ", "*兩次密碼不符合", "*E-mail重複註冊", "succes"];
  const [errorMessage, seterrorMessage] = useState(MESSAGE[0]);
  const [input_email, setinput_email] = useState("");
  const [input_password1, setinput_password1] = useState("");
  const [input_password2, setinput_password2] = useState("");

  const _handleInputEmailChange = (e) => {
    setinput_email(e.target.value);
  };

  const _handleInputPasswordChange = (idx, e) => {
    const password = e.target.value;
    switch (idx) {
      case 0:
        setinput_password1(password);
        break;
      case 1:
        setinput_password2(password);
        break;
      default:
    }
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: input_email,
      username: input_email,
      password1: input_password1,
      password2: input_password2,
    };

    try {
      const register_result = await authApi.register(data);
      if (register_result.status === 200 || register_result.status === 500) {
        const store_result = await storeApi.createStore(
          {
            user_id: register_result.user.user_id,
            username: register_result.user.username,
          },
          register_result.user.access_token
        );
        console.log(store_result);
        alert("註冊成功");
        seterrorMessage("");
        setisLogin(true);
      } else seterrorMessage(register_result.detail);
    } catch (error) {
      seterrorMessage("error");
    }
  };

  return (
    <form className="grid gap-4 w-full" method="post" onSubmit={_handleSubmit}>
      <div className="text-2xl font-bold tracking-normal">註冊</div>
      <label className="w-80 flex flex-col justify-start">
        <span className="w-max mb-3">E-mail</span>
        <input
          className="input-text mb-2"
          type="email"
          size="30"
          placeholder="請輸入E-mail"
          value={input_email}
          onChange={_handleInputEmailChange}
          required
        />
      </label>
      <label className="w-80 flex flex-col justify-start">
        <span className="w-max mb-3">密碼</span>
        <input
          className="input-text mb-2"
          placeholder="請輸入密碼"
          type="password"
          minLength="6"
          required
          value={input_password1}
          onChange={(e) => _handleInputPasswordChange(0, e)}
        />
      </label>
      <label className="w-80 flex flex-col justify-start">
        <span className="w-max mb-3">確認密碼</span>
        <input
          className="input-text mb-2"
          placeholder="請再輸入一次密碼"
          type="password"
          minLength="6"
          required
          value={input_password2}
          onChange={(e) => _handleInputPasswordChange(1, e)}
        />
      </label>
      <div className="flex">
        <span className="text-red h-6">{errorMessage}</span>
      </div>
      <input
        value="立即註冊"
        type="submit"
        className="btn bg-yellow-default w-full text-white mr-2.5 block cursor-pointer hover:btn-yellow-hover my-3"
      />
      <div className="flex">
        <span className="text-gray-default">已經有會員了嗎?</span>
        <a
          className="text-yellow-default font-bold underline justify-self-end ml-2"
          onClick={() => setisLogin(true)}
        >
          馬上登入
        </a>
      </div>
    </form>
  );
}

export default SignupForm;
