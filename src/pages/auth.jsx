import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Auth({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg">
        {isLogin ? <Login setUser={setUser} /> : <Register setUser={setUser} />}

        <p className="mt-4 text-center text-sm sm:text-base">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button className="text-blue-500 font-medium" onClick={() => setIsLogin(false)}>
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button className="text-blue-500 font-medium" onClick={() => setIsLogin(true)}>
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
