'use client'
import './login.css'
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-80 h-80 bg-gray-800 flex flex-col items-center">
        <form className="flex flex-col flex-grow justify-center items-center"
         action="login/api/form" method="post">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)}/>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)}/>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>

          <button type="submit">Login</button>
        </form>
      </div></div>
  )
}
