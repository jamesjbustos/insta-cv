import { stripIndent } from 'common-tags';

const template1 = (data) => {
  // Helper function to join non-empty strings with a separator
  const joinNonEmpty = (strings, separator = '') =>
    strings.filter(Boolean).join(separator);

  // Profile Section
  const profileSection = (basics) => {
    if (!basics) return '';
    const { name, email, phone, location, website } = basics;
    const address = location?.address || '';
    const profileDetails = joinNonEmpty(
      [address, email, phone, website],
      ' · '
    );

    return name || profileDetails
      ? stripIndent`
        %==== Profile ====%
        \\vspace*{-10pt}
        \\begin{center}
          {\\Huge \\textbf{${name || ''}}} % Name in a larger, bold font
          \\rule{\\textwidth}{1pt} % Horizontal line
          {\\normalsize ${profileDetails}} % Contact details in a normal size font
        \\end{center}
        \\vspace{2mm}
      `
      : '';
  };

  // Education Section
  const educationSection = (education) => {
    if (!education || education.length === 0) return '';
    const educationContent = education
      .map((school) => {
        const {
          institution,
          location,
          studyType,
          area,
          gpa,
          startDate,
          endDate,
        } = school;
        return stripIndent`
        \\textbf{${institution || ''}} \\hfill ${location || ''}\\\\
        ${studyType || ''} in ${area || ''}${
          gpa ? `, GPA: ${gpa}` : ''
        } \\hfill ${startDate || ''} - ${endDate || ''}
        \\vspace{2mm}
      `;
      })
      .join('\n');
    return educationContent ? `\\section*{Education}\n${educationContent}` : '';
  };

  // Work Section
  const workSection = (work) => {
    if (!work || work.length === 0) return '';
    const workContent = work
      .map((job) => {
        const { company, position, location, startDate, endDate, highlights } =
          job;
        const highlightsContent =
          highlights && highlights.length > 0
            ? `\\begin{itemize}\n${highlights
                .map((highlight) => `\\item ${highlight}`)
                .join('\n')}\n\\end{itemize}`
            : '';
        return stripIndent`
        \\textbf{${company || ''}} \\hfill ${location || ''}\\\\
        \\textit{${position || ''}} \\hfill ${startDate || ''} - ${
          endDate || 'Present'
        }
        ${highlightsContent}
        \\vspace{2mm}
      `;
      })
      .join('\n');
    return workContent ? `\\section*{Experience}\n${workContent}` : '';
  };

  // Skills Section
  const skillsSection = (skills) => {
    if (!skills || skills.length === 0) return '';
    return stripIndent`
    %==== Skills ====%
    \\section*{Skills}
    \\begin{tabular}{ll}
    ${skills
      .map((skill) => {
        return `${skill.name}: & ${skill.keywords.join(', ')}`;
      })
      .join(' \\\\ ')} % End each table row with a new line in LaTeX
    \\end{tabular}
    \\vspace{2mm}
  `;
  };

  // Projects Section
  const projectsSection = (projects) => {
    if (!projects || projects.length === 0) return '';
    const projectsContent = projects
      .map((project) => {
        const { name, description, keywords, url } = project;
        return stripIndent`
        \\textbf{${name || ''}} \\textit{${
          keywords ? keywords.join(', ') : ''
        }} \\hfill ${url || ''}
        \\begin{itemize}
          \\item ${description || ''}
        \\end{itemize}
        \\vspace{2mm}
      `;
      })
      .join('\n');
    return projectsContent ? `\\section*{Projects}\n${projectsContent}` : '';
  };

  // Construct the complete LaTeX document
  const document = stripIndent`
    \\documentclass[a4paper]{article}
    % ... any other packages or preamble code

    % Remove page numbers
    \\pagestyle{empty}

    \\begin{document}
      ${profileSection(data.basics)}
      ${educationSection(data.education)}
      ${workSection(data.work)}
      ${skillsSection(data.skills)}
      ${projectsSection(data.projects)}
      % ... any other sections
    \\end{document}
  `;

  return document;
};

export default template1;
