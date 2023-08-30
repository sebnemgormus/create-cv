function WorkExperiencePreview({
  id,
  position,
  company,
  start,
  end,
  desc,
}) {
  return (
    <div>
      <h1 style={{fontWeight:900}}>WORK EXPERIENCE</h1>
      <div className="workExperienceContent" key={id}>
        <div key={id}>
          <p style={{ color: "#D8A2FA" }}>{start} - {end}</p>
        </div>
        <div key={id}>
          <h2>{position}</h2>
          <h3>{company}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <hr style={{ borderColor: "#D8A2FA" }}></hr>
    </div>
  );
}

export default WorkExperiencePreview;
