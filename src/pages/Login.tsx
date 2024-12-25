import React from 'react';
import LoginStats from '../components/login/LoginStats';
import IssuesCard from '../components/login/IssuesCard';
import LoginForm from '../components/login/LoginForm';
import x from '../assets/image.jpg'

function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Stats and Background */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from- to-white">
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[520px]">
          <LoginStats />
          <IssuesCard />
        </div>
        <img
          src={x}
          alt="Background"
          className="absolute bottom-0 left-0 w-[245px] z-[-1]"
        />
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;