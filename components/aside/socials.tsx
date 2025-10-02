import { Instagram, Dribbble, Twitter, Linkedin } from "lucide-react"

export function Socials() {
  return (
    <div className="mb-6">
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Socials</h2>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center flex-shrink-0">
            <Instagram className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">Instagram</p>
            <p className="text-xs text-gray-900">@chiara.designs</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
            <Dribbble className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">Dribbble</p>
            <p className="text-xs text-gray-900">@chiara-designs</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
            <Twitter className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">Twitter</p>
            <p className="text-xs text-gray-900">@chiaradesigns</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
            <Linkedin className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
            <p className="text-xs text-gray-900">chiara-bianchi-123</p>
          </div>
        </div>
      </div>
    </div>
  )
}
