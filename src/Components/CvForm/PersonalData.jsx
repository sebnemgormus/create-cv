/* eslint-disable react/prop-types */
import React from "react";
import personalInfo from "../../assets/personalInfo.svg"; 



function PersonalData({
  onFirstName,
  onLastName,
  onTitle,
  onDescription,
  onNumber,
  onEmail,
  onImageSelect 
}) {

  const handleImageSelect = (event) => {
    const selectedFile = event.target.files[0];
    onImageSelect(selectedFile);
  };
  

  console.log(onFirstName,"fn from form")
  return (
    <div className="personalDataMain">
      <div>
        <div className="personalDataTitle">
          <img className="personalIcon" src={personalInfo}/>
          <h2>Personal Data</h2>
        </div>
        <form>
          <div className="formNameSection">
          <input
              type="text"
             // value=""
              placeholder="First Name"
              maxLength="10"
              autoComplete="off"
              onChange={onFirstName}
            />
            <input
              type="text"
             // value=""
              placeholder="Last Name"
              maxLength="10"
              autoComplete="off"
              onChange={onLastName}
            />
          </div>
          <input
            type="text"
           // value=""
            placeholder="Title"
            maxLength="10"
            autoComplete="off"
            onChange={onTitle}
          />
           <input
            type="number"
           // value=""
            placeholder="Phone number"
            maxLength="11"
            autoComplete="off"
           onChange={onNumber}
          />
            <input
            type="email"
           // value=""
            placeholder="Email"
            maxLength="25"
            autoComplete="off"
            onChange={onEmail}
          />
          <label htmlFor="file">Chose Picture</label>
          <input 
            id="file"
            type="file"
            onChange={handleImageSelect}
           />
          <textarea
            //value=""
            placeholder="Tell something about yourself"
            maxLength="90"
            autoComplete="off"
           onChange={onDescription}
          />
        </form>
      </div>
    </div>
  );
}

export default PersonalData;
