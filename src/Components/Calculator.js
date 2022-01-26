import { useState } from "react";

import "./index.css";
export function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (value === "C") {
      setCalc("");
      setResult("");
      return;
    }

    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value));
    }
  };

  const calculate = () => {
    try {
      setCalc(eval(calc).toString());
    } catch {
      setCalc("Error");
      setResult(0);
    }
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const v = calc.slice(0, -1);
    setCalc(v);
  };

  return (
    <div className="calculator">
      <div id="display">
        {result ? <span>({result})</span> : ""}
        {calc || "0"}
      </div>
      <div className="buttons">
        <button
          className="button"
          id="operations"
          onClick={() => updateCalc("C")}
        >
          C
        </button>
        <button
          className="button"
          id="operations"
          onClick={() => updateCalc("/")}
        >
          /
        </button>
        <button
          className="button"
          id="operations"
          onClick={() => updateCalc("*")}
        >
          *
        </button>
        <button className="button" id="operations" onClick={deleteLast}>
          &larr;
        </button>
        <button className="button" onClick={() => updateCalc("7")}>
          7
        </button>
        <button className="button" onClick={() => updateCalc("8")}>
          8
        </button>
        <button className="button" onClick={() => updateCalc("9")}>
          9
        </button>

        <button
          className="button"
          id="operations"
          onClick={() => updateCalc(".")}
        >
          .
        </button>
        <button className="button" onClick={() => updateCalc("4")}>
          4
        </button>
        <button className="button" onClick={() => updateCalc("5")}>
          5
        </button>
        <button className="button" onClick={() => updateCalc("6")}>
          6
        </button>

        <button
          className="button"
          id="operations"
          onClick={() => updateCalc("-")}
        >
          -
        </button>
        <button className="button" onClick={() => updateCalc("1")}>
          1
        </button>
        <button className="button" onClick={() => updateCalc("2")}>
          2
        </button>
        <button className="button" onClick={() => updateCalc("3")}>
          3
        </button>
        <button
          className="button"
          id="operations"
          onClick={() => updateCalc("+")}
        >
          +
        </button>
        <button className="button" onClick={() => updateCalc("(")}>
          (
        </button>
        <button className="button" onClick={() => updateCalc("0")}>
          0
        </button>
        <button className="button" onClick={() => updateCalc(")")}>
          )
        </button>
        <button className="button" id="operations" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}
