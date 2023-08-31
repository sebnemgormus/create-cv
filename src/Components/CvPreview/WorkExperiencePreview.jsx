function WorkExperiencePreview({
  id,
  position,
  company,
  start,
  end,
  desc,
}) {

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <div className="workExperienceContent" key={id}>
        <div key={id}>
          <p style={{ color: "#D8A2FA" }}>{start} to {end}</p>
        </div>
        <div key={id}>
          <h2>{position ? capitalizeFirstLetter(position) : ''}</h2>
          <h3>{company ? capitalizeFirstLetter(company) : ''}</h3>
          <p>{desc ? capitalizeFirstLetter(desc) : ''}</p>
        </div>
      </div>
      <hr style={{ borderColor: "#D8A2FA" }}></hr>
    </div>
  );
}

export default WorkExperiencePreview;
