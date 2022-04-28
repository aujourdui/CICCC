import React from "react";

const ChallengeA = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [list, setList] = React.useState("");

  const changeHandler = (e) => setInputValue(e.target.value)
  const submitHandler = () => {
      setList([...list, inputValue])
      setInputValue('')
  }
  const deleteHandler = (item) => setList(list.filter(el => el !== item))

  return <>
    <input type="text" value={inputValue} onChange={changeHandler} />
    <button onClick={submitHandler}>Add</button>
    <br />
    <ul>
        {list.length > 0 && list.map((item, index) => (
            <li key={index} onClick={() => deleteHandler(item)}>{item}</li>
        ))}
    </ul>
  </>;
};

export default ChallengeA;
