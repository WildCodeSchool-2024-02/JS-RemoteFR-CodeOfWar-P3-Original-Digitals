import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import searchImg from "../assets/images/search.png";
import burger from "../assets/images/burger.png";

function NavBar() {
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

  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handlePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      navigate(`/movies/search/${search}`);
    }
  }, [search, navigate]);

  return (
    <nav className={`navbar ${scrollPosition !== 0 ? "scrolled" : ""}`}>
      {searchOpen ? (
        <div className="search-container">
          <select name="select" id="select">
            <option value="title">Title</option>
            <option value="category">Category</option>
          </select>
          <input className="search-input" type="text" onChange={handleSearch} />
          <button className="search-close" type="button" onClick={toggleSearch}>
            Close
          </button>
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
                Accueil
              </Link>
              <div className="separation-line" />
              <Link to="/users" onClick={toggleMenu}>
                Utilisateurs
              </Link>
              <div className="separation-line" />
              <Link to="/movies" onClick={toggleMenu}>
                Movie List
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
