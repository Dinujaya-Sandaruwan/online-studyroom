import React from "react";
// import { Link } from "react-router-dom";
import { PenTool, ChevronRight, Brain } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <NavBar />

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
                <Link to="/select-dep-to-add" className="navigation-link">
                  <button className="card__button card__button--purple">
                    <span>Start Creating</span>
                    <ChevronRight size={20} />
                  </button>
                </Link>
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
                <Link to="/select-dep-to-play" className="navigation-link">
                  <button className="card__button card__button--green">
                    <span>Start Learning</span>

                    <ChevronRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
