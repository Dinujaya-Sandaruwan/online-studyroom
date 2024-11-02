import { BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isLoggedIn = document.cookie
    .split("; ")
    .some((cookie) => cookie.startsWith("login=true"));

  const clearLoginCookie = () => {
    document.cookie = "login=; path=/; max-age=0";
    window.location.reload();
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/" className="nav__link-to-home">
          <div className="nav__logo">
            <BookOpen className="nav__logo-icon" size={32} />
            <span className="nav__logo-text">Online Studyroom</span>
          </div>
        </Link>
        {isLoggedIn && (
          <div className="nav__links">
            <div className="link-group">
              <Link to="/select-dep-to-add" className="link">
                Add Quiz
              </Link>
              <Link to="/select-dep-to-play" className="link">
                Play Quiz
              </Link>
              <Link to="/leader-board" className="link">
                Leaderboard
              </Link>
            </div>
            <div className="profile-group" onClick={clearLoginCookie}>
              <p className="user-name">UserName</p>
              <div className="profile-icon">
                <User />
              </div>
            </div>
          </div>
        )}
        {!isLoggedIn && (
          <div className="nav__buttons">
            <Link
              to="/sign-in"
              className="nav__button nav__button--secondary nav__signIn"
            >
              Sign In
            </Link>
            <button className="nav__button nav__button--primary">
              Create Account
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
