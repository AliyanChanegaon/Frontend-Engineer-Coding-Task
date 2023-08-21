
import InputForm from "../components/input-form";


import { useParams } from "react-router-dom";



const ContactPage = () => {

  const {id}=useParams();




  return (
    <div className="m-auto h-screen flex flex-col justify-center  bg-[#ece9e4] w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl p-5">{id ? "Update Contact": "Create Contact Screen"}</h1>
        <InputForm contactId={id}/>
      </div>
    </div>
  );
};

export default ContactPage;
