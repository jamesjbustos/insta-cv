import { Link } from 'react-router-dom';
import { useUser } from '@/context/userContext';
import InstaCVLogo from '@/icons/InstaCVLogo';
import PersonIcon from '@/icons/PersonIcon';
import EducationIcon from '@/icons/EducationIcon';
import WorkIcon from '@/icons/WorkIcon';
import SkillsIcon from '@/icons/SkillsIcon';
import ProjectsIcon from '@/icons/ProjectsIcon';
import AwardsIcon from '@/icons/AwardsIcon';
import SavedIcon from '@/icons/SavedIcon';
import LogoutIcon from '@/icons/LogoutIcon';

const Sidebar = () => {
  const { user } = useUser();

  const logout = async () => {
    try {
      const url = `http://localhost:3000/auth/logout`;
      const response = await fetch(url, { credentials: 'include' });
      if (!response.ok) {
        throw new Error('Logout failed with status: ' + response.status);
      }
      window.location.href = '/';
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred during logout. Please try again.');
    }
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
            <Link
              className="flex items-center gap-3 rounded-lg bg-zinc-100 px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50"
              href="#"
            >
              <PersonIcon />
              Personal Information
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href="#"
            >
              <EducationIcon />
              Education
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href="#"
            >
              <WorkIcon />
              Work Experience
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href="#"
            >
              <SkillsIcon />
              Skills
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href="#"
            >
              <ProjectsIcon />
              Projects
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href="#"
            >
              <AwardsIcon />
              Awards
            </Link>
            <hr className="my-4" />
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href="#"
            >
              <SavedIcon />
              Saved Resumes
            </Link>
            <hr className="my-4" />
            {user && (
              <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:text-zinc-50 dark:hover:text-zinc-50">
                <img
                  alt="User Avatar"
                  className="rounded-full"
                  height="24"
                  src={user.avatarurl || '/default-avatar.svg'}
                  style={{
                    aspectRatio: '24/24',
                    objectFit: 'cover',
                  }}
                  width="24"
                />
                <Link className="flex-1" to="#">
                  Account
                </Link>
                <Link to="#" onClick={logout}>
                  <LogoutIcon />
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
