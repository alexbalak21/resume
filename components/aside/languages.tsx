export function Languages() {
  return (
    <div>
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Languages</h2>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-5 flex-shrink-0 overflow-hidden rounded">
            <svg viewBox="0 0 3 2" className="w-full h-full">
              <rect width="1" height="2" fill="#009246" />
              <rect x="1" width="1" height="2" fill="#fff" />
              <rect x="2" width="1" height="2" fill="#ce2b37" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-900">Italian</p>
            <p className="text-xs text-gray-500">Native</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-5 flex-shrink-0 overflow-hidden rounded">
            <svg viewBox="0 0 27 18" className="w-full h-full">
              <rect width="27" height="2" y="0" fill="#0D5EAF" />
              <rect width="27" height="2" y="2" fill="#fff" />
              <rect width="27" height="2" y="4" fill="#0D5EAF" />
              <rect width="27" height="2" y="6" fill="#fff" />
              <rect width="27" height="2" y="8" fill="#0D5EAF" />
              <rect width="27" height="2" y="10" fill="#fff" />
              <rect width="27" height="2" y="12" fill="#0D5EAF" />
              <rect width="27" height="2" y="14" fill="#fff" />
              <rect width="27" height="2" y="16" fill="#0D5EAF" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-900">Greek</p>
            <p className="text-xs text-gray-500">Native</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-5 flex-shrink-0 overflow-hidden rounded">
            <svg viewBox="0 0 60 30" className="w-full h-full">
              <rect width="60" height="30" fill="#012169" />
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
              <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10" />
              <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-900">English</p>
            <p className="text-xs text-gray-500">Professional working</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-5 flex-shrink-0 overflow-hidden rounded">
            <svg viewBox="0 0 3 2" className="w-full h-full">
              <rect width="3" height="2" fill="#c60b1e" />
              <rect width="3" height="0.67" y="0.67" fill="#ffc400" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-900">Spanish</p>
            <p className="text-xs text-gray-500">Elementary</p>
          </div>
        </div>
      </div>
    </div>
  )
}
