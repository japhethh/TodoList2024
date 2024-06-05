import React, { useState, ChangeEvent, FormEvent, useEffect, useContext } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
type Props = {
  url: string
};


const LoginForm = ({ url }: Props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });



  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    const response = await axios.post(`${url}/api/user/login`, formData);
    if (response.data.success) {
      toast.success(response.data.message)
      localStorage.setItem("token", response.data.token)
    }
    else{
      toast.error(response.data.message)
    }

  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="rounded-md p-4 bg-white text-black w-[300px]">
        <div className="text-xl font-semibold py-5">
          <h1>LoginForm</h1>
        </div>
        <form onSubmit={handleLogin}>
          {/* <div className='flex flex-col'>
            <label className="font-semibold " htmlFor="name">Name</label>
            <input className="bg-white border-2 border-gray-400 rounded-md text-black px-2 py-1" type="text" name="name" id="name" onChange={onChangeHandler} />
          </div> */}
          <br />
          <div className='flex flex-col'>
            <label className="font-semibold " htmlFor="email">Email</label>
            <input className="bg-white text-black px-2 py-1 border-2 border-gray-400 rounded-md" type="text" name="email" id="email" onChange={onChangeHandler} />
          </div>

          <br />
          <div className='flex flex-col'>
            <label className="font-semibold " htmlFor="password">Password</label>
            <input className="bg-white text-black px-2 py-1 border-2 border-gray-400 rounded-md" type="text" name="password" id="password" onChange={onChangeHandler} />
          </div>

          <br />
          <button className='border-[2px] w-full font-semibold border-gray-600 py-2 px-5 rounded-xl text-[#272343]' type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;