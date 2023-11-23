import Button from "./Button";
import { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className="mt-6 flex gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(inputValue);
        setInputValue("");
      }}
    >
      <input
        className="w-full rounded-md border border-[#3498db] p-2"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      ></input>
      <Button>Dodaj</Button>
    </form>
  );
};

export default Form;
