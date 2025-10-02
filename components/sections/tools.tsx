export function Tools() {
  const tools = [
    {
      name: "Figma",
      description: "UI Design, prototyping",
      color: "bg-gradient-to-br from-orange-500 via-purple-500 to-blue-500",
    },
    { name: "Maze", description: "Product research", color: "bg-blue-500" },
    { name: "Spline", description: "3D Design", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { name: "Zeplin", description: "Design workspace", color: "bg-orange-400" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
        <h2 className="text-2xl font-bold text-gray-900">Tools</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center text-center p-6 rounded-lg"
            style={{ backgroundColor: "#F7F9FC" }}
          >
            <div
              className={`w-16 h-16 rounded-xl ${tool.color} flex items-center justify-center text-white font-bold text-2xl mb-3`}
            >
              {tool.name[0]}
            </div>
            <p className="font-semibold mb-1" style={{ color: "#2E2E48" }}>
              {tool.name}
            </p>
            <p className="text-xs" style={{ color: "#79819A" }}>
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
