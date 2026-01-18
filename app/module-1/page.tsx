import ModuleLayout from '@/components/ModuleLayout'

export default function Module1() {
  return (
    <ModuleLayout
      moduleNumber={1}
      moduleTitle="The Business Foundation & Profit Maximization"
      nextModuleHref="/module-2"
    >
      <div className="card bg-primary-50 border-l-4 border-primary-600 mb-8">
        <h3 className="text-xl font-bold text-primary-900 mb-2">Module Goal</h3>
        <p className="text-primary-800">
          Before looking for a house, the owner must define the "Why" and the "How Much." 
          This module establishes the financial reality check and goal-setting foundation.
        </p>
      </div>

      <h2>Financial Reality Check</h2>
      <p>
        Understanding the thin margins of a 100% Medicaid home vs. the high-profit potential 
        of Private Pay is the first critical lesson. Many prospective owners enter the AFH 
        business with a caregiving heart but without understanding the financial mechanics 
        that determine long-term viability.
      </p>

      <div className="card my-8">
        <h3 className="text-2xl font-semibold mb-4">Medicaid vs. Private Pay Comparison</h3>
        <table>
          <thead>
            <tr>
              <th>Factor</th>
              <th>100% Medicaid Home</th>
              <th>Private Pay Heavy Home</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Average Monthly Rate</strong></td>
              <td>$4,000 - $4,500</td>
              <td>$8,500 - $12,000</td>
            </tr>
            <tr>
              <td><strong>Revenue per 6-Bed Home</strong></td>
              <td>$24,000 - $27,000</td>
              <td>$51,000 - $72,000</td>
            </tr>
            <tr>
              <td><strong>Staffing Flexibility</strong></td>
              <td>Minimal (1:6 ratio typical)</td>
              <td>Premium (1:3 ratio possible)</td>
            </tr>
            <tr>
              <td><strong>Net Monthly Profit</strong></td>
              <td>$3,000 - $5,000</td>
              <td>$15,000 - $22,000</td>
            </tr>
            <tr>
              <td><strong>Vulnerability</strong></td>
              <td>High (state budget cuts)</td>
              <td>Low (market-driven pricing)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Goal Setting: Calculating the Owner's Draw</h2>
      <p>
        How much profit does the owner need to justify the 24/7 responsibility? This is not 
        just about covering expenses—it's about creating a sustainable business that rewards 
        the owner for their investment of time, capital, and emotional labor.
      </p>

      <div className="card my-8 bg-yellow-50 border-l-4 border-yellow-500">
        <h4 className="font-semibold text-yellow-900 mb-2">Consultant Pro-Tip</h4>
        <p className="text-yellow-800">
          The owner's draw should be calculated as: <strong>Desired Annual Income ÷ 12 months</strong>. 
          If an owner needs $120,000/year to justify leaving their current job, they need 
          $10,000/month in profit after all expenses. This number becomes the target for 
          the business model.
        </p>
      </div>

      <h3>Case Study: The $4,000 vs. $8,500 Resident</h3>
      <p>
        Let's analyze the net profit after staffing costs for two different resident profiles:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="card bg-red-50">
          <h4 className="font-semibold text-red-900 mb-3">Medicaid Resident ($4,000/month)</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Monthly Rate:</strong> $4,000</li>
            <li><strong>Staffing Cost:</strong> $2,500 (1 caregiver for 6 residents)</li>
            <li><strong>Food & Supplies:</strong> $400</li>
            <li><strong>Utilities & Maintenance:</strong> $300</li>
            <li><strong>Net Profit:</strong> $800</li>
          </ul>
        </div>
        <div className="card bg-green-50">
          <h4 className="font-semibold text-green-900 mb-3">Private Pay Resident ($8,500/month)</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Monthly Rate:</strong> $8,500</li>
            <li><strong>Staffing Cost:</strong> $3,500 (premium 1:3 ratio)</li>
            <li><strong>Food & Supplies:</strong> $600 (premium quality)</li>
            <li><strong>Utilities & Maintenance:</strong> $400</li>
            <li><strong>Net Profit:</strong> $4,000</li>
          </ul>
        </div>
      </div>

      <p className="font-semibold text-lg mb-8">
        The Private Pay resident generates <strong>5x the profit</strong> of the Medicaid resident 
        for similar care requirements.
      </p>

      <h2>The Scalability Mindset</h2>
      <p>
        Moving from "Caregiver-Owner" to "Business-Administrator" is essential for long-term success. 
        The owner who remains stuck in the caregiver role will burn out and limit their earning potential.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Caregiver-Owner vs. Business-Administrator</h3>
        <table>
          <thead>
            <tr>
              <th>Caregiver-Owner Mindset</th>
              <th>Business-Administrator Mindset</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Works 24/7 in the home</td>
              <td>Hires qualified staff and manages systems</td>
            </tr>
            <tr>
              <td>Accepts any resident who needs care</td>
              <td>Selects residents based on financial viability</td>
            </tr>
            <tr>
              <td>Charges flat rate regardless of care level</td>
              <td>Implements tiered pricing based on acuity</td>
            </tr>
            <tr>
              <td>Reacts to problems as they arise</td>
              <td>Proactively builds systems and processes</td>
            </tr>
            <tr>
              <td>Views business as "helping people"</td>
              <td>Views business as "providing premium service for premium pay"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Takeaways</h2>
      <ul className="list-disc space-y-3 mb-8">
        <li><strong>Profit is not optional:</strong> A business that doesn't generate sufficient profit 
        will fail, leaving residents without care.</li>
        <li><strong>Private Pay is the path to sustainability:</strong> While Medicaid serves an 
        important need, it cannot be the foundation of a profitable business.</li>
        <li><strong>Goal-setting comes first:</strong> Define the owner's draw target before selecting 
        a location or accepting residents.</li>
        <li><strong>Business mindset is essential:</strong> Transition from caregiver to administrator 
        to build a scalable, profitable operation.</li>
      </ul>

      <div className="card bg-blue-50 border-l-4 border-blue-500 mt-8">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Next Steps</h3>
        <p className="text-blue-800">
          Once the owner has defined their profit goals, they're ready to learn about strategic 
          site selection—the single biggest factor in attracting Private Pay residents. 
          Proceed to <strong>Module 2: Strategic Site Selection</strong>.
        </p>
      </div>
    </ModuleLayout>
  )
}

