import React from "react";

const InputCup = ({ label, harga, hasil, onchange }) => {
  return (
    <div className="flex gap-5 items-center">
      <label className="font-semibold w-[200px]">
        {label}
        <input
          type="number"
          placeholder="laku"
          className="ring-1 ring-slate-300 rounded-sm outline-lime-300 mb-4 placeholder:pl-2 p-2"
          onChange={onchange}
        />
      </label>
      <span className="font-bold">X {harga} =</span>
      <span className="font-bold">{hasil}</span>
    </div>
  );
};

export default InputCup;
