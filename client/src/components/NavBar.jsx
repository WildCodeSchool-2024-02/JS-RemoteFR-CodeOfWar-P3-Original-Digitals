import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import searchImg from "../assets/images/search.png";
import burger from "../assets/images/burger.png";
import AuthContext from "../contexts/AuthContext";

function NavBar() {
  const { isAuthenticated, setIsAuthenticated, userId } =
    useContext(AuthContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handlePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);
  }, []);

  return (
    <nav className={`navbar ${scrollPosition !== 0 ? "scrolled" : ""}`}>
      {searchOpen ? (
        <div className="search-container">
          <select name="select" id="select">
            <option value="title">Title</option>
            <option value="category">Category</option>
          </select>
          <input className="search-input" type="text" onChange={handleSearch} />
          <Link
            className="search-action"
            to={`/movies/search/${search}`}
            onClick={() => toggleSearch() && setSearch("")}
          >
            Search
          </Link>
        </div>
      ) : (
        <>
          <img
            aria-hidden="true"
            onClick={toggleSearch}
            className="search-img"
            src={searchImg}
            alt="magnifying glass"
          />
          <div className={`menu-dropdown ${menuOpen ? "open" : ""}`}>
            <img
              aria-hidden="true"
              className="menu-burger-button"
              onClick={toggleMenu}
              src={burger}
              alt=""
            />
            <div className="links-list">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
              <div className="separation-line" />
              {isAuthenticated ? (
                <>
                  <Link to={`/user/${userId}`} onClick={toggleMenu}>
                    My account
                  </Link>
                  <div className="separation-line" />
                  <Link to="/movies" onClick={toggleMenu}>
                    Movie List
                  </Link>
                  <div className="separation-line" />
                  <Link
                    to="/logout"
                    onClick={() => {
                      toggleMenu();
                      setIsAuthenticated(false);
                    }}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    Login
                  </Link>
                  <div className="separation-line" />
                  <Link to="/sign" onClick={toggleMenu}>
                    Sign in
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
