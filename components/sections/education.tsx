interface Education {
  id: string
  institution: string
  degree: string
  date: string
  logo: string
}

const education: Education[] = [
  {
    id: "1",
    institution: "Memorisely",
    degree: "Build a design system",
    date: "Oct 2021",
    logo: "M",
  },
  {
    id: "2",
    institution: "UX academy",
    degree: "UX Design certificate",
    date: "Feb 2020",
    logo: "UX",
  },
  {
    id: "3",
    institution: "Coursera",
    degree: "Usera reasearch course",
    date: "Dec 2019",
    logo: "C",
  },
]

export function Education() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {education.map((edu) => (
          <div key={edu.id} className="rounded-lg p-6 space-y-3" style={{ backgroundColor: "#F7F9FC" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {edu.logo}
              </div>
              <p className="text-base font-medium text-gray-900">{edu.institution}</p>
            </div>

            <p className="text-lg font-semibold text-gray-900">{edu.degree}</p>

            <p className="text-sm text-gray-500">{edu.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
