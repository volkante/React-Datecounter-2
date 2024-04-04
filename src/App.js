import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleIncreaseStep() {
    setStep((s) => s + 1);
  }

  function handleDecreaseStep() {
    setStep((s) => s - 1);
  }

  return (
    <div className="container">
      <h1>Date Counter</h1>
      <div className="step-div">
        <button onClick={handleDecreaseStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleIncreaseStep}>+</button>
      </div>
      <div className="count-div">
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          -
        </button>
        <p>Count: {count}</p>
        <button
          onClick={(c) => {
            setCount((c) => c + step);
          }}
        >
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0 && `Today is `}
          {count > 0 && `${count} days from today is `}
          {count < 0 && `${count * -1} days ago was `}
        </span>
        <span className="date-span">{date.toDateString()}</span>
      </p>
    </div>
  );
}
