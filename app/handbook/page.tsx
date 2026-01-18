import Link from 'next/link'

export default function Handbook() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          The AFH Success Consultant Handbook
        </h1>
        <p className="text-lg text-gray-600">
          A Practical Guide to Operating Financially Sound & Long-Term Successful Adult Family Homes
        </p>
      </div>

      <div className="prose-custom">
        <div className="card mb-8">
          <h2 className="text-3xl font-semibold mb-4">I. Strategic Business Foundation</h2>
          <p className="mb-4">
            The goal is to transition from a "care-centered" mindset to a "profit-centered" model 
            that allows for superior care.
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">1. The Profit Maximization Formula</h3>
          <p className="mb-4">
            Consultants must teach owners to calculate their "Break-Even vs. Thrive" numbers early.
          </p>
          <ul className="list-disc space-y-2 ml-6 mb-4">
            <li><strong>Medicaid Model:</strong> High volume, low margin. Vulnerable to state budget cuts.</li>
            <li><strong>Private Pay Model:</strong> Lower volume (selective), high margin. Allows for 
            higher staffing and better owner quality of life.</li>
          </ul>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-4">
            <p className="text-yellow-800">
              <strong>Key Insight:</strong> A $4,000/month Medicaid resident generates approximately 
              $800/month profit, while a $8,500/month Private Pay resident generates $4,000/month 
              profit—5x the revenue for similar care requirements.
            </p>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-3xl font-semibold mb-4">II. Site Selection: The "Wealth Mapping" Protocol</h2>
          <p className="mb-4">
            Financial success is 50% location. Do not buy a property until the following analysis is complete.
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">The Affluence Radius</h3>
          <p className="mb-4">
            Identify zip codes where the median home value is in the top 10% of the county. 
            High-wealth families live near high-wealth homes.
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">The Competitor Grid</h3>
          <p className="mb-4">
            Audit the nearest 5 homes. If they all accept Medicaid, the "Private Pay" market is 
            starving for a premium option.
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">High-Acuity Suitability</h3>
          <p className="mb-4">
            Choose properties that allow for easy "Total Care" (no stairs, wide halls, walk-in showers).
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-800">
              <strong>The 5-Mile Rule:</strong> Private-pay families (usually adult children aged 45–65) 
              typically choose a home within 5 miles of their own residence or office. This proximity 
              allows for regular visits, quick emergency response, and peace of mind.
            </p>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-3xl font-semibold mb-4">III. Pricing Strategy & Market Positioning</h2>
          <p className="mb-4">
            Pricing should be "Offensive" (value-driven) rather than "Defensive" (reactionary).
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">The "Good-Better-Best" Model</h3>
          <table className="mb-4">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Profile</th>
                <th>Suggested Daily Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Boutique Suite</td>
                <td>Private room, shared bath, Level 1 care.</td>
                <td>$230 - $260</td>
              </tr>
              <tr>
                <td>Executive Suite</td>
                <td>Private room, private bath, Level 2-3 care.</td>
                <td>$280 - $350</td>
              </tr>
              <tr>
                <td>Premium Care</td>
                <td>High Acuity, 1:1 feeding, Hospice, RN on site.</td>
                <td>$400+</td>
              </tr>
            </tbody>
          </table>
          
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-green-800">
              <strong>Daily Rate Formula:</strong> (Monthly Rate × 12) ÷ 365 = Daily Rate
              <br />
              This accounts for months with 31 days and simplifies prorated billing.
            </p>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-3xl font-semibold mb-4">IV. The Marketing & Sales "Cookbook"</h2>
          <p className="mb-4">
            How to attract and close the "Golden Resident" (Private Pay).
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">1. The Referral Engine</h3>
          <ul className="list-disc space-y-2 ml-6 mb-4">
            <li><strong>Hospital Discharge Planners:</strong> Use the "4-Hour Assessment" rule. 
            Be the fastest, most reliable problem solver for the hospital.</li>
            <li><strong>Hospice Partners:</strong> Offer specialized rooms for end-of-life care to 
            capture high-reimbursement, short-term residents that keep cash flow liquid.</li>
            <li><strong>Wealth Managers & Elder Law Attorneys:</strong> Build relationships with 
            professionals who serve high-net-worth families planning for long-term care.</li>
          </ul>
          
          <h3 className="text-2xl font-semibold mb-3">2. Visual Justification (The Brochure)</h3>
          <p className="mb-4">
            Your marketing packet must include:
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>The "Signature Living" Menu: Highlighting organic, fresh ingredients</li>
            <li>The "Cognitive Vitality" Schedule: Highlighting adult-centric, dignified engagement</li>
            <li>Professional staff bios with credentials (RN/LPN/CNA)</li>
            <li>High-quality photos of the home (not cell phone snapshots)</li>
            <li>Level of Care pricing sheet</li>
          </ul>
        </div>

        <div className="card mb-8">
          <h2 className="text-3xl font-semibold mb-4">V. Administrative Compliance & Billing</h2>
          <p className="mb-4">
            Protecting the business through proper documentation.
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">1. Mandatory Intake Checklist</h3>
          <ul className="list-disc space-y-2 ml-6 mb-4">
            <li><strong>Disclosure of Charges:</strong> Signed prior to admission (RCW 70.128.280)</li>
            <li><strong>Admission Fee:</strong> Collected upfront to cover administrative setup</li>
            <li><strong>90-Day Medicaid Clause:</strong> Ensuring the family understands the private-pay window</li>
            <li><strong>Financial Disclosure:</strong> Verify resident has sufficient funds for 24+ months</li>
          </ul>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-4">
            <p className="text-red-800">
              <strong>Critical Rule:</strong> If it isn't documented in the Disclosure of Charges, 
              you cannot charge for it later without a 30-day written notice.
            </p>
          </div>
          
          <h3 className="text-2xl font-semibold mb-3">2. The Level of Care (LOC) Audit</h3>
          <p className="mb-4">
            Owners should perform a "Care Audit" every 30 days. If the resident's needs have increased 
            (e.g., now requiring a Hoyer lift or insulin), the invoice must be adjusted immediately using 
            the tiered pricing model.
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">3. Billing Best Practices</h3>
          <ul className="list-disc space-y-2 ml-6">
            <li><strong>Invoice Date:</strong> 20th of each month (for upcoming month)</li>
            <li><strong>Due Date:</strong> 1st of the month (service month)</li>
            <li><strong>Late Fee:</strong> 5% after 10 days past due</li>
            <li><strong>Payment Methods:</strong> Check, ACH transfer, credit card (with 3% fee)</li>
          </ul>
        </div>

        <div className="card mb-8">
          <h2 className="text-3xl font-semibold mb-4">VI. Long-Term Financial Health</h2>
          
          <h3 className="text-2xl font-semibold mb-3">1. The 90-Day Notice for Medicaid Conversion</h3>
          <p className="mb-4">
            According to RCW 70.129.150, if a resident requests conversion to Medicaid, the owner must 
            provide 90 days written notice before the conversion can take effect. The owner cannot evict 
            the resident during this period.
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">2. Managing Prepaid Charges</h3>
          <p className="mb-4">
            All prepaid charges must be held in a separate, interest-bearing account. The owner cannot 
            commingle these funds with operating accounts. Refunds must be issued within 30 days of 
            move-out, per RCW 70.129.150.
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">3. Annual Rate Increases</h3>
          <p className="mb-4">
            Set the expectation with families that rates will increase 3–5% annually to cover inflation 
            and staffing costs. Provide 60 days written notice before the increase takes effect.
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">4. Financial Health Metrics</h3>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Target</th>
                <th>Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operating Reserve</td>
                <td>6 months expenses</td>
                <td>Covers vacancies, emergencies, unexpected costs</td>
              </tr>
              <tr>
                <td>Private Pay Ratio</td>
                <td>80%+ of residents</td>
                <td>Ensures profitability and reduces Medicaid risk</td>
              </tr>
              <tr>
                <td>Occupancy Rate</td>
                <td>95%+</td>
                <td>Maximizes revenue and operational efficiency</td>
              </tr>
              <tr>
                <td>Net Profit Margin</td>
                <td>25-35%</td>
                <td>Allows for reinvestment and owner compensation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card mb-8">
          <h2 className="text-3xl font-semibold mb-4">VII. Professional Consultant's Toolset</h2>
          <ul className="list-disc space-y-2 ml-6">
            <li><Link href="/market-analysis" className="text-primary-600 underline">The Market Analysis Template</Link>: 
            For comparing local competition</li>
            <li><Link href="/marketing-scripts" className="text-primary-600 underline">The Sales Scripts</Link>: 
            For hospital and family outreach</li>
            <li><Link href="/checklist" className="text-primary-600 underline">The Financial Calculator</Link>: 
            For converting monthly goals into daily rates</li>
            <li><Link href="/menu-activities" className="text-primary-600 underline">Marketing Materials</Link>: 
            Luxury menu and activities schedule</li>
          </ul>
        </div>

        <div className="card bg-green-50 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-green-900 mb-4">Closing Summary for the Consultant</h2>
          <p className="text-green-800 mb-4">
            Your job is to prevent the owner from "selling themselves short." By following this curriculum, 
            the owner isn't just opening a home; they are launching a Premium Healthcare Brand that is 
            built for financial longevity and the highest standard of resident dignity.
          </p>
          <p className="text-green-800">
            The four pillars of success:
          </p>
          <ol className="text-green-800 list-decimal ml-6 space-y-2 mt-2">
            <li>Select the right location (High-wealth)</li>
            <li>Attract the right client (Private pay)</li>
            <li>Charge the right price (Value-based/Acuity-based)</li>
            <li>Deliver the right experience (Luxury/Boutique)</li>
          </ol>
        </div>

        <div className="card bg-blue-50 border-l-4 border-blue-500 mt-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Additional Resources</h3>
          <ul className="text-blue-800 space-y-2">
            <li>
              <Link href="/module-1" className="underline hover:text-blue-900">
                Module 1: The Business Foundation & Profit Maximization
              </Link>
            </li>
            <li>
              <Link href="/module-2" className="underline hover:text-blue-900">
                Module 2: Strategic Site Selection
              </Link>
            </li>
            <li>
              <Link href="/module-3" className="underline hover:text-blue-900">
                Module 3: Pricing Strategies & Competitive Positioning
              </Link>
            </li>
            <li>
              <Link href="/module-4" className="underline hover:text-blue-900">
                Module 4: Marketing to the "Golden" Resident
              </Link>
            </li>
            <li>
              <Link href="/module-5" className="underline hover:text-blue-900">
                Module 5: The "Cookbook" for Disclosures & Billing
              </Link>
            </li>
            <li>
              <Link href="/module-6" className="underline hover:text-blue-900">
                Module 6: Long-Term Financial Health & Compliance
              </Link>
            </li>
            <li>
              <Link href="/exam" className="underline hover:text-blue-900">
                Certification Exam
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

