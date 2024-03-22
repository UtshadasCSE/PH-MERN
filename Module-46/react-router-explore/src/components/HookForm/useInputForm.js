import { useState } from "react";

const useInputForm = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);
  const changeName = (e) => {
    setValue(e.target.value);
  };
  return [value, changeName];
};
export default useInputForm;
