import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [inputValue1, setInputValue1] = useState();
  const [inputValue2, setInputValue2] = useState();

  const getInputValue1 = (e) => {
    setInputValue1(e.target.value);
  };

  const getInputValue2 = (e) => {
    setInputValue2(e.target.value);
  };

  const add = () => {
    setResult(parseInt(inputValue1) + parseInt(inputValue2));
  };
  const subsctract = () => {
    setResult(parseInt(inputValue1) - parseInt(inputValue2));
  };
  const divide = () => {
    if (inputValue2 === "0") {
      setResult("0-a bolunmur");
    } else {
      setResult(parseInt(inputValue1) / parseInt(inputValue2));
    }
  };

  const multiple = () => {
    setResult(parseInt(inputValue1) * parseInt(inputValue2));
  };

  return (
    <div>
      <input type="text" onChange={getInputValue1} placeholder="Enter num 1" />
      <input type="text" onChange={getInputValue2} placeholder="Enter num 1" />
      <br />
      <button onClick={add}>add</button>
      <button onClick={subsctract}>subsctract</button>
      <button onClick={divide}>divide</button>
      <button onClick={multiple}>multiple</button>
      <div>{result}</div>
    </div>
  );
}

export default App;
