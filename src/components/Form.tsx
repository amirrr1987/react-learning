import { useState } from "react";

const myForm = () => {
  const [fName, setFName] = useState("");
  const fNameHandler = (e: any) => {
    setFName(e.target.value.toUpperCase());
  };

  const [checked, setChecked] = useState(false);
  const checkedHandler = () => {
    setChecked(!checked);
  };

  const [framwork, setFramwork] = useState(0);
  const framworkHandler = (e: any) => {
    setFramwork(e.target.value);
  };

  const [phone, setPhone] = useState(0);
  const selectHandler = (e) => {
    setPhone(e.target.value);
  };

  const finalSubmit = () => {};
  return (
    <form onSubmit={finalSubmit} className="container mx-auto">
      <div>
        <label htmlFor="fname">first name</label>
        <input
          className="border"
          type="text"
          name="fname"
          value={fName}
          onInput={fNameHandler}
        />
      </div>

      <div>
        <label htmlFor="fname">first name</label>
        <input
          type="checkbox"
          name="fname"
          checked={checked}
          onChange={checkedHandler}
        />
      </div>

      <div>
        sd{framwork}
        <div>
          <label htmlFor="framwork">vue</label>
          <input
            type="radio"
            name="framwork"
            value="1"
            onChange={framworkHandler}
          />
        </div>
        <div>
          <label htmlFor="framwork">react</label>
          <input
            type="radio"
            name="framwork"
            value="2"
            onChange={framworkHandler}
          />
        </div>
        <div>
          <label htmlFor="framwork" className="grid w-10 h-10 relative">
            angular
            <input
              type="radio"
              name="framwork"
              value="3"
              hidden
              className="absoulte inset-0"
              onChange={framworkHandler}
            />
          </label>
        </div>
      </div>

      <div>
        <select onChange={selectHandler} value={phone}>
          <option value="1">yek</option>
          <option value="2">do</option>
        </select>
      </div>

      {/* 



  

      <div>
        <label htmlFor="fname">first name</label>
        <input type="text" name="fname" value={fName} onInput />
      </div> */}
    </form>
  );
};

export default myForm;
