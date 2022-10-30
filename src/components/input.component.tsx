import React from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col">
      {props.label ? (
        <label
          className="block text-gray-700 text-sm mb-3 font-normal"
          htmlFor={props.name}
        >
          {props.label}
          {props.required ? <span className="text-red-500">*</span> : null}
        </label>
      ) : null}
      <input
        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 hover:bg-white hover:border-blue-300 transition-all"
        {...props}
      />
      {props.helperText ? (
        <p
          className={`${
            props.error ? 'text-red-500' : 'text-gray-500'
          } text-xs italic mt-3`}
        >
          {props.helperText}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
