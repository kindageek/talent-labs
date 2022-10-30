import React from 'react';

const COURSES = [
  'Fundamentals of JavaScript',
  'JavaScript2TypeScript',
  'REST API',
  'Hosting',
  'HTML & CSS',
];

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  helperText?: string;
  error?: boolean;
  onClear: () => void;
  options: string[];
  onItemSelect?: () => void;
  selectedValues?: string[];
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <div className="flex flex-col w-full">
      {props.label ? (
        <label
          className="block text-gray-700 text-sm mb-3 font-normal"
          htmlFor={props.name}
        >
          {props.label}
          {props.required ? <span className="text-red-500">*</span> : null}
        </label>
      ) : null}
      <div className="relative">
        <select
          className={`bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 ${
            props.value !== '' ? 'text-gray-700' : 'text-gray-400'
          } leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:text-gray-700 hover:bg-white hover:border-blue-300 transition-all`}
          {...props}
        >
          <option disabled selected value="">
            {props.placeholder}
          </option>
          {props.options.map((option, index) => (
            <option
              value={option}
              key={index}
              disabled={props.selectedValues?.includes(option)}
            >
              {option}
            </option>
          ))}
        </select>
        {props.value !== '' ? (
          <svg
            className="w-4 h-4 absolute top-3 right-4 cursor-pointer"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => props.onClear()}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-4 h-4 absolute top-3 right-4 cursor-pointer"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}
      </div>
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

export default Select;
