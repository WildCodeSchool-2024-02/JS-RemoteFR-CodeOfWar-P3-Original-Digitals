import { Form } from "react-router-dom";
import Logo from "../assets/images/YouFilm-01.png";

function SignIn() {

  return (
    <section className="signin-container">
      <img src={Logo} alt="Youflim" />
      <Form method="post">
        <section className="form-fields">
        <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>{" "}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>{" "}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Sign In</button>
        </section>
      </Form>
    </section>
  );
}

export default SignIn;
