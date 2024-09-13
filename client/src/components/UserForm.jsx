import { useState } from "react";
import { Form } from "react-router-dom";

function UserForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Form method="post">
      <section className="form-fields">
        {/* Champ pour l'email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        {/* Champ pour le mot de passe */}
        <div className="form-group">
          <label htmlFor="password">Password</label>{" "}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={handlePasswordChange}
          />
          {/* Indicateur de force du mot de passe */}
          {password.length >= 8 ? "✅" : "❌"} minimum length at 8 characters
        </div>
        {/* Champ pour la confirmation du mot de passe */}
        <div className="form-group">
          <label htmlFor="password-confirm">Confirm your password</label>{" "}
          <input
            type="password"
            id="password-confirm"
            name="password-confirm"
            placeholder="Confirm your password"
            onChange={handleConfirmPasswordChange}
          />
          {/* Indicateur de correspondance avec le mot de passe */}
          {password === confirmPassword && password.length > 0 ? "✅" : "❌"}
        </div>
        {/* Champ pour le prénom */}
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>{" "}
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter your firstname"
          />
        </div>
        {/* Champ pour le nom */}
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>{" "}
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter your lastname"
          />
        </div>
        {/* Bouton pour la soumission du formulaire */}
        <button type="submit">Sign Up</button>
        <p className="sign-in-text">Already have an account ? Sign in</p>
      </section>
    </Form>
  );
}

export default UserForm;
