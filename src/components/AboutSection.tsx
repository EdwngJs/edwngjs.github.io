import { Download, Linkedin, Github, Mail, Twitter } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Data Analyst & Data Scientist
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm Alex Chen
              </h1>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I transform complex data into actionable insights that drive business growth.
              With expertise in machine learning, statistical analysis, and data visualization,
              I help organizations make data-driven decisions.
            </p>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Background
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                5+ years of experience in data science and analytics. M.S. in Data Science from Stanford University.
                Previously worked at Fortune 500 companies and innovative startups, delivering impactful solutions
                across finance, healthcare, and e-commerce sectors.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
