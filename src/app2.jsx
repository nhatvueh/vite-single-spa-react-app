import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  console.log(2);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Multi SPA - App 2</h1>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p></p>
      </header>
    </div>
  );
};

export default App;
