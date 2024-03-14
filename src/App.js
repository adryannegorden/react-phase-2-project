import React from "react";
import ReactDOM from "react-dom";

const user = "thomas"

function App() {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;