import { useState } from "react";
import { useDispatch } from "react-redux";
import * as api from "../../api/authApi";
import * as actions from "../../actions/auth";

function LoginForm({ setisLogin, setshowAuth }) {
  const ERRORMESSAGE = ["", "*E-mail尚未註冊", "*密碼輸入錯誤"];
  const [errorMessage, seterrorMessage] = useState(ERRORMESSAGE[0]);
  const [input_email, setinput_email] = useState("");
  const [input_password, setinput_password] = useState("");

  const dispatch = useDispatch();

  const _handleInputEmailChange = (e) => {
    setinput_email(e.target.value);
  };

  const _handleInputPasswordChange = (e) => {
    setinput_password(e.target.value);
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: input_email,
      password: input_password,
    };
    try {
      const result = await api.login(data);
      if (result.status === 200 || result.status === 500) {
        seterrorMessage("");
        const loginData = {
          access_token: result.user.access_token,
          user_id: result.user.user_id,
          username: result.user.username,
        };
        dispatch(actions.login(loginData));
        localStorage.setItem(
          "currentUser",
          JSON.stringify(loginData)
        );
        alert("登入成功");
        setshowAuth(false);
      } else seterrorMessage(result.detail);
    } catch (error) {
      console.log(error);
      seterrorMessage("error");
    }
  };

  return (
    <form className="grid gap-4 w-full" method="post" onSubmit={_handleSubmit}>
      <div className="text-2xl font-bold tracking-normal">登入</div>
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
          value={input_password}
          onChange={_handleInputPasswordChange}
        />
      </label>
      <div className="flex flex-row justify-between">
        <span className="text-red">{errorMessage}</span>
        <a className="text-gray-default underline self-end">忘記密碼</a>
      </div>
      <input
        value="會員登入"
        type="submit"
        className="btn bg-yellow-default w-full text-white mr-2.5 block cursor-pointer hover:btn-yellow-hover my-3"
      />
      <div className="flex">
        <span className="text-gray-default">尚未註冊會員嗎?</span>
        <a
          className="text-yellow-default font-bold underline justify-self-end ml-2"
          onClick={() => setisLogin(false)}
        >
          立即註冊
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
