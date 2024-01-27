import { useState, useEffect } from "react";

export const useNetworkState = () => {
  const [isOnLine, setIsOnLine] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      console.log("useNetworkState", "user is online");
      setIsOnLine(true);
    };

    const handleOffLine = () => {
      console.log("useNetworkState", "user is offline");
      setIsOnLine(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffLine);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffLine);
    };
  }, []);

  return { isOnLine };
};
