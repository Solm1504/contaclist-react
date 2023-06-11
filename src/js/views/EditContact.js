import React, { useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  let { id } = useParams();
  let history = useNavigate();
  const getContact = store.contacts;

  const editContact = getContact.filter((contact, index) => {
    return contact.id === id;
  })[0];

  const [textInput, setTextInput] = useState({
    full_name: editContact.full_name,
    phone: editContact.phone,
    email: editContact.email,
    address: editContact.address,
    agenda_slug: "alex",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTextInput({ ...textInput, [name]: value });
  };

  const saveContact = () => {
    if (
      textInput.full_name !== "" &&
      textInput.email !== "" &&
      textInput.phone !== "" &&
      textInput.address !== ""
    ) {
      actions.editContact(textInput, id);
      history.push("/");
    }
  };

  return (
    <div className="container contactadd">
      <div>
        <h1 className="text-center mt-5 offwhite">" EDIT CONTACT "</h1>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="full_name"
              value={textInput.full_name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={textInput.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              name="phone"
              value={textInput.phone}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={textInput.address}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter address"
            />
          </div>
          <button
            type="button"
            onClick={saveContact}
            className="btn btn-sm form-control"
          >
            Save
          </button>
          <Link className="btn btn-warning backbtn" to="/">
            <i className="fa-solid fa-angles-left fa-beat-fade"></i>
          </Link>
        </form>
      </div>
    </div>
  );
};
