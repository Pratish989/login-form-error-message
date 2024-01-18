import { NavLink } from "react-router-dom";
function StyleNavbarPrivate() {
  console.log("StyledNavbarPrivate Rendered");

  return (
    <nav className="navbar">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Contact
      </NavLink>

      <NavLink
        to="/product"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Product
      </NavLink>

      <NavLink
        to="/logout"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Logout
      </NavLink>
    </nav>
  );
}

export default StyleNavbarPrivate;
