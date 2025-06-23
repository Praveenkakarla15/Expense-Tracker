import { useState } from "react";

export default function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !name) return;

    const newUser = { name, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    setUser({ name });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Register
      </button>
    </form>
  );
}
