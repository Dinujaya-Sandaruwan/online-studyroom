import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book, ChevronRight, Mic, X, Trophy } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/LoadingNextQuiz.json";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What does ICT stand for?",
    answers: [
      "Information and Communication Technology",
      "Internet Computing Tools",
      "Integrated Computer Training",
      "International Computer Terminology",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question:
      "What types of registers are found in 8086 processor architecture?",
    answers: [
      "Only Data Registers",
      "General Purpose and Index Registers",
      "Only Control Registers",
      "Segment and Memory Registers",
    ],
    correctAnswer: 1,
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showVoiceModal, setShowVoiceModal] = useState<boolean>(false);
  const [voiceText, setVoiceText] = useState<string>("");
  const [showNextButtons, setShowNextButtons] = useState<boolean>(false);

  const handleAnswerClick = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const isCorrect =
      answerIndex === quizQuestions[currentQuestion].correctAnswer;

    if (isCorrect) {
      const newScore = score + 10;
      setScore(newScore);
      setShowNextButtons(true);
    } else {
      setGameOver(true);
      if (score > highScore) {
        setHighScore(score);
        setShowConfetti(true);
        toast.success("🎉 New High Score!", {
          position: "top-center",
          autoClose: 5000,
        });
      }
    }
  };

  const handleNextQuestion = () => {
    setIsLoading(true);
    setShowNextButtons(false);
    setSelectedAnswer(null);

    setTimeout(() => {
      setIsLoading(false);
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setGameOver(true);
      }
    }, 4000);
  };

  const handleVoiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("🎤 Your voice has been recorded!", {
      position: "top-center",
      autoClose: 3000,
    });
    setShowVoiceModal(false);
    setVoiceText("");
    handleNextQuestion();
  };

  useEffect(() => {
    if (showConfetti) {
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [showConfetti]);

  return (
    <div className="quiz-page">
      {showConfetti && <Confetti />}
      <ToastContainer />
      <NavBar />

      <main className="quiz-main">
        <div className="quiz-container">
          <div className="quiz-score">
            <span>Score: {score}</span>
            <span>High Score: {highScore}</span>
          </div>

          {isLoading ? (
            <div className="loading-container">
              <Lottie
                animationData={loadingAnimation}
                loop={true}
                className="loading-animation"
              />
            </div>
          ) : (
            <div className="quiz-content">
              <h2 className="quiz-question">
                {quizQuestions[currentQuestion].question}
              </h2>

              <div className="quiz-answers">
                {quizQuestions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    className={`quiz-answer ${
                      selectedAnswer === index
                        ? index === quizQuestions[currentQuestion].correctAnswer
                          ? "correct"
                          : "incorrect"
                        : ""
                    }`}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                  >
                    {answer}
                  </button>
                ))}
              </div>

              {showNextButtons && (
                <div className="quiz-actions">
                  <button
                    className="quiz-action-button next"
                    onClick={handleNextQuestion}
                  >
                    <span>Next Question</span>
                    <ChevronRight size={20} />
                  </button>
                  <button
                    className="quiz-action-button voice"
                    onClick={() => setShowVoiceModal(true)}
                  >
                    <Mic size={20} />
                    <span>Add Your Voice</span>
                  </button>
                </div>
              )}

              {gameOver && (
                <div className="quiz-actions">
                  <Link
                    to="/loading"
                    className="quiz-action-button knowledge-base"
                    rel="noreferrer"
                    target={"_blank"}
                  >
                    <Book size={20} />
                    <span>Knowledge Base</span>
                  </Link>

                  <Link
                    to="/leader-board"
                    className="quiz-action-button retry"
                    rel="noreferrer"
                    target={"_blank"}
                  >
                    <Trophy size={20} />
                    <span>View Leaderboard</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Voice Modal */}
      {showVoiceModal && (
        <div className="modal-overlay" onClick={() => setShowVoiceModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowVoiceModal(false)}
            >
              <X size={24} />
            </button>
            <h3 className="modal-title">Share Your Knowledge</h3>
            <form onSubmit={handleVoiceSubmit}>
              <textarea
                className="modal-textarea"
                value={voiceText}
                onChange={(e) => setVoiceText(e.target.value)}
                placeholder="Explain your understanding of this concept..."
                rows={6}
              />
              <button type="submit" className="modal-submit">
                Submit Your Voice
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Quiz;
