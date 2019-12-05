import React from "react";
import {
  someVeryLongName,
  someVeryLongName2,
  someVeryLongName3
} from "./some-module/foo";

console.log(someVeryLongName);
console.log(someVeryLongName2);
console.log(someVeryLongName3);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
