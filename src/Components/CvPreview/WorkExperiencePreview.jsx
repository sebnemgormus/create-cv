function WorkExperiencePreview({
  position,
  company,
  startDate,
  endDate,
  workDescription,
}) {
  return (
    <div>
      <h1 style={{fontWeight:900}}>WORK EXPERIENCE</h1>
      <div className="workExperienceContent">
        <div>
          <p style={{ color: "#D8A2FA" }}>{startDate} - {endDate}</p>
        </div>
        <div>
          <h2>{position}</h2>
          <h3>{company}</h3>
          <p>{workDescription}</p>
        </div>
      </div>
      <hr style={{ borderColor: "#D8A2FA" }}></hr>
    </div>
  );
}

export default WorkExperiencePreview;
