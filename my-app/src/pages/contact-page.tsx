import InputForm from "../components/input-form";

import { useParams } from "react-router-dom";

const ContactPage = () => {
  const { id } = useParams();

  return (
    <div className="w-full p-3 overflow-hidden flex flex-col" >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl p-5">
          {id ? "Update Contact" : "Create Contact Screen"}
        </h1>
        <InputForm contactId={id} />
      </div>
    </div>
  );
};

export default ContactPage;
