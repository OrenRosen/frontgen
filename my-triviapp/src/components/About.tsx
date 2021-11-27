import React from "react";
import Main from "./Main";
import NavBar from "./Navbar";

const About: React.FC = () => {
  return (
    <Main>
      <NavBar />
      <h2>About TriviApp</h2>
      <p>This is a Trivia App</p>
      <p>Lala</p>
      <p>Papa</p>
    </Main>
  );
};

export default About;
