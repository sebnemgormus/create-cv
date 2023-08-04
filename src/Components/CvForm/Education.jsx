import React from "react";
import education from "../../assets/education.svg";

function Education() {
  return (
    <div className="educationMain">
      <div className="educationTitle">
        <img className="educationIcon" src={education} />
        <h2>Education</h2>
      </div>

      <form>
        <input
          type="text"
          // value=""
          placeholder="School"
          maxLength="15"
          autoComplete="off"
          //onChange={outputInputValue}
        />

        <input
          type="text"
          // value=""
          placeholder="Degree"
          maxLength="15"
          autoComplete="off"
          //onChange={outputInputValue}
        />
      </form>
    </div>
  );
}

export default Education;
