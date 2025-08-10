'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center px-6">
        <h1 className="text-4xl font-black tracking-tight">Something went wrong</h1>
        <p className="mt-3 text-base text-black/70">An unexpected error occurred. Try again.</p>
        <button onClick={reset} className="inline-block mt-6 border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">Reload</button>
      </div>
    </main>
  )
}


