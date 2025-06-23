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

  const deleteContact = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const updateContact = (index: number, updatedContact: TcontactDetail) => {
    const updatedContacts = contacts.map((contact, i) => {
      if (i === index) {
        return updatedContact;
      }
      return contact;
    });
    setContacts(updatedContacts);
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
    <div className="min-h-screen bg-[#e0e2e6]  py-10 px-20">
      <Header />
      <AddContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
    </div>
  );
}
