import React, { useEffect, useRef} from "react";
import PropTypes from 'prop-types';
import Prism from "prismjs";

const Highlight = ({
  code,
  language,
  title,
  container,
  header,
  pre,
  codeStyle,
  button,
  titleStyle,
}) => {
  const codeRef = useRef();

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightAllUnder(codeRef.current);
    }
  }, []);
  return (
    <div id="container" style={{display: "flex" , flexDirection: "column",border: "1.5px solid #ccc" , ...container}}>
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
          ...header,
        }}
      >
        <p style={{...titleStyle}}>{title}</p>
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
        <code style={{ ...codeStyle }} className={`language-${language}`}>
          {codeBlock}
        </code>
      </pre>
    </div>
  );
};

Highlight.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  title: PropTypes.string,
  container: PropTypes.string,
  header: PropTypes.string,
  pre: PropTypes.string,
  codeStyle: PropTypes.string,
  button: PropTypes.string,
  titleStyle: PropTypes.string,
};

Highlight.defaultProps = {
  language: 'javascript',
};

function SvgCopy() {
  return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.5 16.5v-12l-.75-.75H9l-.75.75v3h-3l-.75.75v12l.75.75H15l.75-.75v-3h3l.75-.75Zm-3.75-.75v-7.5L15 7.5H9.75V5.25H18v10.5h-2.25ZM6 9h8.25v10.5H6V9Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Highlight;
