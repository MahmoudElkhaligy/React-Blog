import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The React blog</h1>
      <div className="links">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/create" activeClassName="active">
          New Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
