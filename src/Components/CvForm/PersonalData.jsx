/* eslint-disable react/prop-types */
import personalInfo from "../../assets/personalInfo.svg"; 


function PersonalData({
  onFirstName,
  onLastName,
  onTitle,
  onDescription,
  onNumber,
  onEmail,
  onImageSelect 
}) {

  const handleImageSelect = (event) => {
    const selectedFile = event.target.files[0];
    onImageSelect(selectedFile);
  };
  
  return (
    <div className="personalDataMain">
      <div>
        <div className="personalDataTitle">
          <img className="personalIcon" src={personalInfo}/>
          <h2>Personal Data</h2>
        </div>
        <form>
          <div className="formNameSection">
          <input
              type="text"
              placeholder="First Name"
              maxLength="10"
              autoComplete="off"
              onChange={onFirstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              maxLength="10"
              autoComplete="off"
              onChange={onLastName}
            />
          </div>
          <input
            type="text"
            placeholder="Title"
            maxLength="20"
            autoComplete="off"
            onChange={onTitle}
          />
           <input
            type="number"
            placeholder="Phone number"
            maxLength="11"
            autoComplete="off"
           onChange={onNumber}
          />
            <input
            type="email"
            placeholder="Email"
            maxLength="25"
            autoComplete="off"
            onChange={onEmail}
          />
          <label htmlFor="file">Chose Picture</label>
          <input 
            id="file"
            type="file"
            onChange={handleImageSelect}
           />
          <textarea
            placeholder="Tell something about yourself"
            maxLength="90"
            autoComplete="off"
           onChange={onDescription}
          />
        </form>
      </div>
      
    </div>
  );
}

export default PersonalData;
