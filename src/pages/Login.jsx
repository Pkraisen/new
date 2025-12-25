import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome back!</h1>
        <p className="auth-subtitle">Sign in to continue to your dashboard.</p>

        <form onSubmit={handleLogin}>
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="you@company.com"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <div className="auth-options">
            <label className="remember-label">
              <input type="checkbox" className="checkbox" />
              Remember me
            </label>
            <Link to="#" className="forgot-link">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" fullWidth>
            Sign in
          </Button>
        </form>

        <p className="auth-footer">
          New here?{" "}
          <Link to="/signup" className="signup-link">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
