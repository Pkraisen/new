import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, Package, Users } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const navItems = [
    { name: "Home", path: "/home", icon: Home },
    { name: "Products", path: "/products", icon: Package },
    { name: "Users", path: "/users", icon: Users },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-title-container">
        <h1 className="sidebar-title">Ecom</h1>
      </div>

      <div className="user-info-card">
        <p className="user-label">Logged in as:</p>
        <p className="user-email">gg@gmail.com</p>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
      <p className="copyright">© Ecom App</p>
    </aside>
  );
};

export default Sidebar;
