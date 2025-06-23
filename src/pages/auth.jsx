import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Auth({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        {isLogin ? (
          <>
            <Login setUser={setUser} />
            <p className="mt-4 text-center">
              Don't have an account?{' '}
              <button className="text-blue-500" onClick={() => setIsLogin(false)}>
                Register
              </button>
            </p>
          </>
        ) : (
          <>
            <Register setUser={setUser} />
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <button className="text-blue-500" onClick={() => setIsLogin(true)}>
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
