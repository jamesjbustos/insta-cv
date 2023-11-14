// template1/index.js
import { stripIndent, source } from 'common-tags';

const template1 = (data) => {
  // Define individual section generators
  const profileSection = (basics) => {
    if (!basics) return '';
    const { name, email, phone, location, website } = basics;
    const address = location?.address || '';
    let profileLines = name ? `\\Huge \\scshape {${name}}` : '';
    profileLines += `\\\\${[address, email, phone, website]
      .filter(Boolean)
      .join(' $\\cdot$ ')}\\\\`;
    return stripIndent`
      %==== Profile ====%
      \\vspace*{-10pt}
      \\begin{center}
        ${profileLines}
      \\end{center}
      \\vspace{2mm}
    `;
  };

  const educationSection = (education) => {
    if (!education || education.length === 0) return '';
    return stripIndent`
      %==== Education ====%
      \\section*{Education}
      ${education
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
          \\textbf{${institution}} \\hfill ${location}\\\\
          ${studyType} in ${area}, GPA: ${gpa} \\hfill ${startDate} - ${endDate}
          \\vspace{2mm}
        `;
        })
        .join('\n')}
    `;
  };

  const workSection = (work) => {
    if (!work || work.length === 0) return '';
    return stripIndent`
      %==== Work Experience ====%
      \\section*{Experience}
      ${work
        .map((job) => {
          const {
            company,
            position,
            location,
            startDate,
            endDate,
            highlights,
          } = job;
          return stripIndent`
          \\textbf{${company}} \\hfill ${location}\\\\
          \\textit{${position}} \\hfill ${startDate} - ${endDate || 'Present'}
          \\begin{itemize}
            ${highlights.map((highlight) => `\\item ${highlight}`).join('\n')}
          \\end{itemize}
          \\vspace{2mm}
        `;
        })
        .join('\n')}
    `;
  };

  const skillsSection = (skills) => {
    if (!skills || skills.length === 0) return '';
    return stripIndent`
      %==== Skills ====%
      \\section*{Skills}
      \\begin{tabular}{ll}
      ${skills
        .map((skill) => {
          const { name, keywords } = skill;
          return `${name}: & ${keywords.join(', ')} \\\\`;
        })
        .join('\n')}
      \\end{tabular}
      \\vspace{2mm}
    `;
  };

  const projectsSection = (projects) => {
    if (!projects || projects.length === 0) return '';
    return stripIndent`
      %==== Projects ====%
      \\section*{Projects}
      ${projects
        .map((project) => {
          const { name, description, keywords, url } = project;
          return stripIndent`
          \\textbf{${name}} \\textit{${keywords.join(', ')}} \\hfill ${
            url || ''
          }
          \\begin{itemize}
            \\item ${description}
          \\end{itemize}
          \\vspace{2mm}
        `;
        })
        .join('\n')}
    `;
  };

  // Generate sections using the defined methods
  const profile = profileSection(data.basics);
  const education = educationSection(data.education);
  const work = workSection(data.work);
  const skills = skillsSection(data.skills);
  const projects = projectsSection(data.projects);

  // Construct the complete LaTeX document
  const document = stripIndent`
    \\documentclass[a4paper]{article}
    % ... any other packages or preamble code

    \\begin{document}
    ${profile}
    ${education}
    ${work}
    ${skills}
    ${projects}
    % ... any other sections
    \\end{document}
  `;

  return document;
};

export default template1;
