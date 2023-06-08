'use client'
import { useRouter } from "next/router";

export default function Login() {
  
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-80 h-80 bg-gray-800 flex flex-col items-center">
        <form className="flex flex-col flex-grow justify-center items-center">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />

          <button>Login</button>
        </form>
      </div></div>
  )
}
