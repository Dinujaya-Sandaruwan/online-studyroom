import React from "react";
// import { Link } from "react-router-dom";
import { BookOpen, PenTool, ChevronRight, Brain } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
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

      {/* Main Content */}
      <main className="main">
        <div className="main__container">
          {/* Hero Section */}
          <div className="hero">
            <h1 className="hero__title">
              Connect and Learn Through A Online Studyroom
            </h1>
            <p className="hero__subtitle">
              Join our community of knowledge enthusiasts and make learning fun!
            </p>
          </div>

          {/* Cards Section */}
          <div className="cards">
            {/* Knowledge Linkers Card */}
            <div className="card">
              <div className="card__image card__image--linker">
                <PenTool className="card__icon" size={64} />
              </div>
              <div className="card__content">
                <h2 className="card__title">Be a Knowledge Linker</h2>
                <p className="card__description">
                  Create engaging quizzes and share your expertise with learners
                  worldwide. Help shape the future of interactive education.
                </p>
                <button className="card__button card__button--purple">
                  <span>Start Creating</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Knowledge Seekers Card */}
            <div className="card">
              <div className="card__image card__image--seeker">
                <Brain className="card__icon" size={64} />
              </div>
              <div className="card__content">
                <h2 className="card__title">Be a Knowledge Seeker</h2>
                <p className="card__description">
                  Challenge yourself with diverse quizzes, learn new topics, and
                  track your progress in an engaging way.
                </p>
                <button className="card__button card__button--green">
                  <span>Start Learning</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            {/* About Section */}
            <div className="footer__section">
              <h3 className="footer__title">About Online Studyroom</h3>
              <p className="footer__description">
                Online Studyroom is an educational platform developed at the
                University of Colombo, designed to make learning interactive and
                enjoyable through our knoledgebase.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer__section">
              <h3 className="footer__title">Quick Links</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer__section">
              <h3 className="footer__title">Resources</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    Our Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    C Lang Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    API Access
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer__copyright">
            <p>
              © {new Date().getFullYear()} University of Colombo. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
