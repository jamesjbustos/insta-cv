import FormSection from './FormSection';

function EducationFormSection({ formData, handleInputChange }) {
  // Assuming handling the first education entry for now
  const education = formData.education[0] || {};

  return (
    <>
      <h2 className="text-2xl font-semibold mb-1">Education</h2>
      <FormSection
        id="institution"
        label="Institution"
        type="text"
        placeholder="Institution Name"
        value={education.institution || ''}
        onChange={(e) =>
          handleInputChange('education[0].institution', e.target.value)
        }
      />
      <FormSection
        id="education-location"
        label="Location"
        type="text"
        placeholder="Location"
        value={education.location || ''}
        onChange={(e) =>
          handleInputChange('education[0].location', e.target.value)
        }
      />
      <FormSection
        id="studyType"
        label="Study Type"
        type="text"
        placeholder="Study Type (e.g., Bachelors, Masters)"
        value={education.studyType || ''}
        onChange={(e) =>
          handleInputChange('education[0].studyType', e.target.value)
        }
      />
      <FormSection
        id="area"
        label="Area of Study"
        type="text"
        placeholder="Area of Study"
        value={education.area || ''}
        onChange={(e) => handleInputChange('education[0].area', e.target.value)}
      />
      <FormSection
        id="gpa"
        label="GPA"
        type="text"
        placeholder="GPA"
        value={education.gpa || ''}
        onChange={(e) => handleInputChange('education[0].gpa', e.target.value)}
      />
      <FormSection
        id="startDate"
        label="Start Date"
        type="date"
        placeholder="Start Date"
        value={education.startDate || ''}
        onChange={(e) =>
          handleInputChange('education[0].startDate', e.target.value)
        }
      />
      <FormSection
        id="endDate"
        label="End Date"
        type="date"
        placeholder="End Date"
        value={education.endDate || ''}
        onChange={(e) =>
          handleInputChange('education[0].endDate', e.target.value)
        }
      />
    </>
  );
}

export default EducationFormSection;
