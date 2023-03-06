import "./Navbar.scss"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <NavLink className="nav-link"
        to="/"
        style={({ isActive }) => ({ color: isActive && "red" })}
      >
        Home
      </NavLink>
      <NavLink className="nav-link"
        to="/about"
        style={({ isActive }) => ({ color: isActive && "red" })}
      >
        About
      </NavLink>
      <NavLink className="nav-link"
        to="/projects"
        style={({ isActive }) => ({ color: isActive && "red" })}
      >
        My Projectcs
      </NavLink>
      <NavLink className="nav-link"
        to="/contact"
        style={({ isActive }) => ({ color: isActive && "red" })}
      >
        Contact
      </NavLink>
      {/* <a href="#">about</a>
      <a href="#">my projects</a>
      <a href="#">contact</a> */}
    </nav>
  );
};

export default Navbar;