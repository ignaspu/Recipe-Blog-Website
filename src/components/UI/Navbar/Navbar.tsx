import { Link } from "react-router-dom";
import UsersContext from "../../../context/UsersContext";
import { useContext } from "react";

const Navbar = () => {

  const { loggedInUser, setLoggedInUser, isAdmin } = useContext(UsersContext);
  console.log(loggedInUser)
  const handleLogout = () => {
    setLoggedInUser(false);
  }

  return (
    <header>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">NikosReceptai.lt</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Meniu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {
                  loggedInUser &&
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sveiki, {loggedInUser.vartotojoVardas}
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Profilis</a></li>
                      <li><a className="dropdown-item" href="#">Mano receptai</a></li>
                      <li><a className="dropdown-item" href="#">Pridėti receptą</a></li>
                      {
                        loggedInUser.admin &&
                        <li><a className="dropdown-item" href="#">Administracija</a></li>
                      }
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" onClick={handleLogout}>Atsijungti</a></li>
                    </ul>
                  </li>
                }
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Namai</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/receptai">Receptai</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/apie">Apie mus</Link>
                </li>
                {
                  !loggedInUser &&
                  <li className="nav-item">
                    <Link className="nav-link" to="/prisijungimas">Prisijungti</Link>
                  </li>
                }
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Ką norite surasti?" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Ieškoti</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;