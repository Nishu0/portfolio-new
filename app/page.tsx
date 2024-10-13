import AboutMeAndExperience from "@/components/about"
import BlogSection from "@/components/blog-section"
import Contact from "@/components/contact"
import ExperienceSection from "@/components/experience-section"
import InfiniteImageCarousel from "@/components/infinite-carousel"
import Intro from "@/components/intro"
import SkillSection from "@/components/skill-section"

export default function Home() {
  return (
    <>
      <section>
        <Intro />
        <InfiniteImageCarousel />
        <AboutMeAndExperience />
        <div className="flex flex-col items-center mb-20 space-y-40">
          <BlogSection />
          <SkillSection />
          <ExperienceSection />
          <Contact />
        </div>
      </section>
    </>
  )
}
