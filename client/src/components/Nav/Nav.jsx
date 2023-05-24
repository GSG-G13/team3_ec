import "./nav.css";
import { Link, NavLink } from "react-router-dom";
import { Home } from "../Home/Home";
import { ProductsPage } from "../../pages/ProductsListPage";

export const Nav = ({ setSearchValue }) => {

  return (
    <>
      <header className="navbar-home">
        <nav className="navbar-wrapper">
          <div className="navbar-left-aligned">
            <div className="logo-wrapper">
              <img
                alt="logo"
                src="https://fernstore.netlify.app/static/media/plant.a7fecfd9.png"
                className="responsive-img"
              />
            </div>
            <a className="brand-logo mx-2" href="/">
              PLANToo
            </a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-item-link">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/products"} className="nav-item-link">
                PRODUCTS
              </NavLink>
            </li>
          </ul>
          <div className="navbar-right-aligned">
            <div className="pseudo-search">
              <input type="search" placeholder="Search..." autoFocus required onChange={(e) => setSearchValue(e.target.value)} />
              <button className="fa fa-search" type="submit" ></button>
            </div>
            <ul className="navbar-nav navbar-fixed">
              <li className="nav-item">
                <Link to={"/cart"} className="nav-icon-link">
                  <i class="fa-solid fa-bag-shopping"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-icon-link">
                  <i class="nav-icon fas fa-user-circle"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
