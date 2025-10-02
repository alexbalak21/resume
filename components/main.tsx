import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Education } from "@/components/sections/education"
import { Projects } from "@/components/sections/projects"
import { Tools } from "@/components/sections/tools"

export function Main() {
  return (
    <div className="space-y-6">
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Tools />
    </div>
  )
}
