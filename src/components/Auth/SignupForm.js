import { useState } from "react";

function SignupForm({setisLogin}) {
  const ERRORMESSAGE = ["", "*兩次密碼不符合"];
  const [errorMessage, seterrorMessage] = useState(ERRORMESSAGE[0]);
  const [input_email, setinput_email] = useState("");
  const [input_password, setinput_password] = useState(["",""]);

  const _handleInputEmailChange = (e) => {
    setinput_email(e.target.value);
  };

  const _handleInputPasswordChange = (e,idx) => {
    let password = input_password
    password[idx] = e.target.value
    setinput_password(password);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log(input_email);
    console.log(input_password);
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
          minLength="8"
          required
          value={input_password[0]}
          onChange={(e)=>_handleInputPasswordChange(e,0)}
        />
      </label>
      <label className="w-80 flex flex-col justify-start">
        <span className="w-max mb-3">確認密碼</span>
        <input
          className="input-text mb-2"
          placeholder="請再輸入一次密碼"
          type="password"
          minLength="8"
          required
          value={input_password[1]}
          onChange={(e)=>_handleInputPasswordChange(e,1)}
        />
      </label>
      <div>
        <span className="text-red">{errorMessage}</span>
      </div>
      <input
        value="立即註冊"
        type="submit"
        className="btn bg-yellow-default w-full text-white mr-2.5 block cursor-pointer hover:btn-yellow-hover my-3"
      />
      <div className="flex">
        <span className="text-gray-default">已經有會員了嗎?</span>
        <a className="text-yellow-default font-bold underline justify-self-end ml-2" onClick={()=>setisLogin(true)}>
          馬上登入
        </a>
      </div>
    </form>
  );
}

export default SignupForm;
