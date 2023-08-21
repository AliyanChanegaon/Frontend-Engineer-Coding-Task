import { useState } from "react";
import EmptyContact from "../components/empty-contact";
import InputForm, { userModel } from "../components/input-form";

const initialValue = {
  firstName: "",
  lastName: "",
  status: "Active",
  id: "",
};

const ContactPage = () => {
  const [data, setData] = useState<userModel>(initialValue);
  const [PeoplesData, setPeoplesData] = useState<Array<userModel>>([]);
  const [inputActive, setInputActive] = useState(false);
  const [isEdit, setisEdit] = useState(false);

  function getRandomString(length: number) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      result += alphabet[randomIndex];
    }
    return result;
  }

  const HandlingBackButton = () => {
    if (PeoplesData.length === 0) {
      setInputActive(false);
    } else {
      setInputActive(false);
    }
  };

  const HandlingSubmit = () => {
    if (PeoplesData.length === 0) {
      const randomIndex = getRandomString(3);
      const newData = { ...data, id: randomIndex };
      setPeoplesData([...PeoplesData, newData]);
    }

    const dataExists = PeoplesData.some(
      (el) => el.firstName === data.firstName && el.lastName === data.lastName
    );

    if (dataExists) {
      alert("Person already exist");
      return;
    } else {
      const randomIndex = getRandomString(3);
      const newData = { ...data, id: randomIndex };
      setPeoplesData([...PeoplesData, newData]);
    }
  };

  const HandlingEditData = (value: userModel) => {
    console.log(value);
    console.log("PeoplesData before", PeoplesData);
    //  const findIndx = PeoplesData.findIndex((el) => el.id === value.id);

    // console.log(findIndx);
    //  const newArr = PeoplesData.splice(findIndx, 1)
    // console.log(newArr);
    // console.log("PeoplesData after",PeoplesData);
    const newArray = PeoplesData.map((el) => {
      if (el.id === value.id) {
        return value;
      }
      return el;
    });
    setPeoplesData(newArray);
  };

  const HandlingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: key, value } = e.target;
    setData({ ...data, [key]: value });
  };

  const HandilngDelete = (value: string) => {
    const newArray = PeoplesData.filter((el, idx: number) => el.id != value);
    setPeoplesData(newArray);
  };

  const HandlingEdit = (value: string) => {
    console.log(value);
    setisEdit(true);
    const newArray = PeoplesData.find((el, idx: number) => el.id == value);

    if (newArray) {
      setData(newArray);
    }
    setInputActive(true);
  };
  return (
    <div className="h-screen flex flex-col justify-center  bg-[#ece9e4] w-full">
     
        {PeoplesData.length <= 0 && !inputActive && (
          <EmptyContact HandlingClick={() => setInputActive(true)} />
        )}

        {inputActive && (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl p-5">Create Contact Screen</h1>

            <InputForm
              userData={data}
              HandlingChange={HandlingChange}
              HandlingSubmit={HandlingSubmit}
              setinputActive={setInputActive}
              HandlingBackButton={HandlingBackButton}
              HandlingEditData={HandlingEditData}
              isEdit={isEdit}
            />
          </div>
        )}
     
    </div>
  );
};

export default ContactPage;

