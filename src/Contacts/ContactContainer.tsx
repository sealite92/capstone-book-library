import React, { use, useEffect, useState } from "react";
import Header from "./Header";
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";
export type TcontactDetail = {
  name: string;
  city: string;
};
// const contacts: TcontactDetail[] = [];

export default function ContactContainer() {
  const [contacts, setContacts] = useState<TcontactDetail[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const addContact = (newContact: TcontactDetail) => {
    setContacts([...contacts, newContact]);
  };

  useEffect(() => {
    const stored = localStorage.getItem("contacts");
    if (stored) {
      setContacts(JSON.parse(stored));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts, isLoaded]);

  return (
    <div className="bg-[#e0e2e6]  py-10 px-20">
      <Header />
      <AddContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}
