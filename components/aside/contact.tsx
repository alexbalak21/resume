import { Mail, Globe, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <div className="mb-6">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full"
            style={{ backgroundColor: "#E2E6EE" }}
          >
            <Mail className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-1">Email</p>
            <p className="text-sm text-gray-900 font-medium break-all">chiara.bianchi@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full"
            style={{ backgroundColor: "#E2E6EE" }}
          >
            <Globe className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-1">Website</p>
            <p className="text-sm text-gray-900 font-medium break-all">https://aldedesign.it</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full"
            style={{ backgroundColor: "#E2E6EE" }}
          >
            <Phone className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-1">Phone</p>
            <p className="text-sm text-gray-900 font-medium">(+39) 333 0123 765</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full"
            style={{ backgroundColor: "#E2E6EE" }}
          >
            <MapPin className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-1">Address</p>
            <p className="text-sm text-gray-900 font-medium">Bologna, Italy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
