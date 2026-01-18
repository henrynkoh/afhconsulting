import Link from 'next/link'

interface ModuleLayoutProps {
  children: React.ReactNode
  moduleNumber: number
  moduleTitle: string
  nextModuleHref?: string
  prevModuleHref?: string
}

export default function ModuleLayout({
  children,
  moduleNumber,
  moduleTitle,
  nextModuleHref,
  prevModuleHref,
}: ModuleLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
          ← Back to Home
        </Link>
        <div className="flex items-center mb-4">
          <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
            Module {moduleNumber}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{moduleTitle}</h1>
      </div>

      <div className="prose-custom">
        {children}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
        {prevModuleHref ? (
          <Link
            href={prevModuleHref}
            className="btn-secondary"
          >
            ← Previous Module
          </Link>
        ) : (
          <div></div>
        )}
        {nextModuleHref ? (
          <Link
            href={nextModuleHref}
            className="btn-primary"
          >
            Next Module →
          </Link>
        ) : (
          <Link
            href="/exam"
            className="btn-primary"
          >
            Take Certification Exam →
          </Link>
        )}
      </div>
    </div>
  )
}

