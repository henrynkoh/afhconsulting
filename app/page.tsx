import Link from 'next/link'

export default function Home() {
  const modules = [
    {
      id: 1,
      title: 'The Business Foundation & Profit Maximization',
      description: 'Understanding the thin margins of Medicaid vs. high-profit potential of Private Pay. Goal setting and scalability mindset.',
      href: '/module-1',
    },
    {
      id: 2,
      title: 'Strategic Site Selection (The "Where" of Wealth)',
      description: 'Location is the single biggest factor. Learn wealth mapping, market analysis, and identifying high-acuity gaps.',
      href: '/module-2',
    },
    {
      id: 3,
      title: 'Pricing Strategies & Competitive Positioning',
      description: 'Moving from flat-rate to level-of-care pricing. Competitive positioning and psychological pricing strategies.',
      href: '/module-3',
    },
    {
      id: 4,
      title: 'Marketing to the "Golden" Resident',
      description: 'How to find and close Private Pay clients. Building referral networks and conducting premium tours.',
      href: '/module-4',
    },
    {
      id: 5,
      title: 'The "Cookbook" for Disclosures & Billing',
      description: 'Practical administration to ensure owners get paid. Disclosure forms, admission fees, and invoicing strategies.',
      href: '/module-5',
    },
    {
      id: 6,
      title: 'Long-Term Financial Health & Compliance',
      description: 'Protecting the business from audits and Medicaid conversion traps. Managing prepaid charges and rate increases.',
      href: '/module-6',
    },
  ]

  const resources = [
    { title: 'New Resident Financial Intake Checklist', href: '/checklist' },
    { title: 'Market Analysis Template', href: '/market-analysis' },
    { title: 'Marketing Scripts for Hospital Discharge Planners', href: '/marketing-scripts' },
    { title: 'Luxury Menu & Activities Schedule', href: '/menu-activities' },
    { title: 'Certification Exam', href: '/exam' },
    { title: 'Consultant Handbook', href: '/handbook' },
  ]

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            The AFH Financial Masterclass
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive curriculum designed to train AFH Success Consultants. 
            Guide prospective owners away from trial and error toward a high-margin, 
            professionalized business model.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Curriculum Modules
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={module.href}
                className="card hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-xl">
                      {module.id}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <span className="text-primary-600 font-semibold hover:text-primary-700">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Resources & Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="block p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <span className="text-gray-900 font-semibold">{resource.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-xl mb-6">
            Start with Module 1 to build your foundation in AFH business strategy
          </p>
          <Link href="/module-1" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block">
            Start Module 1
          </Link>
        </div>
      </div>
    </div>
  )
}

