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
}) {
  return (
    <div>
        <PersonalDataPreview
            firstName={firstName}
            lastName={lastName}
            title={title}
            description={description}
        />
        <WorkExperiencePreview />
        <EducationPreview />
        <SkillsPreview />
    </div>
  )
}

export default Preview