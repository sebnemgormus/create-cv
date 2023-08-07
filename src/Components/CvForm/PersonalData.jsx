/* eslint-disable react/prop-types */
import React from "react";
import personalInfo from "../../assets/personalInfo.svg"; 



function PersonalData({
  onFirstName,
  onLastName,
  onTitle,
  onDescription,
}) {

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
              placeholder="Last Name"
              maxLength="15"
              autoComplete="off"
              onChange={onFirstName}
            />
            <input
              type="text"
             // value=""
              placeholder="Last Name"
              maxLength="15"
              autoComplete="off"
              onChange={onLastName}
            />
          </div>
          <input
            type="text"
           // value=""
            placeholder="Title"
            maxLength="15"
            autoComplete="off"
            onChange={onTitle}
          />
          <label htmlFor="file">Chose Picture</label>
          <input 
            id="file"
            type="file"
            //onChange={uploadPicture}
           />
          <textarea
            //value=""
            placeholder="Tell something about yourself"
            maxLength="520"
            autoComplete="off"
           onChange={onDescription}
          />
        </form>
      </div>
    </div>
  );
}

export default PersonalData;
