import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setOnlineStatus(navigator.onLine);
    };
    window.addEventListener("offline", handleOnlineStatus);
    window.addEventListener("online", handleOnlineStatus);

    return () => {
      window.removeEventListener("offline", handleOnlineStatus);
      window.removeEventListener("online", handleOnlineStatus);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
