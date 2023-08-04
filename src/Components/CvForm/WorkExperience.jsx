import React from "react";
import workExperience from "../../assets/workExperience.svg";

function WorkExperience() {
  return (
    <div className="workExperienceMain">
      <div className="workExperienceTitle">
        <img className="workIcon" src={workExperience} />
        <h2>Work Experience</h2>
      </div>

      <form>
        <input
          type="text"
          // value=""
          placeholder="Position"
          maxLength="15"
          autoComplete="off"
          //onChange={outputInputValue}
        />
        <input
          type="text"
          // value=""
          placeholder="Company"
          maxLength="15"
          autoComplete="off"
          //onChange={outputInputValue}
        />

        <input
          type="number"
          // value=""
          placeholder="Start Date"
          maxLength="15"
          autoComplete="off"
          //onChange={outputInputValue}
        />
        <input
          type="number"
          // value=""
          placeholder="End Date"
          maxLength="15"
          autoComplete="off"
          //onChange={outputInputValue}
        />

        <textarea
          //value=""
          placeholder="Description"
          maxLength="520"
          autoComplete="off"
          // onChange={outputInputValue}
        />
        <button className="addNewWorkBtn">+ Add</button>
      </form>
    </div>
  );
}

export default WorkExperience;
