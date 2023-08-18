import { useState } from "react";

const ContactPage = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  return (
    <>
      {isEmpty ? (
        <div className="w-full  h-screen flex flex-col ">
         <nav className="w-full h-[60px] flex justify-center items-center p-2 bg-[#306893]"><p className="text-white text-2xl font-bold">Content Page</p></nav>
         <aside className="max-w-[20%] flex-1  border-r border-black">
          <div className="text-lg font-semibold border-b border-black py-3 text-center cursor-pointer ">Contact</div>
          <div className="text-lg font-semibold border-b border-black py-3 text-center cursor-pointer ">Charts and Map</div>
         </aside>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ContactPage;
