
function PersonalDataPreview({
  firstName,
  lastName,
  title,
  description,
  number,
  email,
  selectedImage,
}) {

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div className="personalDataPreviewMain">
        <div className="personalDataPreviewLeft">
          <h1>
            {firstName ? capitalizeFirstLetter(firstName) : ''} {lastName ? capitalizeFirstLetter(lastName) : ''}
          </h1>

          <h2 className="person-name">{title ? capitalizeFirstLetter(title) : ''}</h2>
          <p style={{ overflowWrap: "anywhere" }}>{description ? capitalizeFirstLetter(description) : ''}</p>
        </div>
        <div className="personalDataPreviewRight">
          <div className="picture">
            <div className="circle-container">
            {selectedImage && (
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
            )}
            </div>
           
          </div>
          <p style={{ marginTop: "7rem" }}>{number}</p>
          <p style={{ marginTop: "-1rem" }}>{email}</p>
        </div>
      </div>
      <hr style={{ borderColor: "#D8A2FA" }}></hr>
      <h2 className="workExperienceTitle" style={{fontWeight:900, paddingTop:20}}>WORK EXPERIENCE</h2>
    </>
  );
}

export default PersonalDataPreview;
