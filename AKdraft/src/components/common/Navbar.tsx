import { FiSearch, FiBell } from "react-icons/fi";
import AkatsukiLogo from "../../assets/AkatsukiLogo.png";

const Navbar = () => {

    
  return (
    <div className="p-10 h-auto">
        <nav className="flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm">
      
     
      <div className="flex items-center gap-2">
        <img src={AkatsukiLogo} alt="Logo" className="w-28 object-contain" />
      </div>

      <ul className="flex gap-10 font-medium text-4xl pb-2 ">
        <li className="hover:scale-110  cursor-pointer">Home</li>
        <li className="hover:scale-110 cursor-pointer">Write</li>
        <li className="hover:scale-110 cursor-pointer">Vault</li>
        <li className="hover:scale-110 cursor-pointer">Explore</li>
      </ul>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-lg"
          />
        </div>

        
        <div className="relative cursor-pointer">
          <FiBell className="text-5xl text-gray-700 hover:text-black transition" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            
          </span>
        </div>
      </div>

    </nav>
    </div>
  );
};

export default Navbar;