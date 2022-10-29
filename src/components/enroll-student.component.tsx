import React from 'react';
import useModalState from '@/hooks/useModalState';
import EnrollStudentForm from './enroll-student-form.component';

const EnrollStudent: React.FC = () => {
  const { isOpen, onToggle } = useModalState({ initialOpen: false });
  return (
    <div className="flex justify-center items-center">
      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-8 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-300"
        onClick={onToggle}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
      <EnrollStudentForm open={isOpen} onClose={onToggle} />
    </div>
  );
};

export default EnrollStudent;
