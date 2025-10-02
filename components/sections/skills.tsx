import { Code2, Palette } from "lucide-react"

export function Skills() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
      </div>

      <div className="space-y-6">
        {/* Design Skills */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm font-semibold text-gray-700">Design</p>
          </div>

          <div className="flex flex-wrap gap-3 flex-1 pt-1">
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <span className="text-sm text-purple-600">Web Design</span>
            </div>
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <span className="text-sm text-purple-600">Mobile Design</span>
            </div>
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <span className="text-sm text-purple-600">User Experience</span>
            </div>
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <div className="flex flex-col gap-1 text-sm text-purple-600">
                <span>• Wireframing</span>
                <span>• Prototyping</span>
                <span>• Testing</span>
              </div>
            </div>
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <span className="text-sm text-purple-600">Design System</span>
            </div>
          </div>
        </div>

        {/* Development Skills */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm font-semibold text-gray-700">Development</p>
          </div>

          <div className="flex flex-wrap gap-3 flex-1 pt-1">
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <span className="text-sm text-purple-600">React JS</span>
            </div>
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <div className="flex flex-col gap-1 text-sm text-purple-600">
                <span>• Chakra UI</span>
                <span>• Emotion</span>
                <span>• Framer</span>
              </div>
            </div>
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <span className="text-sm text-purple-600">Type script</span>
            </div>
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <span className="text-sm text-purple-600">Next JS</span>
            </div>
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <span className="text-sm text-purple-600">HTML</span>
            </div>
            <div className="px-4 py-3 rounded-lg" style={{ backgroundColor: "#F7F9FC" }}>
              <span className="text-sm text-purple-600">CSS JS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
