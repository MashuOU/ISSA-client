import { useState } from "react";
import Chat from "./ChatBubble";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className={` ${open ? "w-72" : "w-20 "} bg-[#548999] h-screen p-5  pt-8 relative duration-300 `}>
        <img
          src="https://res.cloudinary.com/dslzpyibe/image/upload/v1677950995/assets/control_jdqubc.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img src="https://res.cloudinary.com/dslzpyibe/image/upload/v1677952222/logo_cv5mzy.png" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
        </div>
        <ul className="pt-6">
          <Link to="/">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
            >
              <span className="material-symbols-outlined ">dashboard</span>
              <span className={`${!open && "hidden"} origin-left duration-200 font-Playfair text-[1rem]`}>Dashboard</span>
            </li>
          </Link>
          <Link to="/class">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
            >
              <span className="material-symbols-outlined">description</span>
              <span className={`${!open && "hidden"} origin-left duration-200 font-Playfair text-[1rem]`}>Classes</span>
            </li>
          </Link>
          <Link to="/attendance">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
            >
              <span className="material-symbols-outlined">room_preferences</span>
              <span className={`${!open && "hidden"} origin-left duration-200 font-Playfair text-[1rem]`}>Attendences</span>
            </li>
          </Link>
          <Link to="/schedule">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
            >
              <span className="material-symbols-outlined">date_range</span>
              <span className={`${!open && "hidden"} origin-left duration-200 font-Playfair text-[1rem]`}>Schedules</span>
            </li>
          </Link>
          <Link to="/teacher">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
            >
              <span className="material-symbols-outlined">groups</span>
              <span className={`${!open && "hidden"} origin-left duration-200 font-Playfair text-[1rem]`}>Teachers</span>
            </li>
          </Link>
          <li
            onClick={logout}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
          >
            <span className="material-symbols-outlined ">logout</span>
            <span className={`${!open && "hidden"} origin-left duration-200 font-Playfair text-[1rem]`}>Logout</span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4  justify-center mt-[23rem]
              `}
          >
            <Chat />
          </li>
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold font-raleway italic">I S S A</h1>
      </div> */}
    </>
  );
};
export default Sidebar;