import React, { useState, useEffect } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import AllPasswords from "./AllPasswords";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const tooglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const savePassword = () => {

    if (!form.site.trim() || !form.username.trim() || !form.password.trim()) {
      alert("please fill all entries");
      return;
    }

    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );

    console.log([...passwordArray, form]);
    setForm({ site: "", username: "", password: "" });

    toast.success("Password saved", {
      style: { backgroundColor: "#d4edda", color: "#155724" },
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 px-8 md:px-20  mt-8 w-full">
      

        <div className="mx-auto text-center">
          <h1 className="text-2xl font-bold">Fill your details</h1>
  
        </div>

        <div className="flex flex-col space-y-4 md:w-[70%] w-[88%]">
          <input
            value={form.site}
            name="site"
            onChange={handleChange}
            type="text"
            placeholder="Enter site URL"
            className="px-2 py-1 rounded-full outline-none border-2 border-gray-800 focus:border-2 focus:border-gray-900"
          />
          <div className="flex md:flex-row flex-col md:gap-10 gap-4">
            <input
              value={form.username}
              name="username"
              onChange={handleChange}
              d
              type="text"
              placeholder="Enter username"
              className="flex-1 px-2 py-1 rounded-full outline-none border-2 border-gray-800 focus:border-2 focus:border-gray-900"
            />
            <div className="relative">
              <input
                value={form.password}
                name="password"
                onChange={handleChange}
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter password"
                className="px-2 py-1 rounded-full w-full outline-none border-2 border-gray-800 focus:border-2 focus:border-gray-900"
              />
              <span
                className="absolute md:right-1 md:top-1 right-2 top-1 cursor-pointer"
                onClick={tooglePassword}
              >
                {isPasswordVisible ? (
                  <IoEyeOff size={28} className=" p-1" />
                ) : (
                  <IoEye size={28} className=" p-1" />
                )}
              </span>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={savePassword}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full border border-black"
          >
            Save Password
          </button>
        </div>
      </div>

      <AllPasswords
        passwordArray={passwordArray}
        setPasswordArray={setPasswordArray}
        setForm={setForm}
      />
    </>
  );
};

export default Manager;
