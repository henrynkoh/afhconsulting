import ModuleLayout from '@/components/ModuleLayout'

export default function Module3() {
  return (
    <ModuleLayout
      moduleNumber={3}
      moduleTitle="Pricing Strategies & Competitive Positioning"
      nextModuleHref="/module-4"
      prevModuleHref="/module-2"
    >
      <div className="card bg-primary-50 border-l-4 border-primary-600 mb-8">
        <h3 className="text-xl font-bold text-primary-900 mb-2">Module Goal</h3>
        <p className="text-primary-800">
          Moving away from "flat-rate" pricing to "level-of-care" pricing. Learn competitive 
          positioning, psychological pricing, and how to plot your home against neighbors.
        </p>
      </div>

      <h2>Part 1: Moving from Flat-Rate to Level-of-Care Pricing</h2>
      <p>
        The biggest mistake new AFH owners make is charging a flat rate regardless of the resident's 
        care needs. This leaves money on the table and creates financial strain when high-acuity 
        residents require significantly more staff time and resources.
      </p>

      <div className="card my-8">
        <h3 className="text-2xl font-semibold mb-4">The "Good, Better, Best" Pricing Architecture</h3>
        <p className="mb-4">
          Consultants should help owners set three distinct price points to give families a sense 
          of choice while maximizing revenue:
        </p>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Profile</th>
              <th>Suggested Daily Rate</th>
              <th>Monthly Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Boutique Suite</strong></td>
              <td>Private room, shared bath, Level 1 care</td>
              <td>$230 - $260</td>
              <td>$7,000 - $7,900</td>
            </tr>
            <tr>
              <td><strong>Executive Suite</strong></td>
              <td>Private room, private bath, Level 2-3 care</td>
              <td>$280 - $350</td>
              <td>$8,500 - $10,650</td>
            </tr>
            <tr>
              <td><strong>Premium Care</strong></td>
              <td>High Acuity, 1:1 feeding, Hospice, RN on site</td>
              <td>$400+</td>
              <td>$12,000+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Part 2: The Competitive Grid</h2>
      <p>
        Plotting your home against neighbors helps determine market position. Are you the "Lexus" 
        (Premium) or the "Toyota" (Standard)?
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Market Positioning Framework</h3>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Price Range</th>
              <th>Key Differentiators</th>
              <th>Target Resident</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Premium (Lexus)</strong></td>
              <td>$9,000 - $12,000+</td>
              <td>RN on-site, private suites, gourmet meals, 1:3 ratio</td>
              <td>High-net-worth families, complex medical needs</td>
            </tr>
            <tr>
              <td><strong>Standard (Toyota)</strong></td>
              <td>$6,500 - $8,500</td>
              <td>Quality care, clean environment, good staffing</td>
              <td>Middle-class families, standard ADL assistance</td>
            </tr>
            <tr>
              <td><strong>Budget (Honda)</strong></td>
              <td>$4,000 - $6,500</td>
              <td>Basic care, shared rooms, Medicaid-accepting</td>
              <td>Limited resources, state-funded care</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Part 3: Pricing Models</h2>

      <h3>Base Room & Board + Tiered Care Fees</h3>
      <p>
        This model separates the cost of housing from the cost of care, allowing for transparent 
        pricing and easier adjustments when care needs change.
      </p>

      <div className="card my-8 bg-blue-50">
        <h4 className="font-semibold text-blue-900 mb-3">Example Pricing Structure</h4>
        <div className="space-y-3 text-sm">
          <div>
            <strong>Base Room & Board:</strong> $5,500/month
            <ul className="list-disc ml-6 mt-1">
              <li>Private room</li>
              <li>Three meals daily</li>
              <li>Housekeeping and laundry</li>
              <li>Basic utilities</li>
            </ul>
          </div>
          <div>
            <strong>Level 1 Care (Basic ADL):</strong> +$1,500/month
            <ul className="list-disc ml-6 mt-1">
              <li>Assistance with bathing, dressing</li>
              <li>Medication reminders</li>
              <li>Mobility assistance</li>
            </ul>
          </div>
          <div>
            <strong>Level 2 Care (Moderate):</strong> +$2,500/month
            <ul className="list-disc ml-6 mt-1">
              <li>All Level 1 services</li>
              <li>Incontinence management</li>
              <li>Specialized diets</li>
              <li>Behavioral monitoring</li>
            </ul>
          </div>
          <div>
            <strong>Level 3 Care (Intensive):</strong> +$4,000/month
            <ul className="list-disc ml-6 mt-1">
              <li>All Level 2 services</li>
              <li>Two-person transfers</li>
              <li>Wound care</li>
              <li>Dementia care with wandering prevention</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>The Daily Rate Strategy</h3>
      <p>
        Why AFH owners recommend a daily rate (which accounts for the 31st day of the month and 
        simplifies billing):
      </p>

      <div className="card my-8">
        <h4 className="font-semibold mb-3">Daily Rate Calculation Formula</h4>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-lg">
            Daily Rate = (Monthly Rate × 12) ÷ 365
          </code>
        </div>
        <p className="mb-3"><strong>Example:</strong> Monthly rate of $8,500</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <code>
            ($8,500 × 12) ÷ 365 = $279.45 per day
          </code>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Benefits:</strong> Accounts for months with 31 days, simplifies prorated billing 
          for mid-month admissions/discharges, and provides clear daily cost transparency for families.
        </p>
      </div>

      <h2>Part 4: Strategic Pricing Choices</h2>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Pricing Strategies Comparison</h3>
        <table>
          <thead>
            <tr>
              <th>Strategy</th>
              <th>Description</th>
              <th>When to Use</th>
              <th>Risk Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Penetration Pricing</strong></td>
              <td>Lower entry price to fill beds fast</td>
              <td>New home, need quick occupancy</td>
              <td>High (hard to raise rates later)</td>
            </tr>
            <tr>
              <td><strong>Psychological Pricing</strong></td>
              <td>Charging $6,950 instead of $7,000</td>
              <td>Standard positioning, price-sensitive market</td>
              <td>Low</td>
            </tr>
            <tr>
              <td><strong>Offensive Pricing</strong></td>
              <td>Setting price 10% higher than competitors</td>
              <td>Premium positioning, unique value proposition</td>
              <td>Medium (requires justification)</td>
            </tr>
            <tr>
              <td><strong>Value-Based Pricing</strong></td>
              <td>Pricing based on outcomes and quality</td>
              <td>High-acuity specialization, proven results</td>
              <td>Low (if value is clear)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>The "Defensive" vs. "Offensive" Price War</h3>
      <p>
        Understanding when to compete on price vs. when to lead with premium pricing:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="card bg-red-50 border-l-4 border-red-500">
          <h4 className="font-semibold text-red-900 mb-3">Defensive Strategy</h4>
          <ul className="text-sm space-y-2 text-red-800">
            <li>Match or slightly undercut competitors</li>
            <li>Focus on cost efficiency</li>
            <li>Volume-based revenue model</li>
            <li><strong>Risk:</strong> Price wars erode margins</li>
            <li><strong>Result:</strong> Lower profit, higher stress</li>
          </ul>
        </div>
        <div className="card bg-green-50 border-l-4 border-green-500">
          <h4 className="font-semibold text-green-900 mb-3">Offensive Strategy</h4>
          <ul className="text-sm space-y-2 text-green-800">
            <li>Price 10% higher than nearest competitor</li>
            <li>Triggers "Prestige Effect"</li>
            <li>Families associate higher cost with better safety</li>
            <li><strong>Benefit:</strong> Higher margins, selective clientele</li>
            <li><strong>Result:</strong> Premium brand positioning</li>
          </ul>
        </div>
      </div>

      <h3>The "Admission Fee" Anchor</h3>
      <p>
        Charge a $3,000 non-refundable fee. This filters out "window shoppers" and ensures that 
        the first 90 days are highly profitable even if the resident moves out quickly.
      </p>

      <div className="card my-8 bg-yellow-50 border-l-4 border-yellow-500">
        <h4 className="font-semibold text-yellow-900 mb-2">Admission Fee Justification</h4>
        <p className="text-yellow-800 text-sm mb-3">
          The admission fee covers:
        </p>
        <ul className="text-yellow-800 text-sm list-disc ml-6 space-y-1">
          <li>Initial comprehensive assessment</li>
          <li>Care plan development</li>
          <li>Administrative setup and documentation</li>
          <li>Room preparation and customization</li>
          <li>Staff training for specific resident needs</li>
        </ul>
        <p className="text-yellow-800 text-sm mt-3">
          <strong>Pro-Tip:</strong> Frame this as a "one-time setup fee" rather than a "deposit" 
          to set proper expectations.
        </p>
      </div>

      <h2>Part 5: Advanced Pricing & "Psychological Sales"</h2>
      <p>
        Moving from "Cost-Plus" pricing to "Value-Based" pricing requires understanding what 
        families are really buying.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">What Families Are Really Buying</h3>
        <ul className="space-y-3">
          <li><strong>Peace of Mind:</strong> Knowing their loved one is safe and well-cared-for</li>
          <li><strong>Guilt Relief:</strong> Feeling they've made the "best" choice</li>
          <li><strong>Time:</strong> Freedom from 24/7 caregiving responsibilities</li>
          <li><strong>Quality of Life:</strong> Dignified, engaging environment for their loved one</li>
          <li><strong>Expertise:</strong> Professional medical management and specialized care</li>
        </ul>
      </div>

      <h2>Key Takeaways</h2>
      <ul className="list-disc space-y-3 mb-8">
        <li><strong>Level-of-care pricing maximizes revenue:</strong> Don't leave money on the table 
        with flat rates</li>
        <li><strong>Position determines pricing:</strong> Premium positioning justifies premium prices</li>
        <li><strong>Daily rates simplify billing:</strong> Account for all days and simplify prorating</li>
        <li><strong>Offensive pricing creates prestige:</strong> Higher prices signal quality and attract 
        the right clients</li>
        <li><strong>Admission fees protect profitability:</strong> Filter serious clients and cover setup costs</li>
      </ul>

      <div className="card bg-blue-50 border-l-4 border-blue-500 mt-8">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Next Steps</h3>
        <p className="text-blue-800">
          With pricing strategy established, owners must learn how to attract and close the "Golden 
          Resident" (Private Pay clients). Proceed to <strong>Module 4: Marketing to the "Golden" 
          Resident</strong>.
        </p>
      </div>
    </ModuleLayout>
  )
}

