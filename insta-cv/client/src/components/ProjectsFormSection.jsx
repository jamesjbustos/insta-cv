import FormSection from './FormSection';

function ProjectsFormSection({ formData, handleInputChange }) {
  // Assuming handling the first projects entry for now
  const project = formData.projects[0] || {};

  return (
    <>
      <h2 className="text-2xl font-semibold mb-1">Projects</h2>
      <FormSection
        id="project-name"
        label="Project Name"
        type="text"
        placeholder="Project Name"
        value={project.name || ''}
        onChange={(e) => handleInputChange('projects[0].name', e.target.value)}
      />
      <FormSection
        id="description"
        label="Description"
        type="text"
        placeholder="Project Description"
        value={project.description || ''}
        onChange={(e) =>
          handleInputChange('projects[0].description', e.target.value)
        }
      />
      <FormSection
        id="project-keywords"
        label="Keywords"
        type="text"
        placeholder="Keywords (e.g., React, Node.js)"
        value={project.keywords.join(', ') || ''}
        onChange={(e) => {
          const keywordsArray = e.target.value
            .split(',')
            .map((str) => str.trim());
          handleInputChange('projects[0].keywords', keywordsArray);
        }}
      />
      <FormSection
        id="url"
        label="URL"
        type="url"
        placeholder="Project URL"
        value={project.url || ''}
        onChange={(e) => handleInputChange('projects[0].url', e.target.value)}
      />
    </>
  );
}

export default ProjectsFormSection;
