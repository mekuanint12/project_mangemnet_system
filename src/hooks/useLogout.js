import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    try {
      await fetch("http://localhost:5000/api/v1/users/logout", { credentials: "include" });
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout };
};
