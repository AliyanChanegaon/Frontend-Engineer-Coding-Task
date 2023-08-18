import { useState } from "react";
import AsideBar from "../components/aside-bar";
import EmptyContact from "../components/empty-contact";

const ContactPage = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const HandlingClick = () => {
    setIsEmpty(false);
  };
  return (
    <div className="h-screen flex flex-col bg-[#ece9e4]">
      <nav className="w-full h-[60px] flex justify-center items-center p-2 bg-[#306893]">
        <p className="text-white text-2xl font-bold">Content Page</p>
      </nav>
      <div className="flex border">
        <div style={{ width: "230px" }}>
          <AsideBar />
        </div>

        {isEmpty ? (
          <EmptyContact HandlingClick={HandlingClick} />
        ) : (
          <div className="flex flex-col w-full items-center">
            <h1 className="text-3xl p-5">Create Contact Screen</h1>
            
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                  >
                    Full Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-password"
                  >
                    Password
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="inline-password"
                    type="password"
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
                      id="country-option-1"
                      type="radio"
                      name="countries"
                      value="USA"
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
                      id="country-option-1"
                      type="radio"
                      name="countries"
                      value="USA"
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Save Contact
</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
