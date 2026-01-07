import { Database, BarChart3, Brain, Code, Cloud, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: 'Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Random Forest', 'Neural Networks']
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    items: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'D3.js', 'Plotly']
  },
  {
    icon: Code,
    title: 'Programming',
    items: ['Python', 'R', 'SQL', 'JavaScript', 'Java', 'Scala']
  },
  {
    icon: Database,
    title: 'Data Engineering',
    items: ['PostgreSQL', 'MongoDB', 'Apache Spark', 'Airflow', 'ETL', 'Data Warehousing']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    icon: Sparkles,
    title: 'Specializations',
    items: ['NLP', 'Time Series', 'A/B Testing', 'Deep Learning', 'Computer Vision', 'MLOps']
  }
];

const certifications = [
  'AWS Certified Machine Learning - Specialty',
  'Google Professional Data Engineer',
  'Microsoft Certified: Azure Data Scientist Associate',
  'TensorFlow Developer Certificate',
  'Tableau Desktop Specialist',
  'Deep Learning Specialization - Coursera',
  'Advanced Data Science - IBM',
  'Professional Certificate in Data Science - Harvard'
];

const interests = [
  'Predictive Analytics',
  'Natural Language Processing',
  'Computer Vision',
  'Recommender Systems',
  'Time Series Forecasting',
  'Statistical Modeling',
  'Data Ethics & Privacy',
  'AutoML & MLOps'
];

const services = [
  'Data Analysis & Insights',
  'Machine Learning Solutions',
  'Predictive Modeling',
  'Dashboard Development',
  'Statistical Consulting',
  'Data Pipeline Architecture',
  'ML Model Deployment',
  'Training & Workshops'
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for solving complex data challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Certifications
          </h3>
          <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl py-6">
            <div className="flex animate-scroll">
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 mx-2 bg-gray-50 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Fields of Interest
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" />
                  <span className="text-sm">{interest}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Services
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
