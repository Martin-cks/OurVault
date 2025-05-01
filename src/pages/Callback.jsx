import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromResponse } from "../auth/spotify";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromResponse().access_token;
    if (token) {
      localStorage.setItem("spotify_token", token);
      navigate("/"); // Redirect to home after login
    }
  }, []);

  return <div>Loading...</div>;
}