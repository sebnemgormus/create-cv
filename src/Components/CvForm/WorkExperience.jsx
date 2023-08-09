import React from "react";
import workExperience from "../../assets/workExperience.svg";

function WorkExperience({
  onPosition,
  onCompany,
  onStartDate,
  onEndDate,
  onWorkDescription,
}) {
  return (
    <div className="workExperienceMain">
      <div className="workExperienceTitle">
        <img className="workIcon" src={workExperience} />
        <h1>Work Experience</h1>
      </div>

      <form>
        <input
          type="text"
          // value=""
          placeholder="Position"
          maxLength="25"
          autoComplete="off"
          onChange={onPosition}
        />
        <input
          type="text"
          // value=""
          placeholder="Company"
          maxLength="20"
          autoComplete="off"
          onChange={onCompany}
        />

        <input
          type="number"
          // value=""
          placeholder="Start Date"
          maxLength="15"
          autoComplete="off"
          onChange={onStartDate}
        />
        <input
          type="number"
          // value=""
          placeholder="End Date"
          maxLength="15"
          autoComplete="off"
          onChange={onEndDate}
        />

        <textarea
          //value=""
          placeholder="Description"
          maxLength="120"
          autoComplete="off"
          onChange={onWorkDescription}
        />
        <button className="addNewWorkBtn">+ Add</button>
      </form>
    </div>
  );
}

export default WorkExperience;
