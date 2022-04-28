import React, { useState } from "react";

let parentObj;
let setParentObj;

const useObj = () => {
  [parentObj, setParentObj] = useState([{ text: "" }]);
};

const ChallengeE = () => {
  useObj();
  return (
    <div>
      <ComA />
    </div>
  );
};

export const ComA = () => {
  setParentObj({ text: "This is parent" });
  return (
    <div>
      <h1>Parent</h1>
      <p>{parentObj.text}</p>
      <ComB />
    </div>
  );
};

export const ComB = () => {
  return (
    <div>
      <h2>Child of ComA</h2>
      <ComC />
      <ComD />
    </div>
  );
};

export const ComC = () => {
  return (
    <div>
      <h3>A child of ComB and Grand child of A, Sibling of ComD</h3>
      {parentObj.text}
    </div>
  );
};

export const ComD = () => {
  return (
    <div>
      <h3>A child of ComB and Grand child of A, Sibling of ComC</h3>
      {parentObj.text}
    </div>
  );
};

export default ChallengeE;
