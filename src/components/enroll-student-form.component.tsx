import React, { useEffect, useState } from 'react';
import Input from './input.component';
import copy from 'copy-to-clipboard';
import { Controller, useForm } from 'react-hook-form';
import Select from './select.component';
import BatchSelect from './batch-select.component';

const COURSES = [
  'Fundamentals of JavaScript',
  'REST API',
  'Hosting',
  'HTML & CSS',
];

type Props = {
  open: boolean;
  onClose: () => void;
};

const styles = {
  container:
    'overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-1 w-full md:inset-0 flex justify-center items-center',
  content: 'relative p-4 w-full max-w-2xl h-auto',
  form: 'relative bg-white shadow py-4 px-16 rounded-lg',
  header: 'flex flex-col justify-center items-center p-4 rounded-t border-b',
  body: 'w-full py-6 space-y-6',
  row: 'w-full gap-4 flex justify-between items-start',
  actions:
    'flex justify-between items-center w-full py-6 pr-0 space-x-2 rounded-b border-t border-gray-200',
  btns: 'flex items-center',
  copyBtn: 'bg-transparentfocus:outline-none font-medium text-sm flex',
  cancelBtn:
    'text-blue-500 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-10 py-2.5 hover:text-blue-500 mr-4',
  submitBtn:
    'text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center',
  clearBtn:
    'text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-full text-sm p-1.5 ml-auto inline-flex items-center absolute top-4 right-4',
  title: 'text-xl font-semibold text-gray-900 mb-2',
  subtitle: 'font-light text-gray-700 text-sm',
};

const ClearIcon: React.FC = () => (
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
);

const CopyIcon: React.FC = () => (
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
);

const EnrollStudentForm: React.FC<Props> = ({ open, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [batchList, setBatchList] = useState(['']);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      fee: '',
      course: '',
      batch: [],
    },
  });

  useEffect(() => {
    reset();
    setBatchList(['']);
    setCopied(false);
  }, [open]);

  const onSubmit = (values: {
    email: string;
    fee: string;
    course: string;
    batch: never[];
  }) => {
    const data = {
      ...values,
      batch: batchList.filter((batch) => batch.length > 0),
    };
    alert(JSON.stringify(data));
  };

  const handleCopy = () => {
    copy(window.location.href);
    setCopied(true);
  };

  if (!open) return null;

  return (
    <div tabIndex={-1} className={styles.container}>
      <div className={styles.content}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="enroll-student-form"
          className={styles.form}
        >
          <div className={styles.header}>
            <h3 className={styles.title}>Enroll Student</h3>
            <p className={styles.subtitle}>We will send email to them</p>
            <button type="button" className={styles.clearBtn} onClick={onClose}>
              <ClearIcon />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className={styles.body}>
            <div className={styles.row}>
              <Controller
                name="email"
                rules={{
                  required: 'Required field',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Type"
                    error={
                      errors?.email?.message !== undefined &&
                      errors?.email?.message?.length > 0
                    }
                    helperText={
                      errors?.email?.message !== undefined &&
                      errors?.email?.message?.length > 0
                        ? errors?.email?.message
                        : ''
                    }
                  />
                )}
              />
              <Controller
                name="fee"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Fee"
                    name="fee"
                    type="text"
                    placeholder="Type"
                    error={
                      errors?.fee?.message !== undefined &&
                      errors?.fee?.message?.length > 0
                    }
                    helperText={
                      errors?.fee?.message !== undefined &&
                      errors?.fee?.message?.length > 0
                        ? errors?.fee?.message
                        : ''
                    }
                  />
                )}
              />
            </div>
            <Controller
              name="course"
              control={control}
              render={({ field }) => (
                <Select
                  label="Course"
                  placeholder="Choose a course"
                  options={COURSES}
                  {...field}
                  onClear={() => field.onChange('')}
                  error={
                    errors?.course?.message !== undefined &&
                    errors?.course?.message?.length > 0
                  }
                  helperText={
                    errors?.course?.message !== undefined &&
                    errors?.course?.message?.length > 0
                      ? errors?.course?.message
                      : ''
                  }
                />
              )}
            />
            <BatchSelect batchList={batchList} onChange={setBatchList} />
          </div>
          <div className={styles.actions}>
            <div className={styles.btns}>
              <button
                id="copy-btn"
                type="button"
                className={`${
                  copied ? 'text-green-500' : 'text-gray-900 btn-text'
                } ${styles.copyBtn}`}
                onClick={handleCopy}
              >
                <CopyIcon />
                {copied ? 'Copied' : 'Copy invited link'}
              </button>
            </div>
            <div className={styles.btns}>
              <button
                id="cancel-btn"
                onClick={onClose}
                type="button"
                className={styles.cancelBtn}
              >
                Cancel
              </button>
              <button
                id="submit-btn"
                type="submit"
                form="enroll-student-form"
                className={styles.submitBtn}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollStudentForm;
