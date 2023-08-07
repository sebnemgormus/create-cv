/* eslint-disable react/prop-types */
import React from "react";

function PersonalDataPreview({
  firstName,
  lastName,
  title,
  description,
}) {

  console.log(firstName, "firstname")
  console.log(lastName, "lastName")
  return (
 
    <div>
      <div className="personalDataPreviewHeader">

        <div>
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
          <h2>{title}</h2>
        </div>

        <div className="personalDataPreviewImg">
          <img src="" />
        </div>
      </div>
        <p>{description}</p>
    <hr></hr>
    </div>

  );
}

export default PersonalDataPreview;
