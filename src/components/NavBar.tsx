import { BookOpen } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <BookOpen className="nav__logo-icon" size={32} />
          <span className="nav__logo-text">Online Studyroom</span>
        </div>
        <div className="nav__buttons">
          <button className="nav__button nav__button--secondary nav__signIn">
            Sign In
          </button>
          <button className="nav__button nav__button--primary">
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
