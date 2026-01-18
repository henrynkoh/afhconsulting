import ModuleLayout from '@/components/ModuleLayout'

export default function Module2() {
  return (
    <ModuleLayout
      moduleNumber={2}
      moduleTitle='Strategic Site Selection (The "Where" of Wealth)'
      nextModuleHref="/module-3"
      prevModuleHref="/module-1"
    >
      <div className="card bg-primary-50 border-l-4 border-primary-600 mb-8">
        <h3 className="text-xl font-bold text-primary-900 mb-2">Module Goal</h3>
        <p className="text-primary-800">
          Location is the single biggest factor in attracting Private Pay residents. This module 
          teaches wealth mapping, market analysis, and identifying high-acuity gaps in the market.
        </p>
      </div>

      <h2>Part 1: The "Affluence Radius" Analysis</h2>
      <p>
        Real estate choice is the primary driver of the Profit & Loss statement. Consultants must 
        teach owners that selecting the right location is more important than finding the cheapest 
        property. The "5-Mile Rule" is a critical concept for understanding Private Pay market dynamics.
      </p>

      <div className="card my-8">
        <h3 className="text-2xl font-semibold mb-4">The 5-Mile Rule</h3>
        <p className="mb-4">
          Private-pay families (usually adult children aged 45–65) typically choose a home within 
          5 miles of their own residence or office. This proximity allows for:
        </p>
        <ul className="list-disc space-y-2 ml-6">
          <li>Regular visits without significant travel time</li>
          <li>Quick response in emergencies</li>
          <li>Maintenance of social connections and routines</li>
          <li>Peace of mind through accessibility</li>
        </ul>
      </div>

      <h3>The Competitor Grid</h3>
      <p>
        Use a map to plot every AFH within a 10-mile radius. Categorize them into tiers:
      </p>

      <div className="card my-8">
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Monthly Rate Range</th>
              <th>Characteristics</th>
              <th>Market Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Tier A (High Cost)</strong></td>
              <td>$9,000+</td>
              <td>Premium curb appeal, private bathrooms, RN-led staff</td>
              <td>Luxury/Executive</td>
            </tr>
            <tr>
              <td><strong>Tier B (Standard)</strong></td>
              <td>$6,000 - $8,000</td>
              <td>Standard care, shared or private rooms, basic amenities</td>
              <td>Market Standard</td>
            </tr>
            <tr>
              <td><strong>Tier C (Budget)</strong></td>
              <td>$4,000 - $6,000</td>
              <td>Medicaid-heavy, minimal amenities, basic care</td>
              <td>Budget/Medicaid</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card bg-yellow-50 border-l-4 border-yellow-500 my-8">
        <h4 className="font-semibold text-yellow-900 mb-2">Saturation vs. Opportunity</h4>
        <p className="text-yellow-800">
          If an area has 50 AFHs but all are "Tier B," there is a massive opportunity to open a 
          "Tier A" luxury home. Conversely, if an area is saturated with Tier A homes, consider 
          specializing in a high-acuity niche (Dementia, Hospice, or Ventilator care) that allows 
          for premium pricing regardless of location.
        </p>
      </div>

      <h2>Part 2: Wealth Mapping Strategy</h2>
      <p>
        Consultants must teach owners that real estate choice is the primary driver of the Profit 
        & Loss statement. The following metrics determine location viability:
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">The "Affluence Index" Metrics</h3>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Target Range for Success</th>
              <th>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Median Home Value (1-mi radius)</strong></td>
              <td>Over $750k</td>
              <td>High property values indicate high-income families who can afford premium care</td>
            </tr>
            <tr>
              <td><strong>Nearby High-End Grocery</strong></td>
              <td>Whole Foods/Met Market within 2 miles</td>
              <td>Premium retailers indicate affluent demographics</td>
            </tr>
            <tr>
              <td><strong>Proximity to Specialty Hospital</strong></td>
              <td>Under 5 miles</td>
              <td>High-acuity/Hospice referral source</td>
            </tr>
            <tr>
              <td><strong>Saturation Level</strong></td>
              <td>&lt; 1 AFH bed per 1,000 residents</td>
              <td>Low saturation = High demand = Pricing power</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Part 3: Market Analysis Tools</h2>

      <h3>Using ALTSA/DSHS Websites</h3>
      <p>
        The Washington State Department of Social and Health Services (DSHS) and Aging and Long-Term 
        Support Administration (ALTSA) maintain databases of licensed AFHs. Use these resources to:
      </p>
      <ul className="list-disc space-y-2 ml-6 mb-6">
        <li>Identify all licensed homes in your target area</li>
        <li>Review inspection reports and compliance history</li>
        <li>Understand the competitive landscape</li>
        <li>Identify gaps in service offerings</li>
      </ul>

      <h3>The "Secret Shopper" Method</h3>
      <p>
        How to call nearby AFHs to find their actual vacancy rates and current rates:
      </p>

      <div className="card my-8 bg-blue-50">
        <h4 className="font-semibold text-blue-900 mb-3">Secret Shopper Script</h4>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Caller:</p>
          <p className="italic text-gray-700">
            "Hi, I'm calling on behalf of my elderly mother who needs placement. She requires 
            assistance with [ADLs: bathing, dressing, medication management] and has mild dementia. 
            Do you have any private rooms available, and what would the monthly rate be?"
          </p>
          <p className="font-semibold mt-4">Information to Gather:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Current vacancy status</li>
            <li>Private vs. shared room rates</li>
            <li>Level of care pricing structure</li>
            <li>Admission fees and deposits</li>
            <li>Waitlist length (if applicable)</li>
          </ul>
        </div>
      </div>

      <h2>Part 4: Identifying High-Acuity Gaps</h2>
      <p>
        Specialization allows for premium pricing regardless of location. The "Hospice-Ready" home 
        is a prime example of identifying and filling a market gap.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">The "Hospice-Ready" Home Criteria</h3>
        <p className="mb-4">
          Teach owners to look for properties with these characteristics to capture the highest-paying 
          residents:
        </p>
        <ul className="list-disc space-y-2 ml-6">
          <li><strong>Wide hallways:</strong> Minimum 48 inches to accommodate hospital beds and equipment</li>
          <li><strong>No stairs:</strong> Single-level or elevator access</li>
          <li><strong>Private rooms:</strong> Minimum 12x12 feet for medical equipment</li>
          <li><strong>Walk-in showers:</strong> ADA-compliant with grab bars</li>
          <li><strong>Oxygen hookup capability:</strong> For residents requiring continuous oxygen</li>
          <li><strong>Quiet location:</strong> Away from busy streets for peaceful end-of-life care</li>
        </ul>
      </div>

      <div className="card bg-green-50 border-l-4 border-green-500 my-8">
        <h4 className="font-semibold text-green-900 mb-2">High-Acuity Specialization Benefits</h4>
        <ul className="text-green-800 space-y-2">
          <li><strong>Level 4: Hospice residents</strong> command the highest daily rates due to 
          specialized 24/7 comfort care</li>
          <li><strong>Shorter average stay</strong> (3-6 months) means higher turnover and more 
          revenue opportunities</li>
          <li><strong>Less competition</strong> as many homes avoid high-acuity care</li>
          <li><strong>Premium pricing justified</strong> by specialized expertise and equipment</li>
        </ul>
      </div>

      <h2>Part 5: The "Gap in the Market" Strategy</h2>
      <p>
        Based on competitor analysis, choose the "Win Condition" for the new AFH:
      </p>

      <div className="card my-8">
        <table>
          <thead>
            <tr>
              <th>If Competitors Are...</th>
              <th>The Strategy Should Be...</th>
              <th>The Pricing Strategy...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mostly Shared Rooms</td>
              <td>Offer 100% Private Suites with private baths</td>
              <td>Offensive Pricing: 20% above market</td>
            </tr>
            <tr>
              <td>Mostly Low-Acuity</td>
              <td>Focus on Hospice & Bedbound residents</td>
              <td>Level-of-Care Pricing: High base + high add-ons</td>
            </tr>
            <tr>
              <td>High Vacancy/Low Quality</td>
              <td>Focus on Luxury Amenities and gourmet food</td>
              <td>Psychological Pricing: $8,995 (Premium feel)</td>
            </tr>
            <tr>
              <td>All Accept Medicaid</td>
              <td>Position as Exclusive Private Pay Only</td>
              <td>Premium Pricing: $9,500+ to signal exclusivity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Takeaways</h2>
      <ul className="list-disc space-y-3 mb-8">
        <li><strong>Location determines revenue potential:</strong> High-wealth areas support 
        premium pricing</li>
        <li><strong>The 5-Mile Rule matters:</strong> Private-pay families prioritize proximity</li>
        <li><strong>Market gaps create opportunities:</strong> Identify what competitors aren't 
        offering</li>
        <li><strong>Specialization commands premium:</strong> High-acuity care justifies higher rates</li>
        <li><strong>Data-driven decisions win:</strong> Use market analysis, not guesswork</li>
      </ul>

      <div className="card bg-blue-50 border-l-4 border-blue-500 mt-8">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Next Steps</h3>
        <p className="text-blue-800">
          Once the optimal location is identified, owners must learn how to price their services 
          competitively while maximizing profit. Proceed to <strong>Module 3: Pricing Strategies 
          & Competitive Positioning</strong>.
        </p>
      </div>
    </ModuleLayout>
  )
}

