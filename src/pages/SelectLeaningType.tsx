import React from "react";
import {
  BookOpen,
  Gamepad2,
  AlignEndVertical,
  FileText,
  Video,
  MessageCircle,
  BarChart,
  Clock,
  ArrowRight,
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { Link } from "react-router-dom";

interface LearningMethodCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant:
    | "quizzes"
    | "games"
    | "flashcards"
    | "tests"
    | "essays"
    | "video"
    | "discussion"
    | "progress"
    | "challenges";
}

const LearningMethodCard: React.FC<LearningMethodCardProps> = ({
  title,
  description,
  icon,
  variant,
}) => {
  return (
    <div className={`learning-method-card learning-method-card--${variant}`}>
      <div className="learning-method-card__content">
        <div className="learning-method-card__header">
          <div
            className={`learning-method-card__icon-wrapper learning-method-card__icon-wrapper--${variant}`}
          >
            {icon}
          </div>
          <h3 className="learning-method-card__title">{title}</h3>
        </div>

        <p className="learning-method-card__description">{description}</p>

        <Link to={`/quiz`}>
          <button className="learning-method-card__button">
            <span>Start Learning</span>
            <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

const LearningMethodSelector: React.FC = () => {
  useAuthRedirect();

  const learningMethods = [
    {
      title: "Interactive Quizzes",
      description:
        "Test your knowledge with engaging and interactive quizzes tailored to your learning objectives.",
      icon: <BookOpen className="learning-method-card__icon" size={24} />,
      variant: "quizzes" as const,
    },
    {
      title: "Interactive Mini Games",
      description:
        "Learn through fun and engaging game-based learning experiences that make education...",
      icon: <Gamepad2 className="learning-method-card__icon" size={24} />,
      variant: "games" as const,
    },
    {
      title: "Flashcards Practice",
      description:
        "Enhance memory retention with dynamic, customizable flashcard sets for effective studying.",
      icon: (
        <AlignEndVertical className="learning-method-card__icon" size={24} />
      ),
      variant: "flashcards" as const,
    },
    {
      title: "Practice Tests",
      description:
        "Simulate exam conditions and track your progress with comprehensive practice tests.",
      icon: <FileText className="learning-method-card__icon" size={24} />,
      variant: "tests" as const,
    },
    {
      title: "Essay Questions",
      description:
        "Develop critical thinking and writing skills through structured essay challenges.",
      icon: <FileText className="learning-method-card__icon" size={24} />,
      variant: "essays" as const,
    },
    {
      title: "Video Lessons",
      description:
        "Learn from high-quality, instructor-led video content that breaks down complex topics.",
      icon: <Video className="learning-method-card__icon" size={24} />,
      variant: "video" as const,
    },
    {
      title: "Discussion Boards",
      description:
        "Collaborate and engage with peers through interactive discussion forums.",
      icon: <MessageCircle className="learning-method-card__icon" size={24} />,
      variant: "discussion" as const,
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with comprehensive analytics and performance insights.",
      icon: <BarChart className="learning-method-card__icon" size={24} />,
      variant: "progress" as const,
    },
    {
      title: "Timed Challenges",
      description:
        "Push your limits with time-bound learning challenges that enhance quick thinking.",
      icon: <Clock className="learning-method-card__icon" size={24} />,
      variant: "challenges" as const,
    },
  ];

  return (
    <div className="learning-method-page">
      <NavBar />

      <main className="learning-method">
        <div className="learning-method__container">
          <div className="learning-method__header">
            <h1 className="learning-method__header-title">
              Choose Your Learning Method
            </h1>
            <p className="learning-method__header-subtitle">
              Explore diverse learning approaches tailored to your learning
              style. Select a method that resonates with you and start your
              educational journey.
            </p>
          </div>

          <div className="learning-method__grid">
            {learningMethods.map((method, index) => (
              <LearningMethodCard
                key={index}
                title={method.title}
                description={method.description}
                icon={method.icon}
                variant={method.variant}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearningMethodSelector;
