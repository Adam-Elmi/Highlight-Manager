import StaticHighlight from "./Highlight/StaticHighlight";

import "./App.css";

function App() {
  return (
    <>
    <h1>Hello Adam</h1>
      <StaticHighlight
      codeBlock={`const greet = "Hello, Prism.js!";\nconsole.log(greet);`}
      title="Javascript"
      containerStyles={{borderRadius: "10px", overflow: "hidden", margin: "10px"}}
    />
      <StaticHighlight
      codeBlock={`const greet = "Hello, Prism.js!";\nconsole.log(greet);`}
      title="Javascript"
      containerStyles={{borderRadius: "10px", overflow: "hidden", margin: "10px"}}
    />
    </>
  );
}

export default App;
