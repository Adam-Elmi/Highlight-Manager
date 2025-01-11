import Highlight from "./Highlight/Highlight";
import "prismjs/themes/prism-atom-dark.css";

import "./App.css";

function App() {
  return (
    <>
      <h1>Hello Adam</h1>
      <Highlight
        codeBlock={`const greet = "Hello, Prism.js!";\nconsole.log(greet);`}
        title="Javascript"
        containerStyles={{
          borderRadius: "10px",
          overflow: "hidden",
          margin: "10px",
        }}
        preStyles={{ backgroundColor: "#222" }}
      />
      <Highlight
        codeBlock={`const greet = "Hello, Prism.js!";\nconsole.log(greet);`}
        title="Javascript"
        containerStyles={{
          borderRadius: "10px",
          overflow: "hidden",
          margin: "10px",
        }}
        preStyles={{ backgroundColor: "#222" }}
      />
    </>
  );
}

export default App;
