import { useState } from 'react'
import Header from  './Components/CvForm/Header'
import PersonalData from  './Components/CvForm/PersonalData'
import WorkExperience from  './Components/CvForm/WorkExperience'
import Skills from  './Components/CvForm/Skills'
import Education from  './Components/CvForm/Education'
import './styles/cv-form.css';
import './styles/normalize.css';
import Preview from './Components/CvPreview/Preview'


function Content() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('')
  const [company, setCompany] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [workDescription, setWorkDescription] = useState('')
  const [selectedImage, setSelectedImage] = useState(null);


  function onFirstName(event){
    setFirstName(event.target.value)
  }

  function onLastName(event) {
    setLastName(event.target.value)
  }

  function onTitle(event) {
    setTitle(event.target.value)
  }

  function onDescription(event) {
    setDescription(event.target.value)
  }

  function onNumber(event) {
    setNumber(event.target.value)
  }

  function onEmail(event) {
    setEmail(event.target.value)
  }

  function onPosition(event) {
    setPosition(event.target.value)
  }

  function onCompany(event) {
    setCompany(event.target.value)
  }

  function onStartDate(event) {
    setStartDate(event.target.value)
  }

  function onEndDate(event) {
    setEndDate(event.target.value)
  }

  function onWorkDescription(event) {
    setWorkDescription(event.target.value)
  }

  function handleImageSelect(selectedImage) {
    setSelectedImage(selectedImage);
    console.log(selectedImage, "selected img")
  }
  

  return (
    <>
      <div className='cvForm'>
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
          onPosition={onPosition}
          onCompany={onCompany}
          onStartDate={onStartDate}
          onEndDate={onEndDate}
          onWorkDescription={onWorkDescription}
        />
        <Education />
        <Skills />

      </div>
      <div className='cvPreview'>
        <Preview
          firstName={firstName}
          lastName={lastName}
          title={title}
          description={description}
          number={number}
          email={email}
          position={position}
          company={company}
          startDate={startDate}
          endDate={endDate}
          workDescription={workDescription}
          selectedImage={selectedImage}
        />
      </div>
    </>
  )
}

export default Content
