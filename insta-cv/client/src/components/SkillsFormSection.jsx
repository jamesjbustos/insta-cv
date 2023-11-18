import FormSection from './FormSection';

function SkillsFormSection({ formData, handleInputChange }) {
  // Assuming handling the first skills entry for now
  const skills = formData.skills[0] || {};

  return (
    <>
      <h2 className="text-2xl font-semibold mb-1">Skills</h2>
      <FormSection
        id="skill-name"
        label="Skill Name"
        type="text"
        placeholder="Skill Name (e.g., Programming)"
        value={skills.name || ''}
        onChange={(e) => handleInputChange('skills[0].name', e.target.value)}
      />
      <FormSection
        id="keywords"
        label="Keywords"
        type="text"
        placeholder="Keywords (e.g., Java, JavaScript, Python)"
        value={skills.keywords.join(', ') || ''}
        onChange={(e) => {
          const keywordsArray = e.target.value
            .split(',')
            .map((str) => str.trim());
          handleInputChange('skills[0].keywords', keywordsArray);
        }}
      />
    </>
  );
}

export default SkillsFormSection;
