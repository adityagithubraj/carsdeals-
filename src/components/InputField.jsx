import React from "react";

function InputField({
  type,
  id,
  label,
  required,
  labelTextClass,
  name,
  min,
  max,
  onChangeHandler,
  value,
}) {
  return (
    <div className="form-control w-full mb-10">
      <input
        type={type}
        id={id}
        required={required}
        name={name}
        value={value}
        onChange={(e) => onChangeHandler(e)}
      />
      <label
        className={`md:text-[20px] text-[16px] ${labelTextClass}`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

export default InputField;
