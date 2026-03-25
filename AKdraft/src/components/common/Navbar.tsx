import { FiSearch, FiBell } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import AkatsukiLogo from "../../assets/AkatsukiLogo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#09090b] text-white border-b border-zinc-800 sticky top-0 z-50">
      
      {/* Logo */}
      <NavLink to="/">
        <img
          src={AkatsukiLogo}
          alt="Logo"
          className="w-12 h-12 object-contain cursor-pointer"
        />
      </NavLink>

      {/* Links */}
      <ul className="flex items-center gap-10 font-semibold">

        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-white border-b-2 border-red-600 pb-1" : "text-zinc-400 hover:text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/write"
          className={({ isActive }) =>
            isActive ? "text-white border-b-2 border-red-600 pb-1" : "text-zinc-400 hover:text-white"
          }
        >
          Write
        </NavLink>

        <NavLink
          to="/vault"
          className={({ isActive }) =>
            isActive ? "text-white border-b-2 border-red-600 pb-1" : "text-zinc-400 hover:text-white"
          }
        >
          Vault
        </NavLink>

      </ul>

      {/* Right */}
      <div className="flex items-center gap-6">
        <FiSearch className="text-xl text-zinc-400 hover:text-white cursor-pointer" />

        <div className="relative">
          <FiBell className="text-xl text-zinc-400 hover:text-white cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"></span>
        </div>

        <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-700">
          <img
            src="https://via.placeholder.com/150"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;