import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center px-6">
        <h1 className="text-4xl font-black tracking-tight">Page not found</h1>
        <p className="mt-3 text-base text-black/70">The page you’re looking for doesn’t exist or was moved.</p>
        <Link href="/" className="inline-block mt-6 border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">Go home</Link>
      </div>
    </main>
  )
}


