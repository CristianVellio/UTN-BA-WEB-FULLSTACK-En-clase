import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sub-regiones">Sub-Regiones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
