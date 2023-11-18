import { Link } from 'react-router-dom';
import InstaCVLogo from '@/icons/InstaCVLogo';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between p-6 bg-white dark:bg-zinc-800 bg-opacity-75 backdrop-filter backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center space-x-2">
          <InstaCVLogo />
          <span className="text-2xl font-semibold">InstaCV</span>
        </div>
        <div className="space-x-4">
          <a
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-zinc-900 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
            href={`${API_BASE_URL}/auth/github`}
          >
            Sign In
          </a>
          <Link
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-100"
            href="#"
          >
            Get Started
          </Link>
        </div>
      </nav>
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI-Powered Resume Builder
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                  Create professional resumes effortlessly with our AI-powered
                  tool.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-6 text-center bg-white border-t border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
        <p className="text-zinc-500 dark:text-zinc-400">
          © 2023 InstaCV. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
