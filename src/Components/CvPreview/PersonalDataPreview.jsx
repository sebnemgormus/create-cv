
function PersonalDataPreview({
  firstName,
  lastName,
  title,
  description,
  number,
  email,
  selectedImage,
}) {

  return (
    <>
      <div className="personalDataPreviewMain">
        <div className="personalDataPreviewLeft">
          <h1>
            {firstName} {lastName}
          </h1>

          <h2 className="person-name">{title}</h2>
          <p style={{ overflowWrap: "anywhere" }}>{description}</p>
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
      <h2 style={{fontWeight:900, marginLeft:"21px"}}>WORK EXPERIENCE</h2>
    </>
  );
}

export default PersonalDataPreview;
