import React from "react";

const HigherOrderComponent = (WrappedComponent, incrementValue) => {
    const HOC = () => {
        const [value, setValue] = React.useState(0)
        const incrementHandler = () => {
            setValue(value + incrementValue)
        }

        return <WrappedComponent value={value} incrementHandler={incrementHandler} />
    }

    return HOC
}

const CompA = HigherOrderComponent(({ value, incrementHandler}) => (
  <>
    <button onClick={incrementHandler}>Increment By 2</button>
    <h2>{value}</h2>
  </>
), 2);
const CompB = HigherOrderComponent(({ value, incrementHandler}) => (
  <>
    <button onClick={incrementHandler}>Increment By 20</button>
    <h2>{value}</h2>
  </>
), 20);
const CompC = HigherOrderComponent(({ value, incrementHandler}) => (
  <>
    <button onClick={incrementHandler}>Increment By 200</button>
    <h2>{value}</h2>
  </>
), 200);

const ChallengeC = () => {
  return(
  <>
      <CompA />
      <CompB />
      <CompC />
  </>
  );
};

export default ChallengeC;
