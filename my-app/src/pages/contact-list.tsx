const ContactList = () => {
  return (
    <div>
      {/* <div className=" w-full flex flex-col gap-20 mt-[20px] items-center">
        <button
          className="w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setInputActive(true);
            setData(initialValue);
          }}
        >
          Create New Contact
        </button>

        <div className=" grid grid-cols-4 gap-6 justify-center place-items-center">
          {PeoplesData.map((el, idx) => (
            <div
              key={el.id}
              className="flex flex-col items-center pb-10 text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/imgs/avatar.png"
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {`name:${el.firstName}`}
                </h5>
                <span className="text-xl font-medium text-gray-900 dark:text-white">
                  {`Last name :${el.lastName}`}
                </span>
              </div>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <button
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-500 hover:bg-green-700 rounded-lg "
                  onClick={() => HandlingEdit(el.id)}
                >
                  Edit
                </button>
                <button
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-600 hover:bg-red-800 border border-gray-300 rounded-lg"
                  onClick={() => HandilngDelete(el.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ContactList;
