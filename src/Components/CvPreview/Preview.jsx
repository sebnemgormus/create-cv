/* eslint-disable react/prop-types */
import PersonalDataPreview from '../CvPreview/PersonalDataPreview'
import WorkExperiencePreview from '../CvPreview/WorkExperiencePreview'
import EducationPreview from '../CvPreview/EducationPreview'

function Preview({
    firstName,
    lastName,
    title,
    description,
    number,
    email,
    experience,
    deleteExperience,
    editExperience,
    selectedImage,
    schoolName,
    schoolDegree,

 
}) {
  return (
    <div>
        <PersonalDataPreview
            firstName={firstName}
            lastName={lastName}
            title={title}
            description={description}
            number={number}
            email={email}
            selectedImage={selectedImage}
        />
      {experience.map((exp) => {
        
        return (
          <WorkExperiencePreview
            key={exp.id}
            deleteExperience={deleteExperience}
            editExperience={editExperience}
            id={exp.id}
            position={exp.position}
            company={exp.company}
            start={exp.start}
            end={exp.end}
            desc={exp.desc}
          />
        );
      })}
        <EducationPreview 
            schoolName={schoolName}
            schoolDegree={schoolDegree}
        />
    </div>
  )
}

export default Preview