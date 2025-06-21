import React from "react";
type TcontactListProps = {
  contacts: { name: string; city: string }[];
};
export default function ContactList({ contacts }: TcontactListProps) {
  return (
    <ul className="list-none grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
      {contacts.map((contact, index) => (
        <li
          key={index}
          className="bg-white p-4 rounded-md shadow-md  flex flex-col justify-between"
        >
          <div>
            <h2 className="font-semibold">{contact.name}</h2>
            <p> {contact.city}</p>
          </div>
          <div className="flex gap-2 justify-between p-6">
            <button className="text-red-500"></button>
            <button className="text-blue-gray-400 w-[60px] p-2 rounded-md bg-gray-200 cursor-pointer fkex justify-center items-center font-semibold hover:bg-gray-300">
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>

    //<div className="flex flex-col gap-4 mt-6">
    //   <div className="bg-white p-4 rounded-md shadow-md w-[600px]">
    //     <h2 className="font-semibold">John Doe</h2>
    //     <p>City: New York</p>

    //     <div className="flex justify-between items-center">
    //       <button>Delete</button>
    //       <div>
    //         <button>Cancel</button>
    //         <button>Edit</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-white p-4 rounded-md shadow-md w-[600px]">
    //     <h2 className="font-semibold">Jane Smith</h2>
    //     <p>City: Los Angeles</p>
    //     <div className="flex justify-between items-center">
    //       <button>Delete</button>
    //       <div>
    //         <button>Cancel</button>
    //         <button>Edit</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
