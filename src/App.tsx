import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState<any>(0);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState("");

  const calculate = () => {
    switch (operator) {
      case "+":
        if (first !== "" && second !== "") {
          setValue(parseFloat(first) + parseFloat(second));
        }
        return;
      case "-":
        if (first !== "" && second !== "") {
          setValue(parseFloat(first) - parseFloat(second));
        }
        return;
      case "x":
        if (first !== "" && second !== "") {
          setValue(parseFloat(first) * parseFloat(second));
        }
        return;
      case "/":
        if (first !== "" && second !== "") {
          setValue(parseFloat(first) / parseFloat(second));
        }
        return;
    }
  };

  const createValue = (inner: any, action: any, current: any) => {
    let temp = current;
    temp = temp + inner;
    action(temp);
    setValue(parseFloat(temp));
  };

  const backspace = (inner: any, action: any, current: any) => {
    let temp: string = current;
    temp = temp.substr(0, temp.length - 1);
    action(temp);
    setValue(temp);
  };

  const KeyPressHandler = (event: any) => {
    const inner = event.target.innerHTML;

    if (inner === "+" || inner === "-" || inner === "x" || inner === "/") {
      setOperator(inner);
      calculate();
    } else if (inner === "=") {
      calculate();
    } else if (inner === "RESET") {
      setFirst("");
      setSecond("");
      setOperator("");
      setValue(0);
    } else if (inner === "DEL") {
      if (first.length >= 1) {
        backspace(inner, setFirst, first);
      }
      if (second.length >= 1) {
        setSecond(second.substr(0, second.length - 1));
      }
    } else {
      if (first !== "" && operator !== "") {
        createValue(inner, setSecond, second);
        console.log(second);
        return;
      }
      if (first.length >= 0) {
        createValue(inner, setFirst, first);
        console.log(first);
      }
    }
  };

  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="top">
        <h1>calc</h1>
        <div className="toggle">toggles</div>
      </div>
      <div className="middle">
        <h1 className="value">{value}</h1>
      </div>
      <div className="bottom">
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          1
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          2
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          3
        </button>
        <button
          className="key delete"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          DEL
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          4
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          5
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          6
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          +
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          7
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          8
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          9
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          0
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          /
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          .
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          -
        </button>
        <button
          className="key"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          x
        </button>
        <button
          className="key reset"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          RESET
        </button>
        <button
          className="key equals"
          onClick={(e: any) => {
            KeyPressHandler(e);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
