import React from "react";
import { Cpu, Gauge, Leaf, Router, Plus, Library } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { Link } from "react-router-dom";

interface CreatorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: "ict" | "iat" | "env" | "agri";
  stats: {
    quizzes: number;
    questions: number;
  };
}

const CreatorCard: React.FC<CreatorCardProps> = ({
  title,
  description,
  icon,
  variant,
  stats,
}) => {
  useAuthRedirect();
  return (
    <div className={`creator-card creator-card--${variant}`}>
      <div className="creator-card__content">
        <div className="creator-card__header">
          <div
            className={`creator-card__icon-wrapper creator-card__icon-wrapper--${variant}`}
          >
            {icon}
          </div>
          <h3 className="creator-card__title">{title}</h3>
        </div>

        <div className="creator-card__stats">
          <div className="creator-card__stat">
            <div className="creator-card__stat-number">{stats.quizzes}</div>
            <div className="creator-card__stat-label">Quizzes</div>
          </div>
          <div className="creator-card__stat">
            <div className="creator-card__stat-number">{stats.questions}</div>
            <div className="creator-card__stat-label">Questions</div>
          </div>
        </div>

        <p className="creator-card__description">{description}</p>

        <div className="creator-card__actions">
          <Link to="/adding-method">
            <button className="creator-card__button creator-card__button--primary">
              <Plus size={18} />
              <span>Create Now</span>
            </button>
          </Link>
          <button className="creator-card__button creator-card__button--secondary">
            <Library size={18} />
            <span>View All</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const QuizCreator: React.FC = () => {
  const departments = [
    {
      title: "ICT Department",
      description:
        "Create interactive learning content covering programming, networking, cybersecurity, and emerging technologies.",
      icon: <Cpu className="creator-card__icon" size={24} />,
      variant: "ict" as const,
      stats: {
        quizzes: 24,
        questions: 186,
      },
    },
    {
      title: "IAT Department",
      description:
        "Design interactive learning content about industrial automation, robotics, and control systems.",
      icon: <Gauge className="creator-card__icon" size={24} />,
      variant: "iat" as const,
      stats: {
        quizzes: 18,
        questions: 145,
      },
    },
    {
      title: "Environmental Tech",
      description:
        "Develop interactive learning content on environmental management and sustainable practices.",
      icon: <Router className="creator-card__icon" size={24} />,
      variant: "env" as const,
      stats: {
        quizzes: 16,
        questions: 128,
      },
    },
    {
      title: "Agricultural Tech",
      description:
        "Create assessments covering modern farming and food production systems.",
      icon: <Leaf className="creator-card__icon" size={24} />,
      variant: "agri" as const,
      stats: {
        quizzes: 20,
        questions: 160,
      },
    },
  ];

  return (
    <div className="creator-page">
      <NavBar />

      <main className="creator">
        <div className="creator__container">
          <div className="creator__header">
            <h1 className="creator__header-title">Select Your Department</h1>
            <p className="creator__header-subtitle">
              Share your knowledge by creating engaging learning experiences for
              your department. Choose your field below to get started.
            </p>
          </div>

          <div className="creator__grid">
            {departments.map((dept, index) => (
              <CreatorCard
                key={index}
                title={dept.title}
                description={dept.description}
                icon={dept.icon}
                variant={dept.variant}
                stats={dept.stats}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuizCreator;
