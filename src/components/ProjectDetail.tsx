import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { supabase, Project } from '../lib/supabase';
import { MethodologySection } from './MethodologySection';

interface ProjectDetailProps {
  projectId: string;
  onBack:  () => void;
}

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
    window.scrollTo(0, 0);
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', projectId)
        .maybeSingle();

      if (error) throw error;
      setProject(data);
    } catch (error) {
      console.error('Error fetching project:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading project... </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark: bg-gray-900 transition-colors flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Project not found</p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </button>

        <div className="space-y-8">
          <div>
            <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full mb-4">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark: text-gray-300">
              {project.short_description}
            </p>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={project.thumbnail_url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark: text-white rounded-full hover: bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                View Demo
              </a>
            )}
          </div>

          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark: text-white mb-4">
                Project Overview
              </h2>
              <p className="whitespace-pre-line">{project.full_description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.key_achievements && project.key_achievements.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark: text-white mb-4">
                  Key Achievements
                </h2>
                <ul className="space-y-2 list-disc list-inside">
                  {project.key_achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.methodology && (
              <MethodologySection content={project.methodology} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
