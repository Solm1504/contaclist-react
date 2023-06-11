import React, { useContext, useEffect, useState }  from 'react'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard.jsx";

export const ContactsMain = () => {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    actions.getContacts();
  }, []);
  useEffect(() => {
    setContacts(store.contacts)
  }, [store.contacts]);

  return (
    <>
      <div className='container addcont'>
        <button className="btn btn-sm addbtn">
        <Link className="btn pretty" to="/add">
          add
        <i class="fa-solid fa-address-card fa-xl iconcontact"></i>
          </Link>
          </button>
       </div>
       <div>
         {contacts.map((info, index) => {
          return (
            <ContactCard
                key={index}
                fullname={info.full_name}
                address={info.address}
                phone={info.phone}
                email={info.email}
                id={info.id}
            />
          );
         })}
        </div>
    </>
  );
};

export default ContactsMain;