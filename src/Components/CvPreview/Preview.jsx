/* eslint-disable react/prop-types */
import React from 'react'
import PersonalDataPreview from '../CvPreview/PersonalDataPreview'
import WorkExperiencePreview from '../CvPreview/WorkExperiencePreview'
import EducationPreview from '../CvPreview/EducationPreview'
import SkillsPreview from '../CvPreview/SkillsPreview'

function Preview({
    firstName,
    lastName,
    title,
    description,
    number,
    email,
    position,
    company,
    startDate,
    endDate,
    workDescription,
    selectedImage
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
        <WorkExperiencePreview 
            position={position}
            company={company}
            startDate={startDate}
            endDate={endDate}
            workDescription={workDescription}
        />
        <EducationPreview />
        <SkillsPreview />
    </div>
  )
}

export default Preview