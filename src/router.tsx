import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import ChatPage from "./pages/AiChat";
import ChatLoading from "./pages/ChatLoading";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<LoginPage />} />
      <Route path="/loading" element={<ChatLoading />} />
      <Route path="/knoledge-base" element={<ChatPage />} />
    </Routes>
  );
};

export default Router;
