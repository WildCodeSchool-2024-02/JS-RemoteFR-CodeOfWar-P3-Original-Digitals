import { Link } from "react-router-dom";
import Logo from "../assets/images/thumbnail_YouFlim-03 (1).png";

function NavBarLanding() {
  return (
    <nav className="navbar-landing">
      <img src={Logo} alt="Youflim" />
      <Link to="/login">Sign In</Link>
    </nav>
  );
}

export default NavBarLanding;
