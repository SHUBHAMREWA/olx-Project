import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
  let cookie = new Cookies();

  let location = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(true);

  const changeValue = (e) => {
    let input = e.target;
    let key = input.name;
    let value = input.value;

    setInput((oldData) => {
      return {
        ...oldData,
        [key]: value,
      };
    });
  };

  const handleApi = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3500/login",
        data: input,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your_token_here",
        },
      });

      if (response.data.success) {
        cookie.set("loginToken", response.data.token);
        location("/home");
      } else {
        window.alert(response.data.message);
      }
    } catch (error) {
      if (error.message == "Network Error") {
        window.alert("server Network error");
      }
    }
  };

  return (
    <div>
      <Header />

      <div className=" flex flex-col justify-between gap-7 items-center mt-5 ">
               <span className="text-blue-400 font-semibold text-2xl">  Welcome to Login page  </span> 
         <form onSubmit={handleApi} className="w-[70%] ">
             Email
          <input
            className="w-full ml-2 outline-1 outline-blue-600 p-2  bg-gray-300"
            type="text"
            name="email"
            onChange={changeValue}
            value={input.username}
          />{" "}
          <br />
          <br />
          Password
          <input
            className="w-full ml-2 outline-1 outline-blue-600 p-2 bg-gray-300"
            type={showPass ? "password" : "text"}
            name="password"
            onChange={changeValue}
            value={input.password}
          />
          <br />
          <div className="w-full flex justify-end pe-3 mt-2">
            <button type="button" onClick={() => setShowPass(!showPass)}>
              {" "}
              {showPass ? <FaEye /> : <FaEyeSlash />}{" "}
            </button>
          </div>
          <br />
          <button type="submit" className="border border-blue-500 bg-blue-400 p-2 me-2 rounded-md">
            Login
          </button>
          <Link className="underline underline-offset-8 hover:underline-offset-2 transition-all decoration-blue-500" to="/signup">SignUp</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
