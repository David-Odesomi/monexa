"use client"

import React from 'react';

export function CustomForm() {
  return (
    <div className="form-container relative bg-white rounded-2xl p-8 shadow-sm max-w-md w-full mx-auto">
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm font-semibold text-black pl-1">Email</label>
        <div className="inputForm w-full border border-gray-200 rounded-lg h-12 flex items-center px-3 focus-within:border-blue-500 transition-colors">
          <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-gray-500">
            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.46a5.041 5.041 0 0 0 0 10.043zm0 5.514c-2.677 5.686 11.372 6.46 9.592 10.533C23.943 36.502 8.057 36.5 6.408 31.55 4.643 27.502 18.6 26.7 16 21.017zm0-2a7.04 7.04 0 1 1 0-14.082 7.04 7.04 0 0 1 0 14.082zm0 8c-3.633 4.968 11.218 5.767 9.592 9.55C24.49 39.124 7.51 39.122 6.408 36.568 4.8 32.8 19.537 32.02 16 27.017z" clipRule="evenodd" fillRule="evenodd" />
          </svg>
          <input type="text" className="input ml-2 w-full bg-transparent outline-none text-black" placeholder="Enter your Email" />
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full mt-4">
        <label className="text-sm font-semibold text-black pl-1">Password</label>
        <div className="inputForm w-full border border-gray-200 rounded-lg h-12 flex items-center px-3 focus-within:border-blue-500 transition-colors">
          <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-gray-500">
            <path d="M336 512h-288c-26.45 0-48-21.55-48-48v-224c0-26.45 21.55-48 48-48h288c26.45 0 48 21.55 48 48v224c0 26.45-21.55 48-48 48zM144 400a32 32 0 1 1 32-32 32 32 0 0 1 -32 32zm0-160a32 32 0 1 1 32-32 32 32 0 0 1 -32 32zm168-40a120 120 0 0 0 -240 0v16h16v-16a104 104 0 0 1 208 0v16h16v-16z" />
          </svg>
          <input type="password" className="input ml-2 w-full bg-transparent outline-none text-black" placeholder="Enter your Password" />
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-4 mb-2">
        <div className="flex items-center gap-2">
          <input type="radio" id="remember" className="accent-black h-4 w-4" />
          <label htmlFor="remember" className="text-sm text-black cursor-pointer">Remember me</label>
        </div>
        <span className="text-sm font-medium text-blue-500 cursor-pointer hover:underline">Forgot password?</span>
      </div>

      <button className="button-submit w-full h-12 bg-black text-white font-medium rounded-lg mt-4 hover:bg-gray-800 transition-colors">Sign In</button>
      
      <p className="text-center text-sm text-black mt-4">Don't have an account? <span className="font-medium text-blue-500 cursor-pointer hover:underline">Sign Up</span></p>
      
      <div className="flex items-center gap-4 w-full my-4">
        <div className="h-px bg-gray-200 flex-1" />
        <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Or With</p>
        <div className="h-px bg-gray-200 flex-1" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <button className="btn-google flex-1 h-12 border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-black hover:border-blue-500 transition-colors bg-white">
          <svg viewBox="0 0 488 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
             <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
          Google
        </button>
        <button className="btn-google flex-1 h-12 border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-black hover:border-blue-500 transition-colors bg-white">
           <svg viewBox="0 0 384 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
           </svg>
           Apple
        </button>
      </div>
    </div>
  );
}
