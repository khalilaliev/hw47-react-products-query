import { NAVBAR_ITEMS } from "../../config/NavbarConfig";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <a className="navbar-item uppercase">Hillel Products</a>
        </div>
        <div className="navbar-center">
          {NAVBAR_ITEMS.map((item) => {
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar-item ${
                  pathname === item.path ? "navbar-active" : ""
                } `}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="container">
        <Routes>
          {NAVBAR_ITEMS.map((item) => {
            return (
              <Route key={item.path} path={item.path} element={item.element} />
            );
          })}
        </Routes>
      </div>
    </>
  );
};

export default Navbar;
