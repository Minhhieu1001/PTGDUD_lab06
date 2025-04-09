import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center p-2 rounded font-bold no-underline w-full ${
      isActive ? "bg-pink-500 text-white" : "bg-gray-100 text-black"
    }`;

  return (
    <div className="w-full p-5">
      <img src="./Image 1858.png" alt="" className="w-34 h-auto ml-5" />
      <br />
      <div>
        <ul>
          <li className="rounded ml-5 p-1 bg-gray-100">
            <div to="/dashboar" className="flex items-center p-2 rounded font-bold no-underline w-full bg-pink-500 text-white">
              <img src="./Squares four 1.png" alt="" />
              <h4 className="ml-5">Dashboar</h4>
            </div>
          </li>

          <li className="rounded ml-5 p-1 bg-gray-100">
            <div to="/project" className="flex p-2 font-bold">
              <img src="./Folder.png" alt="" />
              <h4 className="ml-5">Project</h4>
            </div>
          </li>

          <li className="rounded ml-5 p-1 bg-gray-100">
            <div to="/team" className="flex p-2 font-bold">
              <img src="./Groups.png" alt="" />
              <h4 className="ml-5">Team</h4>
            </div>
          </li>

          <li className="rounded ml-5 p-1 bg-gray-100">
            <div to="/analytis" className="flex p-2 font-bold">
              <img src="./Pie chart.png" alt="" />
              <h4 className="ml-5">Analytis</h4>
            </div>
          </li>

          <li className="rounded ml-5 p-1 bg-gray-100">
            <div to="/messager" className="flex p-2 font-bold">
              <img src="./Chat.png" alt="" />
              <h4 className="ml-5">Messager</h4>
            </div>
          </li>

          <li className="rounded ml-5 p-1 bg-gray-100">
            <div to="/intergations" className="flex p-2 font-bold">
              <img src="./Code.png" alt="" />
              <h4 className="ml-5">Intergations</h4>
            </div>
          </li>
          <br />
        </ul>

        <div className="ml-5 text-center p-2 bg-blue-50 rounded shadow-lg">
          <img src="./Group.png" alt="" />
          <h5 className="font-bold">V2.0 is available</h5>
          <br />
          <button className="border border-blue-500 rounded w-[150px] font-bold text-blue-600 p-1 bg-white">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
