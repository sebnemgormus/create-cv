

function EducationPreview({
  schoolName,
  schoolDegree
}) {
  return (
    <div>
      <h2 className="educationTitle">EDUCATION</h2>
      <div className="educationPreview">
        <h2 className="schoolName">{schoolName ? schoolName.toUpperCase() : ''}</h2>
        <h2 className="schoolDegree">{schoolDegree ? schoolDegree.charAt(0).toUpperCase() + schoolDegree.slice(1).toLowerCase() : ''}</h2>
      </div>
      <hr style={{ borderColor: "#D8A2FA" }}></hr>
    </div>
  )
}

export default EducationPreview