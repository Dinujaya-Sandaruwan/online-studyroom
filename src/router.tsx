import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import ChatPage from "./pages/AiChat";
import ChatLoading from "./pages/ChatLoading";
import QuizPage from "./pages/Quiz";
import DepartmentSelection from "./pages/SelectDep";
import QuizCreator from "./pages/SelectDepForAdd";
import Leaderboard from "./pages/LeaderBoard";
import AddQuiz from "./pages/AddQuiz";
import DocumentUpload from "./pages/AddToKnowledgeBase";
import AdminDashboard from "./pages/Dashboard";
import LearningMethodSelector from "./pages/SelectLeaningType";
import AddingMethodSelector from "./pages/SelectAddingType";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<LoginPage />} />
      <Route path="/loading" element={<ChatLoading />} />
      <Route path="/knowledge-base" element={<ChatPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/select-dep-to-play" element={<DepartmentSelection />} />
      <Route path="/select-dep-to-add" element={<QuizCreator />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/leader-board" element={<Leaderboard />} />
      <Route path="/add-quiz" element={<AddQuiz />} />
      <Route path="/add-to-knowledge-base" element={<DocumentUpload />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/learning-method" element={<LearningMethodSelector />} />
      <Route path="/adding-method" element={<AddingMethodSelector />} />
    </Routes>
  );
};

export default Router;
