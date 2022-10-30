import React, { useEffect, useState } from 'react';
import Select from './select.component';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type Props = {
  batchList: string[];
  onChange: (values: string[]) => void;
};

const BatchSelectItem: React.FC<{
  index: number;
  value: string;
  onClear: (index: number) => void;
  onChange: (index: number, value: string) => void;
  selectedValues: string[];
}> = ({ index, value, onClear, onChange, selectedValues }) => {
  const handleClear = () => {
    onClear(index);
  };

  const handleItemSelect = (e: any) => {
    onChange(index, e.target.value);
  };

  return (
    <div className="flex justify-between items-center mb-4 w-full">
      <Select
        value={value}
        onChange={handleItemSelect}
        name={`course-${index}`}
        options={MONTHS}
        onClear={() => onChange(index, '')}
        selectedValues={selectedValues}
      />
      <svg
        className="w-5 h-5 cursor-pointer ml-4"
        fill="none"
        stroke="black"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClear}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
  );
};

const BatchSelect: React.FC<Props> = ({ batchList, onChange }) => {
  const [values, setValues] = useState(batchList);

  const addMore = () => {
    setValues((v) => v.concat(''));
  };

  const removeItem = (index: number) => {
    setValues((v) => v.filter((_, i) => i !== index));
  };

  const changeItem = (index: number, value: string) => {
    setValues((v) => v.map((item, i) => (i === index ? value : item)));
  };

  useEffect(() => {
    onChange(values);
  }, [values]);

  return (
    <div className="flex flex-col items-start w-full h-auto">
      <label className="block text-gray-700 text-sm mb-3 font-normal">
        Batch
      </label>
      <div className="flex flex-col w-full overflow-auto batch-list-container pr-4">
        {values.map((value, index) => (
          <BatchSelectItem
            key={index}
            index={index}
            value={value}
            onChange={changeItem}
            onClear={removeItem}
            selectedValues={values}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={addMore}
        className="text-gray-900 flex items-center disabled:text-gray-400"
        disabled={values.length === MONTHS.length}
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        Add
      </button>
    </div>
  );
};

export default BatchSelect;
