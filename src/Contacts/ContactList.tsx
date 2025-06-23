import React, { useState } from "react";
type TcontactListProps = {
  contacts: { name: string; city: string }[];
  updateContact?: (
    index: number,
    updatedContact: { name: string; city: string }
  ) => void;
  deleteContact?: (index: number) => void;
};
export default function ContactList({
  contacts,
  updateContact,
  deleteContact,
}: TcontactListProps) {
  const [editedIndex, setEditedIndex] = useState<number | null>(null);
  const [editedName, setEditedName] = useState("");
  const [editedCity, setEditedCity] = useState("");

  const handleEdit = (index: number) => {
    setEditedIndex(index);
    setEditedName(contacts[index].name);
    setEditedCity(contacts[index].city);
  };
  const handleSave = (index: number) => {
    if (updateContact) {
      updateContact(index, { name: editedName, city: editedCity });
    }
    setEditedIndex(null);
    setEditedName("");
    setEditedCity("");
  };

  const handleCancel = () => {
    setEditedIndex(null);

    setEditedName("");
    setEditedCity("");
  };

  const handleDelete = (index: number) => {
    if (deleteContact) {
      deleteContact(index);
      setEditedIndex(null);
    }
  };
  return (
    <ul className="list-none grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
      {contacts.map((contact, index) => (
        <li
          key={index}
          className="bg-white p-4 rounded-md shadow-md  flex flex-col justify-between"
        >
          {editedIndex == index ? (
            <>
              <div className="flex flex-col w-full sm:w-auto">
                <div className=" border-2 border-gray-300 rounded-md p-2 flex items-center w-full">
                  <span className="text-gray-400">Name:</span>
                  <input
                    className="border-none outline-none bg-transparent mx-2 w-full"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    type="text"
                  />
                </div>
                <div className=" border-2 border-gray-300 rounded-md p-2 flex items-center w-full">
                  <span className="text-gray-400">City:</span>
                  <input
                    className="border-none outline-none bg-transparent mx-2 w-full"
                    value={editedCity}
                    onChange={(e) => setEditedCity(e.target.value)}
                    type="text"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="bg-red-200 w-[60px] p-2 rounded-md cursor-pointer flex justify-center items-center font-semibold hover:bg-red-300"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
                <div className="flex gap-2 justify-between p-6">
                  <button
                    onClick={handleCancel}
                    className="text-blue-gray-400 w-[60px] p-2 rounded-md bg-gray-200 cursor-pointer flex justify-center items-center font-semibold hover:bg-gray-300"
                  >
                    Camcel
                  </button>
                  <button
                    className="text-blue-gray-400 w-[60px] p-2 rounded-md bg-gray-200 cursor-pointer flex justify-center items-center font-semibold hover:bg-gray-300"
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2 className="font-semibold">{contact.name}</h2>
                <p> {contact.city}</p>
              </div>
              <div className="flex gap-2 justify-between p-6">
                {/* <button className="text-red-500"></button> */}
                <button
                  onClick={() => {
                    handleEdit(index);
                  }}
                  className="text-blue-gray-400 w-[60px] p-2 rounded-md bg-gray-200 cursor-pointer flex justify-center items-center font-semibold hover:bg-gray-300"
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
