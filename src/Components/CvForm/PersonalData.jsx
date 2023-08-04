import React from "react";
import personalInfo from "../../assets/personalInfo.svg"; 



function PersonalData() {
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
              maxLength="15"
              autoComplete="off"
              //onChange={outputInputValue}
            />
            <input
              type="text"
             // value=""
              placeholder="Last Name"
              maxLength="15"
              autoComplete="off"
              //onChange={outputInputValue}
            />
          </div>
          <input
            type="text"
           // value=""
            placeholder="Title"
            maxLength="15"
            autoComplete="off"
            //onChange={outputInputValue}
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
           // onChange={outputInputValue}
          />
        </form>
      </div>
    </div>
  );
}

export default PersonalData;
