import { Link } from 'react-router-dom';
import { logoutUser } from '@/utils/authHelpers';
import { Button } from '@/components/ui/button';

import InstaCVLogo from '@/icons/InstaCVLogo';
import PersonIcon from '@/icons/PersonIcon';
import EducationIcon from '@/icons/EducationIcon';
import WorkIcon from '@/icons/WorkIcon';
import SkillsIcon from '@/icons/SkillsIcon';
import ProjectsIcon from '@/icons/ProjectsIcon';
import SavedIcon from '@/icons/SavedIcon';
import SaveResumeIcon from '@/icons/SaveResumeIcon';
import LogoutIcon from '@/icons/LogoutIcon';
import ClearResumeIcon from '@/icons/ClearResumeIcon';
import DownloadIcon from '@/icons/DownloadIcon';

const Sidebar = ({
  activeSection,
  onSectionChange,
  onSaveResume,
  onClearResume,
  user,
  pdfUrl,
}) => {
  // Function to handle PDF download
  const handleDownloadPdf = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getLinkClass = (section) => {
    const baseClass =
      'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-zinc-900 dark:hover:text-zinc-50';
    return activeSection === section
      ? `${baseClass} text-zinc-900 dark:text-zinc-50`
      : `${baseClass} text-zinc-500 dark:text-zinc-400`;
  };

  return (
    <div className="hidden border-r bg-zinc-100/40 lg:block dark:bg-zinc-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center px-6 lg:border-b">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <InstaCVLogo />
            <span className="">InstaCV</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <button
              className={getLinkClass('basics')}
              onClick={() => onSectionChange('basics')}
            >
              <PersonIcon />
              Personal Information
            </button>
            <button
              className={getLinkClass('education')}
              onClick={() => onSectionChange('education')}
            >
              <EducationIcon />
              Education
            </button>
            <button
              className={getLinkClass('work')}
              onClick={() => onSectionChange('work')}
            >
              <WorkIcon />
              Work Experience
            </button>
            <button
              className={getLinkClass('skills')}
              onClick={() => onSectionChange('skills')}
            >
              <SkillsIcon />
              Skills
            </button>
            <button
              className={getLinkClass('projects')}
              onClick={() => onSectionChange('projects')}
            >
              <ProjectsIcon />
              Projects
            </button>
            <hr className="my-4" />
            <button
              className={getLinkClass('saved')}
              onClick={() => onSectionChange('saved')}
            >
              <SavedIcon />
              Saved Resumes
            </button>
            <hr className="my-4" />
            {user && (
              <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:text-zinc-50 dark:hover:text-zinc-50">
                <img
                  alt="User Avatar"
                  className="rounded-full"
                  height="24"
                  src={user.avatarurl || '/placeholder.svg'}
                  style={{
                    aspectRatio: '24/24',
                    objectFit: 'cover',
                  }}
                  width="24"
                />
                <button className="flex-1">Account</button>
                <button onClick={logoutUser}>
                  <LogoutIcon />
                </button>
              </div>
            )}
            <Button
              className="flex items-center justify-center space-x-2 mt-4"
              variant="outline"
              onClick={onSaveResume}
            >
              <SaveResumeIcon />
              <span>Save Resume</span>
            </Button>
            <Button
              className="flex items-center justify-center space-x-2 mt-4"
              variant="outline"
              onClick={onClearResume}
            >
              <ClearResumeIcon />
              <span className="text-red-600">Clear Resume</span>
            </Button>
            {pdfUrl && (
              <Button
                className="flex items-center justify-center space-x-2 mt-4"
                variant="outline"
                onClick={handleDownloadPdf}
              >
                <DownloadIcon />
                <span>Download PDF</span>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
