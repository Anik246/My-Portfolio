import Hero from './sections/Hero';
import StoryBehindSection from './sections/AboutMe';
import ExperienceSection from './sections/ExperienceSection';
import ProjectSection from './sections/projects';
import PublicationsSection from './sections/PublicationsSection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';
export default function Page() {
  return (
    <main >
      <Hero />
      <StoryBehindSection />
      <ExperienceSection />
      <ProjectSection />
      <EducationSection />
      <PublicationsSection />
      <ContactSection />
    </main>
  );
}