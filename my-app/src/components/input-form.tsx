import React, { Dispatch, SetStateAction } from "react";


export interface userModel{
  firstName: string;
  lastName: string;
  status: string;
  id: string;
}

export interface initialValueProps {
  userData : userModel;
  HandlingChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  HandlingSubmit?: () => void;
  setinputActive?: Dispatch<SetStateAction<boolean>>;
  HandlingBackButton?: () => void;
  HandlingEditData?: (value: userModel) => void;
  isEdit?: boolean;
}

const InputForm = ({
  userData,
  HandlingChange,
  HandlingSubmit,
  setinputActive,
  HandlingBackButton,
  HandlingEditData,
  isEdit,
  
}: initialValueProps) => {
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="first-name"
            >
              First Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-full-name"
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={HandlingChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="last-name"
            >
              Last Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-full-name"
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={HandlingChange}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Status
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center mb-4">
              <input
                type="radio"
                name="status"
                checked={userData.status === "Active"}
                value="Active"
                onChange={HandlingChange}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-1"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Active
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                name="status"
                checked={userData.status === "Inactive"}
                value="Inactive"
                onChange={HandlingChange}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-1"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Inactive
              </label>
            </div>
          </div>
        </div>
      </form>
      <div className="flex gap-5">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            if (setinputActive) {
              if (isEdit && HandlingEditData) {
                setinputActive(false);
                HandlingEditData(userData);
              } else {
                if (HandlingSubmit) {
                  setinputActive(false);
                  HandlingSubmit();
                }
              }
            }
          }}
        >
          {isEdit ? "Update Details" : "Save Contact"}
        </button>
        <button
          className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
          onClick={HandlingBackButton}
        >
          Go back
        </button>
      </div>
    </>
  );
};

export default InputForm;
