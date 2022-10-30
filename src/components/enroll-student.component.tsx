import React from 'react';
import useModalState from '@/hooks/useModalState';
import EnrollStudentForm from './enroll-student-form.component';

const EnrollStudent: React.FC = () => {
  const { isOpen, onToggle } = useModalState({ initialOpen: false });
  return (
    <div className="flex flex-grow justify-center items-center">
      <button
        type="button"
        className="btn-primary inline-flex justify-center rounded-md border border-transparent py-2 px-8 text-sm font-medium  shadow-sm focus:outline-none disabled:bg-gray-300"
        onClick={onToggle}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
      <EnrollStudentForm open={isOpen} onClose={onToggle} />
    </div>
  );
};

export default EnrollStudent;
