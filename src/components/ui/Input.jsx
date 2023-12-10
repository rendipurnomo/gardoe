import React from "react";

const Input = ({ bawa, laku, sisa, component }) => {
  return (
    <div className="flex flex-col items-center">
      <label className="font-semibold">{component}</label>
      <input
        className="ring-1 ring-slate-300 rounded-sm outline-lime-300 mb-4 placeholder:pl-2 p-2 w-[150px]"
        type="number"
        placeholder="Bawa"
        onChange={bawa}
      />
      <input
        className="ring-1 ring-slate-300 rounded-sm outline-lime-300 placeholder:pl-2 p-2 w-[150px]"
        type="number"
        placeholder="Laku"
        onChange={laku}
      />
      <span className={`font-bold mt-2 ${sisa > 0 && "text-red-600"}`}>
        Sisa: {sisa}
      </span>
    </div>
  );
};

export default Input;
