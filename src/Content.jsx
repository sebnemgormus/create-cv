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

  return (
    <>
      <div className='cvForm'>
        <Header />
        <PersonalData 
          onFirstName={onFirstName}
          onLastName={onLastName}
          onTitle={onTitle}
          onDescription={onDescription}
        />
        <WorkExperience />
        <Education />
        <Skills />

      </div>
      <div className='cvPreview'>
        <Preview
          firstName={firstName}
          lastName={lastName}
          title={title}
          description={description}
        
        />
      </div>
    </>
  )
}

export default Content
