import { useNavigate } from 'react-router-dom';
import { ResumeCard } from '@/components/ResumeCard';
import { useResumes } from '@/hooks/useResumes';
import { deleteResume } from '@/utils/api';

const SavedResumes = () => {
  const { resumes, setResumes, error } = useResumes();
  const navigate = useNavigate();

  const handleEditClick = (resumeId) => {
    navigate(`/resume/edit/${resumeId}`);
  };

  const handleDeleteClick = async (resumeId, event) => {
    event.stopPropagation();
    try {
      await deleteResume(resumeId);
      setResumes((prevResumes) =>
        prevResumes.filter((resume) => resume.resumeid !== resumeId)
      );
    } catch (error) {
      console.error('Error deleting resume:', error.message);
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      {resumes.map((resume) => {
        const resumeContent = JSON.parse(resume.content);
        return (
          <ResumeCard
            key={resume.resumeid}
            resumeName={resumeContent.basics.name}
            templateId={resumeContent.selectedTemplate}
            onEdit={() => handleEditClick(resume.resumeid)}
            onDelete={(event) => handleDeleteClick(resume.resumeid, event)}
          />
        );
      })}
    </div>
  );
};
export default SavedResumes;
