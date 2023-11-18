const initialFormData = {
  selectedTemplate: 1,
  basics: {
    name: '',
    email: '',
    phone: '',
    location: { address: '' },
    website: '',
  },
  education: [
    {
      institution: '',
      location: '',
      studyType: '',
      area: '',
      gpa: '',
      startDate: '',
      endDate: '',
    },
  ],
  work: [
    {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      highlights: [''],
    },
  ],
  skills: [
    {
      name: '',
      keywords: [''],
    },
  ],
  projects: [
    {
      name: '',
      description: '',
      keywords: [''],
      url: '',
    },
  ],
};

export default initialFormData;
