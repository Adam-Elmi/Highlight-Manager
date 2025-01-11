import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import SvgCopy from "../utils/SvgCopy";

const Highlight = ({
  codeBlock,
  lang = "javascript",
  theme = "",
  title = "",
  containerStyles,
  headerStyles,
  preStyles,
  codeStyles,
  buttonStyles,
  titleStyles,
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
    <div id="container" style={{display: "flex" , flexDirection: "column",border: "1.5px solid #ccc" , ...containerStyles }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", 
          alignItems: "center",
          backgroundColor: "#222",
          borderBottom: "1.5px solid #44f",
          padding: "10px",
          color: "#fff",
          fontFamily: "monospace",
          ...headerStyles,
        }}
      >
        <p style={{...titleStyles}}>{title}</p>
        <button
          style={{
            backgroundColor: "#122",
            border: ".5px solid #44f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2.5px",
            borderRadius: "5px",
            cursor: "pointer",
            ...buttonStyles
          }}
        >
          <SvgCopy />
        </button>
      </div>
      <pre style={{ ...preStyles }} ref={codeRef}>
        <code style={{ ...codeStyles }} className={`language-${lang}`}>
          {codeBlock}
        </code>
      </pre>
    </div>
  );
};

export default Highlight;
