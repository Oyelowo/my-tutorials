import React, { useState, useEffect } from "react";
import { randomNumWithin } from "../utils/utils";

const introductionMessage = `Hello! I'm a software developer and data analyst.
My tech stack include Java, JavaScript/Typescript, Python, Ruby and R.
Other Dev tools(Libraries and Frameworks).
HTML5, CSS3, Sass, React/React Native & Redux, Mobx, Node , Express , MongoDB & Mongoose; and many more.
Testing:
Jest, Enzyme; and cypress
My data analytics tools:
Python, R, SPSS, Excel, ArcGIS, and QGIS.`;

const Texts = () => {
  const [myIntro, setMyIntro] = useState({ characters: "", charCounter: 0 });

  const { characters, charCounter } = myIntro;

  const updateIntro = () => {
    const updatedIntro = {
      ...myIntro,
      charCounter: charCounter + 1,
      characters: characters + introductionMessage[charCounter]
    };
    setMyIntro(updatedIntro);
  };

  const isIntroCompleted = introductionMessage.length === characters.length;

  useEffect(() => {
    const timer = setInterval(
      () => !isIntroCompleted && updateIntro(),
      randomNumWithin(10, 200)
    );
    return () => clearInterval(timer);
  }, [myIntro]);

  return (
    <span style={{ fontSize: "2rem", fontStyle: "italic" }}>{characters}</span>
  );
};

export default Texts;
