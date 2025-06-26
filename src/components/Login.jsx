import { useState } from "react";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      setUser({ name: savedUser.name });
    } else {
      alert("Invalid credentials. Please register if you don't have an account.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded text-sm sm:text-base"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded text-sm sm:text-base"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
      >
        Login
      </button>
    </form>
  );
}
