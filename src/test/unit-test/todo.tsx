import React, { useState } from "react";

export default function TodoList() {
  const [contList, setContList] = useState(["吃饭", "睡觉", "打代码"]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setContList([...contList, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index: number) => {
    console.log(index);
    
    const newList = [...contList];
    newList.splice(index, 1);
    setContList(newList);
  };

  return (
    <div>
      <h2>TodoList</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {contList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}