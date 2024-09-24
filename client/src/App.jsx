import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

import "./App.css";
import "./styles/Navbar.css";
import "./styles/Userform.css";
import "./styles/Signup.css";
import "./styles/Landing.css";
import "./styles/Signin.css";
import "./styles/Userpanel.css";
import "./styles/Custommodal.css";
import "./styles/Carousel.css";
import "./styles/Movielist.css";


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
