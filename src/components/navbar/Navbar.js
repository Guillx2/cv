import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-list-option">
          <a href="/">Inicio</a>
        </li>
        <li className="navbar-list-option">
          <a href="/">Sobre Mi</a>
        </li>{" "}
        <li className="navbar-list-option">
          <a href="/">Formación</a>
        </li>{" "}
        <li className="navbar-list-option">
          <a href="/">Experiencia</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
