import { useEffect, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { supabase, Project } from '../lib/supabase';

interface ProjectsSectionProps {
  onViewProject: (projectId: string) => void;
}

export function ProjectsSection({ onViewProject }: ProjectsSectionProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  if (loading) {
    return (
      <section id="work" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-gray-600 dark:text-gray-400">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in data science and analytics
          </p>
        </div>

        <div className="space-y-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
                  <img
                    src={project.thumbnail_url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  {project.category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.short_description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    onClick={() => onViewProject(project.id)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    View Full Report
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                  )}

                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                      aria-label="View demo"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              {showAll ? 'Show Less' : `View All Projects (${projects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
