import PageLayout from "../components/PageLayout";
import timeGreeting from "../util/time_based_greeting";
import projects from "../data/projects.json";
import experience from "../data/experiences.json";
import skills from "../data/skills.json";
import ProjectsGrid from "../components/ProjectsGrid";
import ExperienceSection from "../components/ExperienceSection";
import Section from "../components/Section";
import SkillSection from "../components/SkillSection";

export default function Home() {
  return (
    <PageLayout>
      <div className="space-y-24">
        {/*Page header + description*/}
        <div>
          <h1 className="text-gray-900 dark:text-white">
            <span className="text-2xl">{timeGreeting()}! My name is</span>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
              <div>Taher Mulla.</div>
            </div>
          </h1>
          <p className="max-w-4xl mt-5 text-lg md:text-xl text-gray-500 dark:text-gray-400">
            I am a MS ‑ Computer Science student in my third semester at
            University of Florida. I am really passionate about software
            development. I love being challenged, I love being blocked on
            something and having to figure my way out. I believe, to succeed in
            life one must always be adapting, learning and jumping out of
            his/her comfort zone.
          </p>
        </div>

        {/*Experience section*/}
        <Section title="Experience">
          <ExperienceSection experiences={experience} />
        </Section>

        {/*Projects section*/}
        <Section title="Projects">
          <ProjectsGrid projects={projects} />
        </Section>

        {/*Skills section*/}
        <Section title="Skills">
          <SkillSection skills={skills} />
        </Section>
      </div>
    </PageLayout>
  );
}
