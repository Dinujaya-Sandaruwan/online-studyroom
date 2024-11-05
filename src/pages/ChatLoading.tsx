import Lottie from "react-lottie-player";
import animationData from "../assets/animations/dataLoading.json";
import { useNavigate } from "react-router-dom";

const ChatLoading = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/knowledge-base");
  }, 5000);
  return (
    <div className="loadingContainer">
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 300, height: 300 }}
      />
      <h1>Preparing Knowledge Base...</h1>
    </div>
  );
};

export default ChatLoading;
