import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";

export default function HomePage() {
  return (
    <div className="container pt-4">
      <section className="features-icons bg-light text-center m-4">
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
      </section>
    </div>
  );
}
