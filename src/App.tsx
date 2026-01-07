import { useState } from 'react';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  if (selectedProjectId) {
    return (
      <ProjectDetail
        projectId={selectedProjectId}
        onBack={() => setSelectedProjectId(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onViewProject={setSelectedProjectId} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
