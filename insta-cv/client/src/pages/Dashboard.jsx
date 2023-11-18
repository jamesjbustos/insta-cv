import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchResumeById, saveResume } from '@/utils/api';
import initialFormData from '@/data/initialFormData';

import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import PDFViewer from '@/components/PDFViewer';
import BasicsFormSection from '@/components/BasicsFormSection';
import EducationFormSection from '@/components/EducationFormSection';
import WorkFormSection from '@/components/WorkFormSection';
import SkillsFormSection from '@/components/SkillsFormSection';
import ProjectsFormSection from '@/components/ProjectsFormSection';
import SavedResumes from '@/components/SavedResumes';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Dashboard = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [activeSection, setActiveSection] = useState('basics');
  const [user, setUser] = useState(null);
  const { resumeId } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/auth/login/success`, {
          credentials: 'include',
        });
        const data = await response.json();
        if (data.success && data.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();

    // Fetch resume by ID if available
    if (resumeId) {
      fetchResumeById(resumeId)
        .then((data) => {
          if (data.success) setFormData(JSON.parse(data.resume.content));
        })
        .catch(console.error);
    }
  }, [resumeId]);

  /**
   * Handle form change
   * */

  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);
  };

  const handleNextSection = () => {
    const sectionOrder = ['basics', 'education', 'work', 'skills', 'projects'];
    const currentIndex = sectionOrder.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sectionOrder.length;
    setActiveSection(sectionOrder[nextIndex]);
  };

  const handlePreviousSection = () => {
    const sectionOrder = ['basics', 'education', 'work', 'skills', 'projects'];
    const currentIndex = sectionOrder.indexOf(activeSection);
    const previousIndex =
      (currentIndex - 1 + sectionOrder.length) % sectionOrder.length;
    setActiveSection(sectionOrder[previousIndex]);
  };

  /**
   * Parse user input and update form data
   * */

  const handleInputChange = (path, value) => {
    setFormData((prev) => {
      let fields = path.split('.');
      let lastField = fields.pop();
      let nestedData = fields.reduce((acc, curr, index) => {
        if (curr.includes('[')) {
          // Extract array index and key
          let [arrayKey, arrayIndex] = curr.split(/\[|\]/).filter(Boolean);
          if (!acc[arrayKey]) acc[arrayKey] = [];
          if (!acc[arrayKey][arrayIndex]) acc[arrayKey][arrayIndex] = {};
          return acc[arrayKey][arrayIndex];
        } else {
          if (!acc[curr]) acc[curr] = {};
          return acc[curr];
        }
      }, prev);

      nestedData[lastField] = value;
      return { ...prev };
    });
  };

  /**
   * Handle form submission, PDF generation, and button operations
   */
  const handleClearResume = () => {
    setFormData(initialFormData);
    setPdfUrl(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleSaveResume = async () => {
    try {
      await saveResume(formData);
      console.log('Resume saved successfully');
    } catch (error) {
      console.error('Error saving resume:', error);
    }
  };

  /**
   * Render active section based on sidebar navigation
   */
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'basics':
        return (
          <BasicsFormSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 'education':
        return (
          <EducationFormSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 'work':
        return (
          <WorkFormSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 'skills':
        return (
          <SkillsFormSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 'projects':
        return (
          <ProjectsFormSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 'saved':
        return <SavedResumes />;
      default:
        return null;
    }
  };

  return (
    <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_2fr_3fr]">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        onSaveResume={handleSaveResume}
        onClearResume={handleClearResume}
        user={user}
        pdfUrl={pdfUrl}
      />
      <div className="flex flex-col overflow-auto">
        <main className="min-h-[calc(100vh_-_theme(spacing.16))] flex-1 p-4 md:p-6">
          <div className="flex flex-col items-start gap-4 md:gap-6">
            <div className="flex h-full w-full flex-1 flex-col gap-4 md:gap-8">
              <form
                onSubmit={handleSubmit}
                className="flex h-full w-full flex-1 flex-col gap-4 md:gap-8"
              >
                {renderActiveSection()}
                <button type="submit" style={{ display: 'none' }}></button>
              </form>
            </div>
          </div>
        </main>
        {activeSection !== 'saved' && (
          <div className="sticky bottom-0 bg-white dark:bg-gray-800 z-10 p-4 md:p-6 border-t border-gray-300 dark:border-gray-700">
            <div className="flex justify-between">
              <Button
                onClick={handlePreviousSection}
                className="px-4 py-2"
                variant="outline"
                type="button"
              >
                Prev
              </Button>
              <Button
                className="px-4 py-2"
                variant="outline"
                onClick={handleSubmit}
              >
                Create Resume
              </Button>
              <Button
                onClick={handleNextSection}
                className="px-4 py-2 bg-black hover:bg-gray-800 text-white"
                type="button"
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default Dashboard;
