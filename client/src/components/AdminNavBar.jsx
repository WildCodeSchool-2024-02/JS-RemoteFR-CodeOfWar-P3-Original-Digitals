import PropTypes from "prop-types";

export default function AdminNavBar({ setActiveSection }) {
  return (
    <aside className="admin-nav">
      <ul>
        <li>
          <button
            className="admin-nav-button"
            type="button"
            onClick={() => setActiveSection("ContentManagement")}
          >
            ContentManagement
          </button>
        </li>
        <li>
          <button
            className="admin-nav-button"
            type="button"
            onClick={() => setActiveSection("UserManagement")}
          >
            Usermanagement
          </button>
        </li>
      </ul>
    </aside>
  );
}

AdminNavBar.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};
