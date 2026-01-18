import Link from 'next/link'

export default function MarketAnalysis() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AFH Market Analysis & Competitive Positioning Template
        </h1>
        <p className="text-lg text-gray-600">
          This is the primary tool for a consultant to determine if a specific location will be 
          a "Money Pit" or a "Gold Mine." By filling this out, the prospective owner can move 
          from a "guess-work" pricing model to a "data-driven" model.
        </p>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Part 1: The Local Competition Grid</h2>
        <p className="text-gray-600 mb-4">
          The consultant should guide the owner to identify the 5 closest Adult Family Homes and 
          2 largest Assisted Living Facilities (ALFs) within a 5-mile radius.
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Competitor Name</th>
                <th>Distance</th>
                <th>Est. Monthly Rate</th>
                <th>Room Types</th>
                <th>Key Selling Point</th>
                <th>Current Vacancies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Example: Sunrise AFH</td>
                <td>1.2 mi</td>
                <td>$7,500</td>
                <td>Private only</td>
                <td>Large deck, focuses on Dementia</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Example: Golden Oaks</td>
                <td>3.5 mi</td>
                <td>$6,200</td>
                <td>Shared/Private</td>
                <td>Low cost, high Medicaid mix</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Example: Luxury ALF</td>
                <td>4.0 mi</td>
                <td>$9,000+</td>
                <td>Studio Apts</td>
                <td>Pool, Cinema, Gym</td>
                <td>10+</td>
              </tr>
              <tr>
                <td className="border-b-2 border-dashed border-gray-400">Competitor 1</td>
                <td className="border-b-2 border-dashed border-gray-400"></td>
                <td className="border-b-2 border-dashed border-gray-400"></td>
                <td className="border-b-2 border-dashed border-gray-400"></td>
                <td className="border-b-2 border-dashed border-gray-400"></td>
                <td className="border-b-2 border-dashed border-gray-400"></td>
              </tr>
              <tr>
                <td className="border-b-2 border-dashed border-gray-400">Competitor 2</td>
                <td className="border-b-2 border-dashed border-gray-400"></td>
                <td className="border-b-2 border-dashed border-gray-400"></td>
                <td className="border-b-2 border-dashed border-gray-400"></td>
                <td className="border-b-2 border-dashed border-gray-400"></td>
                <td className="border-b-2 border-dashed border-gray-400"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Part 2: The "Affluence Index" (Location Viability)</h2>
        <p className="text-gray-600 mb-4">
          Use local real estate data (Zillow/Redfin) to determine if the neighborhood can support 
          high Private-Pay rates.
        </p>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Local Data Point</th>
              <th>Target Range for Success</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Median Home Value (1-mi radius)</strong></td>
              <td className="border-b-2 border-dashed border-gray-400">$_________</td>
              <td>Over $750k = High Private Pay Potential</td>
            </tr>
            <tr>
              <td><strong>Nearby High-End Grocery</strong></td>
              <td className="border-b-2 border-dashed border-gray-400">(Yes / No)</td>
              <td>Whole Foods/Met Market = Premium Area</td>
            </tr>
            <tr>
              <td><strong>Proximity to Specialty Hospital</strong></td>
              <td className="border-b-2 border-dashed border-gray-400">________ mi</td>
              <td>Under 5 miles = High-Acuity/Hospice Lead</td>
            </tr>
            <tr>
              <td><strong>Saturation Level</strong></td>
              <td className="border-b-2 border-dashed border-gray-400">________ beds</td>
              <td>&lt; 1 AFH bed per 1,000 residents = High Demand</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Part 3: The "Gap in the Market" Strategy</h2>
        <p className="text-gray-600 mb-4">
          Based on the data above, choose the "Win Condition" for the new AFH.
        </p>
        <table>
          <thead>
            <tr>
              <th>If the Competitors are...</th>
              <th>The Strategy should be...</th>
              <th>The Pricing Strategy...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mostly Shared Rooms</td>
              <td>Offer 100% Private Suites with private baths.</td>
              <td>Offensive Pricing: 20% above market.</td>
            </tr>
            <tr>
              <td>Mostly Low-Acuity</td>
              <td>Focus on Hospice & Bedbound residents.</td>
              <td>Level-of-Care Pricing: High base + high add-ons.</td>
            </tr>
            <tr>
              <td>High Vacancy/Low Quality</td>
              <td>Focus on Luxury Amenities and gourmet food.</td>
              <td>Psychological Pricing: $8,995 (Premium feel).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Part 4: The Monthly Revenue "Cookbook" Calculator</h2>
        <p className="text-gray-600 mb-4">
          Consultants use this to show the owner their "Optimized" potential versus their 
          "Worst-Case" scenario.
        </p>
        <p className="text-sm text-gray-600 mb-4 italic">
          Assumptions: 6 Bed Adult Family Home.
        </p>
        <table>
          <thead>
            <tr>
              <th>Resident Tier</th>
              <th>Count</th>
              <th>Rate per Resident</th>
              <th>Total Monthly Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tier 1 (Base/Private Pay)</td>
              <td className="border-b-2 border-dashed border-gray-400">2</td>
              <td className="border-b-2 border-dashed border-gray-400">$7,500</td>
              <td className="border-b-2 border-dashed border-gray-400">$15,000</td>
            </tr>
            <tr>
              <td>Tier 2 (High-Acuity/Dementia)</td>
              <td className="border-b-2 border-dashed border-gray-400">3</td>
              <td className="border-b-2 border-dashed border-gray-400">$9,500</td>
              <td className="border-b-2 border-dashed border-gray-400">$28,500</td>
            </tr>
            <tr>
              <td>Tier 3 (Hospice/Total Care)</td>
              <td className="border-b-2 border-dashed border-gray-400">1</td>
              <td className="border-b-2 border-dashed border-gray-400">$11,500</td>
              <td className="border-b-2 border-dashed border-gray-400">$11,500</td>
            </tr>
            <tr className="font-semibold bg-primary-50">
              <td>TOTAL GROSS REVENUE</td>
              <td>6</td>
              <td>Avg: $9,166</td>
              <td>$55,000</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <p className="text-sm text-yellow-800">
            <strong>Consultant Note:</strong> Compare this $55,000 revenue to a Medicaid-heavy 
            home that might only gross $27,000 for the exact same amount of work and overhead. 
            The profit is found in the selection, not just the care.
          </p>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Part 5: Actionable Next Steps for the Prospective Owner</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="font-semibold text-primary-600 mr-3">1.</span>
            <div>
              <strong>Phone Blitz:</strong> Call the 5 competitors listed in Part 1. Ask: "What 
              is your private pay rate for a resident who needs assistance with 3 ADLs and has 
              mild dementia?"
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-primary-600 mr-3">2.</span>
            <div>
              <strong>The "Walk-Through" Audit:</strong> Visit one high-end Assisted Living facility. 
              Note the "smell, sight, and sound." Your AFH must beat their "Personal Touch" score.
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-primary-600 mr-3">3.</span>
            <div>
              <strong>Financial Reserve Check:</strong> Ensure you have 6 months of operating 
              capital to wait for the right private-pay resident rather than rushing to fill a 
              bed with a low-paying Medicaid resident out of desperation.
            </div>
          </li>
        </ul>
      </div>

      <div className="card bg-blue-50 border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Related Resources</h3>
        <ul className="text-blue-800 space-y-2">
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
        </ul>
      </div>
    </div>
  )
}

