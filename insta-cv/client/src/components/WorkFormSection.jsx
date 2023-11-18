import FormSection from './FormSection';

function WorkFormSection({ formData, handleInputChange }) {
  // Assuming handling the first work entry for now
  const work = formData.work[0] || {};

  return (
    <>
      <h2 className="text-2xl font-semibold mb-1">Work</h2>
      <FormSection
        id="company"
        label="Company"
        type="text"
        placeholder="Company Name"
        value={work.company || ''}
        onChange={(e) => handleInputChange('work[0].company', e.target.value)}
      />
      <FormSection
        id="position"
        label="Position"
        type="text"
        placeholder="Position"
        value={work.position || ''}
        onChange={(e) => handleInputChange('work[0].position', e.target.value)}
      />
      <FormSection
        id="work-location"
        label="Location"
        type="text"
        placeholder="Location"
        value={work.location || ''}
        onChange={(e) => handleInputChange('work[0].location', e.target.value)}
      />
      <FormSection
        id="startDate"
        label="Start Date"
        type="date"
        placeholder="Start Date"
        value={work.startDate || ''}
        onChange={(e) => handleInputChange('work[0].startDate', e.target.value)}
      />
      <FormSection
        id="endDate"
        label="End Date"
        type="date"
        placeholder="End Date"
        value={work.endDate || ''}
        onChange={(e) => handleInputChange('work[0].endDate', e.target.value)}
      />
      <FormSection
        id="highlights"
        label="Highlights"
        type="text"
        placeholder="Key Achievements or Responsibilities"
        value={work.highlights.join(', ') || ''}
        onChange={(e) => {
          const highlightsArray = e.target.value
            .split(',')
            .map((str) => str.trim());
          handleInputChange('work[0].highlights', highlightsArray);
        }}
      />
    </>
  );
}

export default WorkFormSection;
