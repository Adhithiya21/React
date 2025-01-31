import React, { useState } from "react";
import themecontext from "./Themecontext";

const Themeprovider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // New theme state

  // Function to toggle theme
  const changetheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <themecontext.Provider value={{ theme, changetheme }}>
      {children} {/* Render children inside the provider */}
    </themecontext.Provider>
  );
};

export default Themeprovider;
