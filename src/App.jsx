import Header from "./components/Header/Header"
import InputsBox from "./components/InputsBox/InputsBox"
import Result from "./components/Result/Result"
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    Initial: null,
    Annual: null,
    Expected: null,
    Duration: null
  });

  const inputIsValid = inputs.Duration >= 1;

  function handleChange(inputIdentifier, event) {
    setInputs( prevInputs => {
        return {
            ...prevInputs, 
            [inputIdentifier]: +event.target.value
        };
    });
  }

  return (
    <>
      <Header />
      <InputsBox onChange={handleChange} inputs={inputs}/>
      {inputIsValid && <Result inputs={inputs}/>}
    </>
  )
}

export default App
