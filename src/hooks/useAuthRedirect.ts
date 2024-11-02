// src/hooks/useAuthRedirect.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the 'login' cookie is present
    const isLoggedIn = document.cookie
      .split("; ")
      .some((cookie) => cookie.startsWith("login=true"));

    // If the cookie is not present, redirect to the homepage
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);
};

export default useAuthRedirect;
