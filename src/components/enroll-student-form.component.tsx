import React from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

const EnrollStudentForm: React.FC<Props> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      onBlur={onClose}
      tabIndex={-1}
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white shadow py-4 px-16 rounded-lg">
          <div className="flex flex-col justify-center items-center p-4 rounded-t border-b">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Enroll Student
            </h3>
            <p className="font-light text-gray-700 text-sm">
              We will send email to them
            </p>
            <button
              type="button"
              className="text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-full text-sm p-1.5 ml-auto inline-flex items-center absolute top-4 right-4"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6"></div>
          <div className="flex justify-between items-center w-full py-6 pr-0 space-x-2 rounded-b border-t border-gray-200">
            <div className="flex items-center">
              <button
                type="button"
                className="text-gray-900 bg-transparentfocus:outline-none font-medium text-sm focus:z-10 flex"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
                Copy invited link
              </button>
            </div>
            <div className="flex items-center">
              <button
                onClick={onClose}
                type="button"
                className="text-sky-500 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-lg border border-gray-200 text-sm font-medium px-10 py-2.5 hover:text-sky-500 focus:z-10 mr-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollStudentForm;
