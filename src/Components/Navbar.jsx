import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import img from "../assets/unnamed.png";
import { Link } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect: login,
    logout: auth0Logout,
    user,
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading) return "Loading...";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 shadow-lg">
      <div className="max-w-[1180px] mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={img} alt="Logo" className="h-10 w-50 " />
        </div>

        <div className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-12 text-white text-lg font-semibold">
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
              <Link to="/">Upcoming Interviews</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
              <Link to="/StartInterview">Start Interview</Link>
            </li>
          </ul>

          {isAuthenticated ? (
            <div>
              {" "}
              <p>Logged in as {user.email}</p>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div>
              {" "}
              {error && <p>Error: {error.message}</p>}
              <button onClick={login} className="text-white bg-red-400 px-3 py-1 rounded-lg font-bold cursor-pointer">Login</button>
            </div>
          )}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600 px-6 pb-4 space-y-4">
          <ul className="space-y-4 text-white text-lg font-semibold "  onClick={() => setIsOpen(false)}>
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
              <Link to="/">Upcoming Interviews</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
              <Link to="/StartInterview">Start Interview</Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <div>
              {" "}
              <p>Logged in as {user.email}</p>
              <button onClick={logout} className="text-white bg-red-400 px-3 py-1 rounded-lg font-bold cursor-pointer">Logout</button>
            </div>
          ) : (
            <div>
              {" "}
              {error && <p>Error: {error.message}</p>}
              <button onClick={login} className="text-white bg-red-400 px-3 py-1 rounded-lg font-bold cursor-pointer">Login</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
