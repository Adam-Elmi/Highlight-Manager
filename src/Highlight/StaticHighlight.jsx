import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-atom-dark.css";

const StaticHighlight = ({
  codeBlock,
  lang = "javascript",
  theme = '',
  title = "",
  containerStyles,
  headerStyles,
  preStyles,
  codeStyles
}) => {
  const codeRef = useRef();

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightAllUnder(codeRef.current);
    }
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const existingLink = document.querySelector(`#prism-theme`);
  //   if (existingLink) {
  //     existingLink.href = theme;
  //   } else {
  //     const link = document.createElement("link");
  //     link.rel = "stylesheet";
  //     link.id = "prism-theme";
  //     link.href = theme;
  //     document.head.appendChild(link);

  //     link.onload = () => {
  //       setIsVisible(true);
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     document.querySelectorAll("#container").forEach(el => {
  //       el.style.display = isVisible ? "flex" : "none";
  //     });
  //   }, 0);
  // }, [isVisible])

  return (
    <div id="container" style={{flexDirection: "column", ...containerStyles}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#112",
          borderBottom: "1.5px solid #44f",
          padding: "10px",
          color: "#fff",
          fontFamily: "monospace",
          ...headerStyles,
        }}
      >
        <p>{title}</p>
      </div>
      <pre style={{...preStyles}} ref={codeRef}>
        <code style={{...codeStyles}} className={`language-${lang}`}>{codeBlock}</code>
      </pre>
    </div>
  );
};

export default StaticHighlight;
