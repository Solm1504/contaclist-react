import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const ContactCard = (props) => {
  const { actions } = useContext(Context);
  return (
    <div className="container maincard">
      <div className="d-flex justify-content-left">
        <div>
          <img
            className="pfp"
            src="https://i.pinimg.com/280x280_RS/c5/d3/6d/c5d36d58025121da59ab7a843d0c3a15.jpg"
          ></img>
        </div>
        <div className="groups">
          <h1 className="nametag">{props.fullname}</h1>
          <span className="fa fa-phone fa-fw text-muted mr-3" />
          <p>{props.phone}</p>
          <span className="fa fa-envelope fa-fw text-muted mr-3" />
          <p>{props.email}</p>
          <i className="fas fa-map-marker-alt text-muted mr-3" />
          <p>{props.address}</p>
          <div className="container edtdelbtn">
            <button
              className="custombutton delbtn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Delete Contact"
              onClick={() => actions.deleteContact(props.id)}
            >
              <i class="fa-solid fa-user-xmark"></i>
            </button>
            <Link to={`/edit-contact/${props.id}`}>
              <button
                className="custombutton editbtn"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Edit Contact"
              >
                <i class="fa-solid fa-user-pen"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>{" "}
      <div className="container bananarepublic offwhite">
      
      </div>
    </div>
  );
};

export default ContactCard;