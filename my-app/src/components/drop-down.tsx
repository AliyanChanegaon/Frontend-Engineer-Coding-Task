import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const DropDown = ({
  setCountry,
  country,
  options,
}: {
  setCountry: (value: string) => void;
  country: string;
  options: string[];
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left h-full">
      <div>
        <Menu.Button className="inline-flex w-full  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {country === "" ? "Select Country" : country}
          <FaChevronDown
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg h-96 overflow-y-scroll ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options &&
              options?.map((el) => (
                <Menu.Item key={el}>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => setCountry(el)}
                    >
                      {el}
                    </p>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
