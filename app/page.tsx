import { Aside } from "@/components/aside"
import { Main } from "@/components/main"

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">
          <Aside />
          <Main />
        </div>
      </div>
    </main>
  )
}
