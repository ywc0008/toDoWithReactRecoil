import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((current) => current + 1);
  };
  return (
    <div>
      <h1>React Counter</h1>
      <h3>{counter}</h3>
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

export default App;
