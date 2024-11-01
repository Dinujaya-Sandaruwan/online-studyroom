import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  PlusCircle,
  Wand2,
  Upload,
  FileText,
  Brain,
  Sparkles,
  Star,
} from "lucide-react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationData from "../assets/animations/quizAdding.json";

const AddQuiz: React.FC = () => {
  const [quizQuestion, setQuizQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [wrongAnswers, setWrongAnswers] = useState<string[]>(["", "", ""]);
  const [isAIGenerated, setIsAIGenerated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...wrongAnswers];
    updatedAnswers[index] = value;
    setWrongAnswers(updatedAnswers);
  };

  const handleAIGenerate = async () => {
    setIsLoadingAI(true);
    // Simulating AI generation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const generatedAnswers = [
      "Information and Communication Technology",
      "Integrated Computer Training",
      "Internet and Computer Techniques",
    ];

    setWrongAnswers(generatedAnswers);
    setIsLoadingAI(false);
    setIsAIGenerated(true);
  };

  const handleSubmit = () => {
    if (!quizQuestion || !correctAnswer || wrongAnswers.some((ans) => !ans)) {
      toast.error("Please fill in all fields", {
        position: "bottom-right",
        autoClose: 5000,
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast.success("Quiz Added Successfully!", {
        position: "bottom-right",
        autoClose: 5000,
      });
      setIsSubmitting(false);

      // Reset form
      setQuizQuestion("");
      setCorrectAnswer("");
      setWrongAnswers(["", "", ""]);
      setIsAIGenerated(false);
    }, 2000);
  };

  return (
    <div className="quiz-add-page">
      <NavBar />
      <ToastContainer />

      <div className="quiz-add-page__content">
        <div className="quiz-add-page__main">
          <div className="quiz-add__container">
            <h1 className="quiz-add__title">Add New Quiz</h1>

            {isSubmitting ? (
              <div className="submission-animation">
                <Lottie
                  animationData={animationData}
                  className="loading-animation"
                  loop={true}
                />
                {/* <span>Loading...</span> */}
              </div>
            ) : (
              <form className="quiz-form">
                <div className="quiz-form__section">
                  <label className="quiz-form__label">Question (quiz)</label>
                  <textarea
                    className="quiz-form__input quiz-form__textarea"
                    placeholder="Enter your quiz question"
                    value={quizQuestion}
                    onChange={(e) => setQuizQuestion(e.target.value)}
                  />
                </div>

                <div className="quiz-form__section">
                  <label className="quiz-form__label">Correct Answer</label>
                  <input
                    type="text"
                    className="quiz-form__input"
                    placeholder="Enter the correct answer"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                  />
                </div>

                <div className="quiz-form__section">
                  <label className="quiz-form__label">
                    Wrong answers
                    {!isAIGenerated && (
                      <button
                        type="button"
                        className="ai-generate-btn"
                        onClick={handleAIGenerate}
                        disabled={isLoadingAI}
                      >
                        {isLoadingAI ? (
                          "Generating..."
                        ) : (
                          <>
                            <Wand2 size={16} /> Generate with AI
                          </>
                        )}
                      </button>
                    )}
                  </label>

                  {isLoadingAI ? (
                    <div className="ai-loading">
                      <Sparkles className="loading-icon" />
                      <span>Generating answers...</span>
                    </div>
                  ) : (
                    wrongAnswers.map((answer, index) => (
                      <input
                        key={index}
                        type="text"
                        className="quiz-form__input"
                        placeholder={`Enthe wrong answer ${index + 1}`}
                        value={answer}
                        onChange={(e) =>
                          handleAnswerChange(index, e.target.value)
                        }
                      />
                    ))
                  )}
                </div>

                <button
                  type="button"
                  className="quiz-form__submit-btn"
                  onClick={handleSubmit}
                >
                  <PlusCircle /> Add Quiz
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="quiz-add-page__knowledge-base">
          <div className="knowledge-base-sidebar">
            <h2 className="knowledge-base__title">
              <Brain /> Knowledge Base
            </h2>
            <p className="knowledge-base__description">
              Enhance our AI's learning capabilities by uploading educational
              materials. Share PDFs, images, and other learning resources to
              expand our collective knowledge.
            </p>
            <div className="knowledge-base__upload">
              <FileText className="upload-icon" />
              <span>Supported Formats: PDF, Images, Docs</span>
            </div>
            <Link to="/knowledge-base" className="knowledge-base__link">
              <Upload /> Go to Knowledge Base
            </Link>
          </div>
          <div className="leaderboard-card">
            <h2 className="leaderboard-card__title">🏆 Top Contributors 🏆</h2>
            <p className="leaderboard-card__description">
              Recognize and celebrate the champions who enrich our learning
              community! 🌟
            </p>
            <Link to="/leaderboard" className="leaderboard-card__link">
              <Star /> View Leaderboard
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddQuiz;
