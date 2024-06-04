import React, { useState, ChangeEvent, FormEvent } from 'react';

type Props = {};

const LoginForm = (props: Props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();
    // Add your register logic here
  };

  return (
    <div>
      <div className="py-5">
        <h1>LoginForm</h1>
      </div>
      <form action="" onSubmit={handleRegister}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={onChangeHandler} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" onChange={onChangeHandler} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" onChange={onChangeHandler} />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LoginForm;