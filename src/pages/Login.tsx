import React, { useState } from "react";
import {
  LogIn,
  Mail,
  Lock,
  GitBranch,
  Facebook,
  Twitter,
  Github,
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // src/utils/cookieUtils.js
  const setLoginCookie = () => {
    document.cookie = "login=true; path=/; max-age=3600"; // Cookie valid for 1 hour
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    // console.log("Login attempted", { email, password });
    setLoginCookie();
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className="login-page">
        <div className="login-container">
          {/* Left Side - Branding & Welcome */}
          <div className="login-branding">
            <div className="login-branding__content">
              <GitBranch className="login-branding__icon" size={64} />
              <h1 className="login-branding__title">Online Studyroom</h1>
              <p className="login-branding__subtitle">
                Connect, Learn, and Grow with Interactive Quizzes
              </p>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="login-form">
            <div className="login-form__wrapper">
              <h2 className="login-form__title">Welcome Back!</h2>
              <p className="login-form__subtitle">
                Enter your credentials to access your account
              </p>

              <form onSubmit={handleSubmit} className="form">
                <div className="form__group">
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                  <div className="form__input-group">
                    <Mail className="form__icon" />
                    <input
                      type="email"
                      id="email"
                      className="form__input"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form__group">
                  <label htmlFor="password" className="form__label">
                    Password
                  </label>
                  <div className="form__input-group">
                    <Lock className="form__icon" />
                    <input
                      type="password"
                      id="password"
                      className="form__input"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form__actions">
                  <div className="form__remember">
                    <input
                      type="checkbox"
                      id="remember"
                      className="form__checkbox"
                    />
                    <label htmlFor="remember" className="form__remember-label">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="form__forgot-password">
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="form__submit">
                  <LogIn size={20} />
                  <span>Login</span>
                </button>
              </form>

              <div className="login-form__divider">
                <span>or continue with</span>
              </div>

              <div className="social-login">
                <button className="social-login__button social-login__button--facebook">
                  <Facebook size={20} />
                </button>
                <button className="social-login__button social-login__button--twitter">
                  <Twitter size={20} />
                </button>
                <button className="social-login__button social-login__button--github">
                  <Github size={20} />
                </button>
              </div>

              <div className="login-form__signup">
                <p>
                  Don't have an account?
                  <a href="#" className="login-form__signup-link">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
