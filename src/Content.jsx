import { useState } from "react";
import Header from "./Components/CvForm/Header";
import PersonalData from "./Components/CvForm/PersonalData";
import WorkExperience from "./Components/CvForm/WorkExperience";
import Education from "./Components/CvForm/Education";
import "./styles/cv-form.css";
import "./styles/normalize.css";
import Preview from "./Components/CvPreview/Preview";
import { v4 as uuidv4 } from "uuid";
import ReactToPrint from "react-to-print";

function Content() {
  let componentRef = null;

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [workExperience, setWorkExperience] = useState([]);
  const [schoolName, setSchoolName] = useState(null) 
  const [schoolDegree, setSchoolDegree] = useState(null) 

  

  function onFirstName(event) {
    setFirstName(event.target.value);
  }

  function onLastName(event) {
    setLastName(event.target.value);
  }

  function onTitle(event) {
    setTitle(event.target.value);
  }

  function onDescription(event) {
    setDescription(event.target.value);
  }

  function onNumber(event) {
    setNumber(event.target.value);
  }

  function onEmail(event) {
    setEmail(event.target.value);
  }

  function handleImageSelect(selectedImage) {
    setSelectedImage(selectedImage);
    console.log(selectedImage, "selected img");
  }

  function onSchoolName(event) {
    setSchoolName(event.target.value);
  }

  function onSchoolDegree(event) {
    setSchoolDegree(event.target.value);
  }


  function addWorkExperience(e) {
    e.preventDefault();
    console.log(e.target[0].value, "test");
    const id = uuidv4();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const desc = e.target[4].value;

    let newExperience = { id, position, company, start, end, desc };
    setWorkExperience([...workExperience, newExperience]);
    clear(e);
  }

  function clear(e) {
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].value = "";
    }
  }

  function deleteExperience(id) {
    console.log(id);
    setWorkExperience((currentExperience) => {
      return currentExperience.filter((exp) => exp.id !== id);
    });
  }

  function saveExperience(e, id) {
    e.preventDefault();

    let position = e.target[0].value;
    let company = e.target[1].value;
    let start = e.target[2].value;
    let end = e.target[3].value;
    let desc = e.target[4].value;
    let updateExp = { position, company, start, end, desc };
    setWorkExperience(
      workExperience.map((exp) => {
        if (exp.id === id) {
          return { ...exp, ...updateExp };
        } else {
          return exp;
        }
      })
    );
  }

  function reset() {
    const emptyContent = [];
    setFirstName("");
    setLastName("");
    setTitle("");
    setDescription("");
    setNumber("");
    setEmail("");
    setSelectedImage("");
    setWorkExperience(emptyContent);
    setSchoolName("");
    setSchoolDegree("");
  }

  return (
    <>
      <div className="cvForm">
        <Header />
        <PersonalData
          onFirstName={onFirstName}
          onLastName={onLastName}
          onTitle={onTitle}
          onDescription={onDescription}
          onNumber={onNumber}
          onEmail={onEmail}
          onImageSelect={handleImageSelect}
        />
        <WorkExperience
          onSubmit={addWorkExperience}
          deleteExperience={deleteExperience}
          workExperience={workExperience}
          saveExperience={saveExperience}
        />
        <Education 
          onSchoolName={onSchoolName}
          onSchoolDegree={onSchoolDegree}
        />
        <section className="btn-container">
          <button className="btn" onClick={reset}>
            Reset
          </button>
          <ReactToPrint
            trigger={() => {
              return <button className="btn">Print CV</button>;
            }}
            content={() => componentRef}
            documentTitle="Cv"
            pageStyle="print"
          />
        </section>
      </div>
      <div className="cvPreview" ref={(el) => (componentRef = el)}>
        <Preview
          firstName={firstName}
          lastName={lastName}
          title={title}
          description={description}
          number={number}
          email={email}
          selectedImage={selectedImage}
          experience={workExperience}
          schoolName={schoolName}
          schoolDegree={schoolDegree}

        />
      </div>
    </>
  );
}

export default Content;
