import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-subtitle">Let's get you set up.</p>

        <form onSubmit={handleSignup}>
          <Input
            id="name"
            label="Full name"
            type="text"
            placeholder="Jane Doe"
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="you@company.com"
          />
          <Input
            id="phone"
            label="Phone number"
            type="tel"
            placeholder="(555) 555-5555"
          />
          <Input
            id="password"
            label="Create password"
            type="password"
            placeholder="Choose a strong password"
          />

          <div className="spacer"></div>

          <Button type="submit" fullWidth>
            Create account
          </Button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="signin-link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
