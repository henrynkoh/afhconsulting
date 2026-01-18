import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">
              AFH Success Consultant
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
              Home
            </Link>
            <Link href="/handbook" className="text-gray-700 hover:text-primary-600 font-medium">
              Handbook
            </Link>
            <Link href="/exam" className="text-gray-700 hover:text-primary-600 font-medium">
              Certification Exam
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

