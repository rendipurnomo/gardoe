import React from "react";

const InputCup = ({ label, harga, hasil, onchange }) => {
  return (
    <div className="flex gap-5 items-center">
      <label className="font-semibold w-[100px]">
        {label}
        <input
          type="number"
          placeholder="laku"
          className="ring-1 w-[100px] ring-slate-300 rounded-sm outline-primary mb-4 placeholder:pl-2 p-2 text-black"
          onChange={onchange}
        />
      </label>
      <span className="font-bold">X {harga} =</span>
      <span className="font-bold">{hasil}</span>
    </div>
  );
};

export default InputCup;
