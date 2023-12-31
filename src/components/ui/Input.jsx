import React from "react";

const Input = ({ bawa, tambah, laku, sisa, component }) => {
  return (
    <div className="flex flex-col items-center">
      <label className="font-semibold">{component}</label>
      <input
        className="ring-1 ring-slate-300 rounded-sm outline-primary mb-4 placeholder:pl-2 p-2 w-[150px] text-black font-semibold"
        type="number"
        placeholder="Bawa"
        onChange={bawa}
      />
      <input
        className="ring-1 ring-slate-300 rounded-sm outline-primary mb-4 placeholder:pl-2 p-2 w-[150px] text-black font-semibold"
        type="number"
        placeholder="Tambah"
        onChange={tambah}
      />
      <input
        className="ring-1 ring-slate-300 rounded-sm outline-primary placeholder:pl-2 p-2 w-[150px] text-black font-semibold"
        type="number"
        placeholder="Sisa"
        onChange={laku}
      />
      <span className={`font-bold mt-2 ${sisa > 0 && "text-red-600"}`}>
        Hasil: {sisa}
      </span>
    </div>
  );
};

export default Input;
