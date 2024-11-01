import React from "react";
import { Cpu, Router, Gauge, Leaf, ChevronRight } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: "ict" | "iat" | "env" | "agri";
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  title,
  description,
  icon,
  variant,
}) => (
  <div className="department-card">
    <div className="department-card__header">
      <div
        className={`department-card__icon-wrapper department-card__icon-wrapper--${variant}`}
      >
        {icon}
      </div>
      <h3 className="department-card__title">{title}</h3>
    </div>
    <div className="department-card__content">
      <p className="department-card__description">{description}</p>
      <button
        className={`department-card__button department-card__button--${variant}`}
      >
        <span>Start Quiz</span>
        <ChevronRight size={20} />
      </button>
    </div>
  </div>
);

const DepartmentSelection: React.FC = () => {
  const departments = [
    {
      title: "Information and Communication Technology",
      description:
        "Explore the world of ICT through interactive quizzes covering programming, networking, and digital innovation.",
      icon: <Cpu className="department-card__icon" size={40} />,
      variant: "ict" as const,
    },
    {
      title: "Environmental Technology",
      description:
        "Learn about sustainable practices, environmental management, and green technologies through engaging quizzes.",
      icon: <Router className="department-card__icon" size={40} />,
      variant: "env" as const,
    },
    {
      title: "Instrumentation and Automation Technology",
      description:
        "Test your knowledge in industrial automation, control systems, and smart manufacturing processes.",
      icon: <Gauge className="department-card__icon" size={40} />,
      variant: "iat" as const,
    },

    {
      title: "Agricultural Technology",
      description:
        "Discover modern farming techniques, precision agriculture, and sustainable food production systems.",
      icon: <Leaf className="department-card__icon" size={40} />,
      variant: "agri" as const,
    },
  ];

  return (
    <div className="department-page">
      <NavBar />

      <main className="departments">
        <div className="departments__container">
          <div className="departments__header">
            <h1 className="departments__header-title">
              Choose Your Department
            </h1>
            <p className="departments__header-subtitle">
              Select your department to access specialized quizzes and learning
              materials
            </p>
          </div>

          <div className="departments__grid">
            {departments.map((dept, index) => (
              <DepartmentCard
                key={index}
                title={dept.title}
                description={dept.description}
                icon={dept.icon}
                variant={dept.variant}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DepartmentSelection;
