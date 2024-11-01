import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import ChatPage from "./pages/AiChat";
import ChatLoading from "./pages/ChatLoading";
import QuizPage from "./pages/Quiz";
import DepartmentSelection from "./pages/SelectDep";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<LoginPage />} />
      <Route path="/loading" element={<ChatLoading />} />
      <Route path="/knoledge-base" element={<ChatPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/select-dep" element={<DepartmentSelection />} />
    </Routes>
  );
};

export default Router;
