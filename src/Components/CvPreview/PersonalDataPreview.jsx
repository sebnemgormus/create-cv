/* eslint-disable react/prop-types */
import React from "react";

function PersonalDataPreview({
  firstName,
  lastName,
  title,
  description,
  number,
  email,
}) {
  console.log(firstName, "firstname");
  console.log(lastName, "lastName");
  return (
    <>
      <div className="personalDataPreviewMain">
        <div className="personalDataPreviewLeft">
          <h1>{firstName} {lastName}</h1>
        
          <h2>{title}</h2>
          <p style={{overflowWrap: "anywhere"}}>{description}</p>
        </div>
        <div className="personalDataPreviewRight">
          <div className="picture">
            <img src=""/>
          </div>
          <p style={{marginTop: "7rem"}}>{number}</p>
          <p style={{marginTop: "-1rem"}}>{email}</p>
        </div>
      </div>
      <hr style={{borderColor: "#D8A2FA"}}></hr>
    </>
  );
}

export default PersonalDataPreview;
