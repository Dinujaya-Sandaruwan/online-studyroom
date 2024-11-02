import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/" className="nav__link-to-home">
          <div className="nav__logo">
            <BookOpen className="nav__logo-icon" size={32} />
            <span className="nav__logo-text">Online Studyroom</span>
          </div>
        </Link>
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
