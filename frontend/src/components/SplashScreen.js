import React, { useEffect, useState } from "react";
import '../css/SpalshScreen.css'

const SplashScreen = ({ children, duration = 2000 }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (showSplash) {
    return (
      <div className="splash-screen">
        <h1 className="splash-text">Groovora</h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default SplashScreen;
