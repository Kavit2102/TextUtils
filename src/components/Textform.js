import React, { useState } from "react";

export default function Textform(props) {

  // Convert to UpperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Convert to LowerCase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Clear Text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Copy Text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  // Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container pb-40">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label my-4 fs-3"
        >
          Welcome To TextUtils
        </label>
        <textarea
          className={`form-control bg-${props.mode} text-${props.textclr}`}
          id="exampleFormControlTextarea1"
          rows={10}
          defaultValue={""}
          placeholder="Enter your text here....."
          value={text}
          onChange={handleOnChange}
        />
        <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <h2>Your Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
