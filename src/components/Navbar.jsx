import logo from "../assets/EXPENSE TRACKER12.png";
import profileLogo from "../assets/profile.png";
import powerLogo from "../assets/power.png";

export default function NavBar({ user, setUser }) {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow p-4 space-y-2 sm:space-y-0">
      
      {/* Logo & Title */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-lg sm:text-xl">Expense Tracker</span>
      </div>

      {/* Profile & Logout */}
      <div className="flex items-center space-x-2">
        <img src={profileLogo} alt="Profile" className="w-8 h-8 rounded-full" />
        <span className="font-medium text-sm sm:text-base">{user?.name || "User"}</span>
        <button
          onClick={handleLogout}
          className="flex items-center bg-purple-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-600 text-sm sm:text-base"
        >
          <img src={powerLogo} alt="Logout" className="w-4 h-4 mr-1" />
          Logout
        </button>
      </div>
    </div>
  );
}
