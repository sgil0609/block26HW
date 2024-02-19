import { useState } from 'react'
import ContactList from './components/ContactList'
import dummyContacts from './components/ContactList'
import './App.css'



export default function App() {
  const [contacts, setContacts] = useState(dummyContacts)
  console.log("Contacts: ", contacts)
  return (
    <>

      <ContactList />
    </>
  );
}


