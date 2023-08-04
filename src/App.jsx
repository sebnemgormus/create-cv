import './App.css'
import Header from  './Components/CvForm/Header'
import PersonalData from  './Components/CvForm/PersonalData'
import WorkExperience from  './Components/CvForm/WorkExperience'
import Skills from  './Components/CvForm/Skills'
import Education from  './Components/CvForm/Education'
import CvPreview from './Components/CvPreview/CvPreview'
import './styles/cv-form.css';
import './styles/normalize.css';

function App() {

  return (
    <>
      <div className='cvForm'>
        <Header />
        <PersonalData />
        <WorkExperience />
        <Skills />
        <Education />

        
      </div>
      <div className='cvPreview'>
        <CvPreview /> 
      </div>
    </>
  )
}

export default App
