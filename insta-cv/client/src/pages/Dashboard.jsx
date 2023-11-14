import Sidebar from '@/components/Sidebar';
import FormSection from '@/components/FormSection';
import PDFViewer from '@/components/PDFViewer';
import useAuth from '@/hooks/useAuth';

const Dashboard = () => {
  useAuth();

  return (
    <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_2fr_3fr]">
      <Sidebar />
      <div className="flex flex-col overflow-auto">
        <main className="min-h-[calc(100vh_-_theme(spacing.16))] flex-1 p-4 md:p-6">
          <div className="flex flex-col items-start gap-4 md:gap-6">
            <div className="flex h-full w-full flex-1 flex-col gap-4 md:gap-8">
              <FormSection
                id="email"
                label="Email"
                type="email"
                placeholder="Email"
              />
              <FormSection
                id="education"
                label="Education"
                placeholder="Education"
              />
              <FormSection
                id="experience"
                label="Work Experience"
                placeholder="Work Experience"
              />
              <FormSection id="skills" label="Skills" placeholder="Skills" />
              <FormSection
                id="projects"
                label="Projects"
                placeholder="Projects"
              />
              <FormSection id="awards" label="Awards" placeholder="Awards" />
            </div>
          </div>
        </main>
      </div>
      <PDFViewer />
    </div>
  );
};

export default Dashboard;
