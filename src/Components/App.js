import React, { useState } from "react";
import GlobalStyle from "Components/GlobalStyle";
import Router from "Components/Router";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Router isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default App;
