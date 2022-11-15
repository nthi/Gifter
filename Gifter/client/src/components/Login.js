import React, { useState } from "react";
import { login } from "../modules/UserManager";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginForm = (e) => {
  const newLogin = {
   email: email,
   password: password
  }
    e.preventDefault();
    login(newLogin);
  };

  return (
    <>
      <>
        <h2>Log In</h2>
        <form>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <button type="submit" onClick={submitLoginForm}>
            Log In
          </button>
        </form>
      </>
    </>
  );
};
