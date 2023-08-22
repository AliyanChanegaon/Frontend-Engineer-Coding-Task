import React, { useEffect, useState } from "react";
import { addContact, editContact, selectContacts } from "../redux/contactSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { ContactModel } from "../models/contact-model";

interface initialValueProps {
  HandlingBackButton?: () => void;
  HandlingEditData?: (value: ContactModel) => void;
  isEdit?: boolean;
}

const initialValue = {
  firstName: "",
  lastName: "",
  status: "Active",
  id: "",
};

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const InputForm = ({ contactId }: { contactId?: string }) => {
  const { contacts } = useTypedSelector(selectContacts);
  const [formData, setFormData] = useState<ContactModel>(initialValue);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const HandlingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: key, value } = e.target;
    setFormData({ ...formData, [key]: value });
  };

  const HandlingSubmit = () => {
    if (!formData.firstName || !formData.lastName) {
      return alert("Fields are required");
    }
    dispatch(
      contactId
        ? editContact({ ...formData })
        : addContact({ ...formData, id: Date.now().toString() })
    );
    Navigate("/contact-list");
  };

  useEffect(() => {
    if (contactId) {
      const editableData = contacts.find((contact) => contact.id === contactId);
      if (editableData) setFormData({ ...editableData });
    }
  }, []);

  return (
    <div
      className="p-5"
      style={{
        boxShadow:
          " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <form className="bg-white w-full sm:max-w-[450px] px-5 rounded sm:px-8 sm:pt-6  ">
        <div className="md:flex md:items-center sm:mb-6">
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
              value={formData.firstName}
              onChange={HandlingChange}
              required
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
              value={formData.lastName}
              onChange={HandlingChange}
              required
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
          <div className="flex gap-5 ">
            <div className="flex ">
              <input
                type="radio"
                name="status"
                checked={formData.status === "Active"}
                value="Active"
                onChange={HandlingChange}
                className="w-4  border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-1"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Active
              </label>
            </div>
            <div className="flex ">
              <input
                type="radio"
                name="status"
                checked={formData.status === "Inactive"}
                value="Inactive"
                onChange={HandlingChange}
                className="w-4  border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
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
      <div className="flex w-full item-center justify-center gap-5 p-5 pt-0">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={HandlingSubmit}
        >
          {contactId ? "Update Details" : "Save Contact"}
        </button>
        <button
          className="bg-[#e5e5e5] hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
          onClick={() => Navigate("/contact-list")}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default InputForm;
