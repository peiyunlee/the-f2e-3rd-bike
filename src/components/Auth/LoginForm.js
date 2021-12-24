import { useState } from "react";

function LoginForm({setisLogin}) {
  const ERRORMESSAGE = ["", "*E-mail尚未註冊", "*密碼輸入錯誤"];
  const [errorMessage, seterrorMessage] = useState(ERRORMESSAGE[0]);
  const [input_email, setinput_email] = useState("");
  const [input_password, setinput_password] = useState("");

  const _handleInputEmailChange = (e) => {
    setinput_email(e.target.value);
  };

  const _handleInputPasswordChange = (e) => {
    setinput_password(e.target.value);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log(input_email);
    console.log(input_password);
  };

  return (
      <form
        className="grid gap-4 w-full"
        method="post"
        onSubmit={_handleSubmit}
      >
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
            minLength="8"
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
          <a className="text-yellow-default font-bold underline justify-self-end ml-2" onClick={()=>setisLogin(false)}>
            立即註冊
          </a>
        </div>
      </form>
  );
}

export default LoginForm;
