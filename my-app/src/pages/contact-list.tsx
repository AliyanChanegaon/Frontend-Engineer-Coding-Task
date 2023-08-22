import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deleteContact, selectContacts } from "../redux/contactSlice";
import { useNavigate } from "react-router-dom";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const ContactList = () => {
  const Navigate = useNavigate();
  const { contacts } = useTypedSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center w-full p-5 ">
      <button
        className=" bg-[#306893] hover:bg-[#2d5473] text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          Navigate("/contact");
        }}
      >
        Create New Contact
      </button>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 justify-center place-items-center mt-5">
        {contacts?.map((el) => (
          <div
            key={el.id}
            className="flex flex-col items-center  text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/imgs/avatar.png"
                alt="Bonnie image"
              />
              <span className="mb-1 font-bold text-sm text-gray-900 dark:text-white">
                {`First name: ${el.firstName}`}
              </span>
              <span className="font-bold  text-sm text-gray-900 dark:text-white">
                {`Last name: ${el.lastName}`}
              </span>
              <span className="font-bold  text-sm text-gray-900 dark:text-white">
                {`Status: ${el.status}`}
              </span>
            </div>
            <div className="flex text-center mt-4 space-x-3 md:mt-6">
              <button
                className="w-fit p-4 text-xs h-5 inline-flex items-center font-medium text-center text-white bg-green-500 hover:bg-green-700 rounded-md "
                onClick={() => Navigate(`/contact/id/${el.id}`)}
              >
                Edit
              </button>
              <button
                className="w-fit p-4 text-xs h-5 inline-flex items-center font-medium text-center text-white bg-red-600 hover:bg-red-800 border border-gray-300 rounded-md"
                onClick={() => dispatch(deleteContact(el.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
