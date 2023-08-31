import education from "../../assets/education.svg";

function Education({
  onSchoolName,
  onSchoolDegree
}) {
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
          maxLength="100"
          autoComplete="off"
          onChange={onSchoolName}
        />

        <input
          type="text"
          // value=""
          placeholder="Degree"
          maxLength="100"
          autoComplete="off"
          onChange={onSchoolDegree}
        />
      </form>
    </div>
  );
}

export default Education;
