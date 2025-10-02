import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Profile() {
  return (
    <div className="flex flex-col items-center text-center mb-6">
      <Avatar className="w-24 h-24 mb-3">
        <AvatarImage
          src="/images/design-mode/Theme%3DOff%2C%20Variant%3DCover%2C%20Background%3DSolid.png"
          alt="Chiara Bianchi"
        />
        <AvatarFallback>CB</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold text-gray-900 mb-1.5">Chiara Bianchi</h1>
      <p className="text-lg text-purple-600 font-medium mb-5">Product Designer</p>

      {/* Quote */}
      <div className="w-full px-2">
        <p className="text-sm text-gray-600 leading-relaxed mb-2">
          <span className="text-gray-400 text-xl font-serif">&ldquo;</span> Design isn&apos;t finished until somebody is
          using it. <span className="text-gray-400 text-xl font-serif">&rdquo;</span>
        </p>
        <p className="text-xs text-gray-400">Brenda Laurel</p>
      </div>
    </div>
  )
}
