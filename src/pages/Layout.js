import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="Layout-nav">
          <ul className="Layout-ul">
            <li className="Layout-li">
              <Link className="Layout-Link" to="/">
                Home
              </Link>
            </li>
            <li className="Layout-li">
              <Link className="Layout-Link" to="/Recipe">
                Recipe
              </Link>
            </li>
            <li className="Layout-li">
              <Link className="Layout-Link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="Layout-searchBar">
            <input type="text" placeholder="Search.." />
          </div>
        </nav>

        <Outlet />
      </header>
    </>
  );
};

export default Layout;
