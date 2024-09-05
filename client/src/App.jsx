import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

import "./App.css";
import "./styles/Navbar.css"
import "./styles/Userform.css";
import "./styles/Signup.css";

function App() {
  return (
    <>
    <NavBar />
    <main>
    <Outlet />
  </main>
  </>
  );
}

export default App;
