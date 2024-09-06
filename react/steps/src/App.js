import "./App.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}
// update steps
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      <div className="steps">
        {isOpen && (
          <>
            <div>
              <div className="number">
                <div className={`numbers ${step >= 1 ? "active" : ""}`}>1</div>
                <div className={`numbers ${step >= 2 ? "active" : ""}`}>2</div>
                <div className={`numbers ${step >= 3 ? "active" : ""}`}>3</div>
              </div>
              <p className="message">
                Step {step}: {messages[step - 1]}
              </p>
            </div>
            <div className="button">
              <button className="button" type="button" onClick={handlePrevious}>
                Previous
              </button>
              <button className="button" type="button" onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
