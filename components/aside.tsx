import { Profile } from "./aside/profile"
import { Contact } from "./aside/contact"
import { Socials } from "./aside/socials"
import { Languages } from "./aside/languages"

export function Aside() {
  return (
    <aside className="w-full bg-[#F7F9FC] rounded-lg shadow-sm p-6">
      {/* Profile Section */}
      <Profile />

      <div className="w-50 mx-auto h-px bg-gray-200 mb-6" />

      {/* Contact Section */}
      <Contact />

      <div className="w-50 mx-auto h-px bg-gray-200 mb-6" />

      {/* Socials Section */}
      <Socials />

      <div className="w-50 mx-auto h-px bg-gray-200 mb-6" />

      {/* Languages Section */}
      <Languages />
    </aside>
  )
}
