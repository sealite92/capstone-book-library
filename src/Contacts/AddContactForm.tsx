import React, { useState } from "react";

type TaddContactFormProps = {
  addContact: (newContact: { name: string; city: string }) => void;
};

export default function AddContactForm({ addContact }: TaddContactFormProps) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !city) {
      setError("Please fill in both fields.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    addContact({ name, city });
    setName("");
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap sm:flex-nowrap gap-4 bg-white p-6 w-full max-w-3xl rounded-md shadow-md "
    >
      <div className="flex flex-col w-full sm:w-auto">
        <div className=" border-2 border-gray-300 rounded-md p-2 flex items-center w-full">
          <span className="text-gray-400">Name:</span>
          <input
            className="border-none outline-none bg-transparent mx-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-auto">
        <div className=" border-2 border-gray-300 rounded-md p-2 flex items-center w-full">
          <span className="text-gray-400">City:</span>
          <input
            className="border-none outline-none bg-transparent mx-2 w-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
          />
        </div>
      </div>

      <button className="p-3 bg-[#3824cf] text-white rounded-md font-semibold w-full sm:w-auto hover:bg-[#4a3ed1] transition-colors duration-300 cursor-pointer">
        Add contact
      </button>

      {error && (
        <span className="text-red-500 text-sm mb-2 absolute top-1 right-80">
          {error}
        </span>
      )}
    </form>
  );
}
