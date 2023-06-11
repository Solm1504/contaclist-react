import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext.js';

export const AddContact = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState({
    full_name: '',
    phone: '',
    email: '',
    address: '',
    agenda_slug: 'sol_15',
  });

  const handleInputChange = (e) => {
    setTextInput({ ...textInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput !== '') {
      actions.submitContact(textInput);
      navigate('/');
    }
  };

  return (
    <div className="container contactadd">
      <div>
        <h1 className="text-center mt-5 offwhite">" NEW CONTACT "</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="full_name"
              onChange={handleInputChange}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              onChange={handleInputChange}
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={handleInputChange}
              placeholder="Enter address"
            />
          </div>
          <button type="submit" className="btn btn-sm form-control">
            Save Contact
          </button>
          <Link className="btn btn-warning backbtn" to="/">
            <i className="fa-solid fa-angles-left fa-beat-fade backbutton"></i>
          </Link>
        </form>
      </div>
    </div>
  );
};

