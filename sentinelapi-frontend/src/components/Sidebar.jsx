const Sidebar = ({ setPage }) => {
    return (
      <div className="w-64 bg-gray-900 text-white h-screen p-4">
        <ul>
          <li onClick={() => setPage("dashboard")} className="cursor-pointer">Dashboard</li>
          <li onClick={() => setPage("logs")} className="cursor-pointer">Logs</li>
          <li onClick={() => setPage("settings")} className="cursor-pointer">Settings</li>
        </ul>
      </div>
    );
  };
  export default Sidebar;
  