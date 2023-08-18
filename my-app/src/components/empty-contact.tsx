

type HandlingClickProp={
  HandlingClick: ()=>void;
}

const EmptyContact = ({HandlingClick}:HandlingClickProp) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={HandlingClick}>
        Create Contact
      </button>
      <div>No Contact found please click on create contact button</div>
    </div>
  );
};

export default EmptyContact;
