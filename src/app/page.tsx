'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: isDarkTheme 
          ? 'linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 50%, #1a3a1a 100%)'
          : 'linear-gradient(135deg, #a8d5ba 0%, #c8e6c9 50%, #d4edda 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* ImagineX Logo/Text - Top Center */}
      <div className="absolute top-4 left-1/15 transform -translate-x-1/2 z-20">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className={isDarkTheme ? 'text-white' : 'text-white'}>Imagine</span>
          <span className={isDarkTheme ? 'text-blue-500' : 'text-green-600'}>X</span>
        </h1>
      </div>

      {/* Theme Toggle - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDarkTheme 
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
              : 'bg-white text-gray-800 hover:bg-gray-100'
          } shadow-lg`}
        >
          {isDarkTheme ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-md relative z-10 flex flex-col items-center gap-4">
        {/* Sign In / Sign Up Toggle Buttons - Apple Style */}
        <div className={`flex gap-2 p-1.5 rounded-[20px] ${
          isDarkTheme ? 'bg-black/40' : 'bg-white/60'
        } backdrop-blur-md shadow-lg`}>
          <button
            onClick={() => setIsLogin(true)}
            className={`px-8 py-2.5 rounded-[16px] font-semibold text-sm transition-all duration-300 ${
              isLogin 
                ? isDarkTheme 
                  ? 'bg-white text-black shadow-lg' 
                  : 'bg-gray-900 text-white shadow-lg'
                : isDarkTheme 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-900 hover:bg-black/5'
            }`}
          >
            Sign in
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-8 py-2.5 rounded-[16px] font-semibold text-sm transition-all duration-300 ${
              !isLogin 
                ? isDarkTheme 
                  ? 'bg-white text-black shadow-lg' 
                  : 'bg-gray-900 text-white shadow-lg'
                : isDarkTheme 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-900 hover:bg-black/5'
            }`}
          >
            Sign up
          </button>
        </div>

        {/* Login Card */}
        <div 
          className={`w-full rounded-2xl shadow-2xl p-8 transition-all duration-300 ${
            isDarkTheme ? 'bg-black text-white' : 'bg-white text-gray-900'
          }`}
        >
          {isLogin ? (
            // Sign In Form
            <div className="space-y-5">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
                <p className={`text-sm font-medium ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Login in to start creating with ImagineX
                </p>
              </div>
              
              {/* Google Login */}
              <button className={`w-full py-3 border-2 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 font-semibold ${
                isDarkTheme 
                  ? 'border-gray-700 hover:border-green-500 hover:bg-green-500/10 text-white' 
                  : 'border-gray-300 hover:border-green-600 hover:bg-green-50 text-gray-700'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t ${isDarkTheme ? 'border-gray-700' : 'border-gray-300'}`}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-4 font-semibold ${isDarkTheme ? 'bg-black text-gray-400' : 'bg-white text-gray-600'}`}>
                    or use your email
                  </span>
                </div>
              </div>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email or phone"
                  className={`w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 ${
                    isDarkTheme 
                      ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:border-green-500' 
                      : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-green-600'
                  } focus:outline-none`}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className={`w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 ${
                    isDarkTheme 
                      ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:border-green-500' 
                      : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-green-600'
                  } focus:outline-none`}
                />
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="mr-2 w-4 h-4 accent-green-500"
                    />
                    <span className="font-medium">Stay Logged in</span>
                  </label>
                  <a href="#" className="text-green-500 hover:text-green-400 font-semibold transition-colors">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  Sign in
                </button>
              </form>
            </div>
          ) : (
            // Sign Up Form
            <div className="space-y-4">
              <div className="text-center mb-5">
                <h2 className="text-3xl font-bold mb-2">Create account</h2>
                <p className={`text-sm font-medium ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Join our community today
                </p>
              </div>
              
              {/* Google Signup */}
              <button className={`w-full py-3 border-2 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 font-semibold ${
                isDarkTheme 
                  ? 'border-gray-700 hover:border-green-500 hover:bg-green-500/10 text-white' 
                  : 'border-gray-300 hover:border-green-600 hover:bg-green-50 text-gray-700'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
                <span>Sign up with Google</span>
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t ${isDarkTheme ? 'border-gray-700' : 'border-gray-300'}`}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-4 font-semibold ${isDarkTheme ? 'bg-black text-gray-400' : 'bg-white text-gray-600'}`}>
                    or register with email
                  </span>
                </div>
              </div>

              <form className="space-y-3.5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 ${
                    isDarkTheme 
                      ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:border-green-500' 
                      : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-green-600'
                  } focus:outline-none`}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className={`w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 ${
                    isDarkTheme 
                      ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:border-green-500' 
                      : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-green-600'
                  } focus:outline-none`}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className={`w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 ${
                    isDarkTheme 
                      ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:border-green-500' 
                      : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-green-600'
                  } focus:outline-none`}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={`w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 ${
                    isDarkTheme 
                      ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:border-green-500' 
                      : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-green-600'
                  } focus:outline-none`}
                />
                <label className="flex items-center cursor-pointer text-sm pt-1">
                  <input 
                    type="checkbox" 
                    className="mr-2 w-4 h-4 accent-green-500"
                  />
                  <span className="font-medium">Remember me</span>
                </label>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  Sign up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
