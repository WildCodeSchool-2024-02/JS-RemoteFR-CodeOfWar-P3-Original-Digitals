import { Link } from "react-router-dom";
import Banner from "../assets/images/films-banner.png";

function LandingPage() {
  return (
    <div className="landing-container">
      <section className="attract-section">
        <section className="pictures-movies">
          <img src={Banner} alt="Affiches de films et séries" />
        </section>
        <p>Films et séries en ilimité.</p>
        <p>Retrouvez vos shows et franchises favorites.</p>
      </section>
      <section className="buttons">
        <Link to="/sign">Débuter l'expérience !</Link>
        <button type="button">Pas sûr ? Testez notre partie gratuite.</button>
      </section>
    </div>
  );
}

export default LandingPage;
