import PropTypes from "prop-types";

export default function UserNavBar({ activeSection, setActiveSection }) {
  return (
    <aside className="user-nav">
      <ul className="user-nav-menu">
        <li>
          <button
            className={`user-nav-button ${activeSection === "AccountManagement" ? "active-button" : ""}`}
            type="button"
            onClick={() => setActiveSection("AccountManagement")}
          >
            Profil
          </button>
        </li>
        <li>
          <button
            className={`user-nav-button ${activeSection === "PasswordManagement" ? "active-button" : ""}`}
            type="button"
            onClick={() => setActiveSection("PasswordManagement")}
          >
            Mot de passe
          </button>
        </li>
        <li>
          <button
            className={`user-nav-button ${activeSection === "PreferenceManagement" ? "active-button" : ""}`}
            type="button"
            onClick={() => setActiveSection("PreferenceManagement")}
          >
            Préférences
          </button>
        </li>
      </ul>
    </aside>
  );
}

UserNavBar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};
