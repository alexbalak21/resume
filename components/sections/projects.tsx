import { LinkIcon } from "lucide-react"

interface Project {
  id: string
  name: string
  description: string
  url: string
  icon: string
  iconBg: string
}

const projects: Project[] = [
  {
    id: "1",
    name: "Powerful Design System",
    description: "Figma UI Kit and Design System targeting a wide variety of use cases.",
    url: "https://figma.com",
    icon: "🎨",
    iconBg: "bg-gray-900",
  },
  {
    id: "2",
    name: "Modern Website",
    description: "Powerful website + dashboard template for your next Chakra UI project.",
    url: "https://ui-8.net",
    icon: "⚡",
    iconBg: "bg-cyan-500",
  },
]

export function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
        <h2 className="text-2xl font-bold text-gray-900">Latest projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="p-6 rounded-xl" style={{ backgroundColor: "#F7F9FC" }}>
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${project.iconBg}`}
              >
                {project.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
            <a
              href={project.url}
              className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 transition-colors"
            >
              <LinkIcon className="w-4 h-4" />
              <span>{project.url}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
