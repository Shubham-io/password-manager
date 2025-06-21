import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";

const AllPasswords = ({ passwordArray, setPasswordArray, setForm }) => {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard", {
      style: { backgroundColor: "#d4edda", color: "#155724" },
    });
  };

  const editPassword = (id) => {
    console.log("editing pass word with id ", id);

    //setting the value in input field & deleting the selected entry
    setForm(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };
  const deletePassword = (id) => {
    console.log("deleting pass word with id ", id);
    let choice = confirm("do you really want to delete this password? ");
    if (choice) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );

      toast.error("Item deleted", {
        style: { backgroundColor: "#f8d7da", color: "#721c24" },
      });
    }
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center py-4 mb-20 mx-auto ">
        <h1 className="text-2xl py-3 font-bold">Your Passwords</h1>
        {passwordArray.length === 0 ? (
          <div>No password to show</div>
        ) : (
          <table className="table-auto w-[60vw]   rounded-xl overflow-hidden">
            <thead className="bg-teal-800 text-white">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-teal-100">
              {passwordArray.map((item, index) => (
                <tr key={index}>
                  <td className="w-1/4 py-2 border border-white">
                    <div
                      className="flex justify-center items-center gap-1 w-fit mx-10 cursor-pointer"
                      onClick={() => copyText(item.site)}
                    >
                      <a href={item.site} target="_blank">
                        <span className="truncate-url"> {item.site}</span>
                      </a>

                      <span>
                        <IoCopy size={18} />
                      </span>
                    </div>
                  </td>
                  <td className="w-1/4 py-2 border border-white ">
                    <div
                      className="flex justify-center items-center gap-1 w-fit mx-auto cursor-pointer"
                      onClick={() => copyText(item.username)}
                    >
                      <span> {item.username}</span>
                      <span>
                        <IoCopy size={18} />
                      </span>
                    </div>
                  </td>
                  <td className=" w-1/4 py-2 border border-white">
                    <div
                      className="flex justify-center items-center gap-1 w-fit mx-auto cursor-pointer"
                      onClick={() => copyText(item.password)}
                    >
                      <span> {"*".repeat(item.password.length)}</span>
                      <span>
                        <IoCopy size={18} />
                      </span>
                    </div>
                  </td>
                  <td className="w-1/4 py-2 border border-white">
                    <div className="flex justify-center items-center gap-2 w-fit mx-auto cursor-pointer">
                      <span onClick={() => editPassword(item.id)}>
                        <FaEdit size={20} />
                      </span>
                      <span onClick={() => deletePassword(item.id)}>
                        <MdDelete size={20} />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default AllPasswords;
