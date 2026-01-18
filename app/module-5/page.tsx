import ModuleLayout from '@/components/ModuleLayout'
import Link from 'next/link'

export default function Module5() {
  return (
    <ModuleLayout
      moduleNumber={5}
      moduleTitle='The "Cookbook" for Disclosures & Billing'
      nextModuleHref="/module-6"
      prevModuleHref="/module-4"
    >
      <div className="card bg-primary-50 border-l-4 border-primary-600 mb-8">
        <h3 className="text-xl font-bold text-primary-900 mb-2">Module Goal</h3>
        <p className="text-primary-800">
          Practical administration to ensure the owner actually gets paid. Disclosure forms, 
          admission fees, invoicing strategies, and handling level-of-care increases.
        </p>
      </div>

      <h2>Part 1: The Disclosure of Charges (The "WAC" Requirement)</h2>
      <p>
        The Washington Administrative Code (WAC) requires that all charges be disclosed to residents 
        prior to or upon admission. This is not just a legal requirement—it's a financial protection 
        tool that ensures owners can bill for all services provided.
      </p>

      <div className="card my-8 bg-yellow-50 border-l-4 border-yellow-500">
        <h4 className="font-semibold text-yellow-900 mb-2">Critical Rule</h4>
        <p className="text-yellow-800">
          <strong>If it isn't documented in the Disclosure of Charges, you cannot charge for it 
          later without a 30-day written notice.</strong> This is why the initial disclosure must 
          be comprehensive and capture every potential service.
        </p>
      </div>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Required Disclosure Items</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Items to Include</th>
              <th>Example Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Base Services</strong></td>
              <td>Room & board, meals, basic care</td>
              <td>$5,500 - $7,000/month</td>
            </tr>
            <tr>
              <td><strong>Level of Care</strong></td>
              <td>Level 1, 2, 3, or 4 care fees</td>
              <td>$1,500 - $4,000/month</td>
            </tr>
            <tr>
              <td><strong>Incontinence Supplies</strong></td>
              <td>Briefs, pads, wipes, gloves</td>
              <td>$150 - $300/month</td>
            </tr>
            <tr>
              <td><strong>Hair Care</strong></td>
              <td>Professional styling, cuts, perms</td>
              <td>$50 - $150/month</td>
            </tr>
            <tr>
              <td><strong>Specialized Equipment</strong></td>
              <td>Hoyer lifts, hospital beds, oxygen</td>
              <td>$100 - $500/month</td>
            </tr>
            <tr>
              <td><strong>Nurse Delegation</strong></td>
              <td>RN oversight, complex med management</td>
              <td>$250 - $500/month</td>
            </tr>
            <tr>
              <td><strong>Special Services</strong></td>
              <td>Wound care, insulin, therapy coordination</td>
              <td>$25 - $50/day</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Part 2: The Art of the Admission Fee</h2>
      <p>
        Why a non-refundable admission fee (e.g., $2,000–$5,000) is essential for covering the 
        initial assessment and setup costs.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Admission Fee Components</h3>
        <ul className="space-y-3">
          <li>
            <strong>Comprehensive Assessment:</strong> Initial evaluation of care needs, medical 
            history review, and care plan development ($500-800 value)
          </li>
          <li>
            <strong>Administrative Setup:</strong> Documentation, file creation, insurance 
            coordination, family communication setup ($300-500 value)
          </li>
          <li>
            <strong>Room Preparation:</strong> Deep cleaning, safety modifications, equipment 
            installation, personalization ($400-600 value)
          </li>
          <li>
            <strong>Staff Training:</strong> Specific training for resident's unique needs, 
            medication protocols, care techniques ($300-500 value)
          </li>
          <li>
            <strong>Coordination Services:</strong> Medical transport coordination, pharmacy 
            setup, physician communication ($200-400 value)
          </li>
        </ul>
        <p className="mt-4 font-semibold">
          Total Value: $1,700 - $2,800 (justifying a $2,000 - $5,000 admission fee)
        </p>
      </div>

      <div className="card my-8 bg-green-50 border-l-4 border-green-500">
        <h4 className="font-semibold text-green-900 mb-2">Pro-Tip: Filtering Window Shoppers</h4>
        <p className="text-green-800">
          The admission fee serves as a filter. Families who balk at a $3,000 admission fee are 
          likely not serious about placement or may be shopping for the cheapest option. This fee 
          ensures you're working with families who value quality and are committed to the placement.
        </p>
      </div>

      <h2>Part 3: Invoicing for Success</h2>
      <p>
        Reviewing invoicing best practices to ensure timely payment and proper documentation.
      </p>

      <h3>Monthly vs. Daily Billing Cycles</h3>
      <div className="card my-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Monthly Billing (Traditional)</h4>
            <ul className="text-sm space-y-2">
              <li>✓ Simple for families to understand</li>
              <li>✓ Predictable cash flow</li>
              <li>✗ Doesn't account for 31-day months</li>
              <li>✗ Prorating mid-month changes is complex</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Daily Billing (Recommended)</h4>
            <ul className="text-sm space-y-2">
              <li>✓ Accounts for all days accurately</li>
              <li>✓ Simplifies prorating</li>
              <li>✓ More transparent for families</li>
              <li>✓ Better for level-of-care changes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card my-8 bg-blue-50">
        <h4 className="font-semibold text-blue-900 mb-3">Recommended Billing Schedule</h4>
        <ul className="text-blue-800 space-y-2 text-sm">
          <li><strong>Invoice Date:</strong> 20th of each month (for upcoming month)</li>
          <li><strong>Due Date:</strong> 1st of the month (service month)</li>
          <li><strong>Late Fee:</strong> 5% after 10 days past due</li>
          <li><strong>Payment Methods:</strong> Check, ACH transfer, credit card (with 3% fee)</li>
        </ul>
        <p className="text-blue-800 text-sm mt-4">
          <strong>Why this works:</strong> Families receive the invoice before the service month, 
          allowing time for payment processing. Due date on the 1st aligns with typical income 
          schedules (Social Security, pensions).
        </p>
      </div>

      <h3>Sample Invoice Structure</h3>
      <div className="card my-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="mb-4">
            <h4 className="font-semibold mb-2">INVOICE #2024-001</h4>
            <p className="text-sm text-gray-600">Resident: [Name] | Service Period: January 1-31, 2024</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Description</th>
                <th className="text-right py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base Room & Board (31 days @ $230/day)</td>
                <td className="text-right">$7,130.00</td>
              </tr>
              <tr>
                <td>Level 2 Care Fee (31 days @ $80/day)</td>
                <td className="text-right">$2,480.00</td>
              </tr>
              <tr>
                <td>Incontinence Supplies</td>
                <td className="text-right">$250.00</td>
              </tr>
              <tr>
                <td>Nurse Delegation Fee</td>
                <td className="text-right">$350.00</td>
              </tr>
              <tr className="border-t-2 font-semibold">
                <td>Total Due</td>
                <td className="text-right">$10,210.00</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-600 mt-4">
            Payment due by January 1, 2024. Late fees apply after January 10, 2024.
          </p>
        </div>
      </div>

      <h2>Part 4: Handling "Level of Care" Increases</h2>
      <p>
        How to notify families when a resident's health declines and the price must go up. This 
        is a sensitive but necessary conversation.
      </p>

      <div className="card my-8 bg-red-50 border-l-4 border-red-500">
        <h3 className="text-xl font-semibold text-red-900 mb-4">Level of Care Increase Protocol</h3>
        <ol className="text-red-800 space-y-3 list-decimal ml-6">
          <li><strong>Document the Change:</strong> Complete a new assessment showing increased 
          care needs (e.g., now requires two-person transfers, increased incontinence, new 
          medication requirements)</li>
          <li><strong>30-Day Written Notice:</strong> Provide formal written notice 30 days before 
          the rate increase takes effect (WAC requirement)</li>
          <li><strong>Schedule Family Meeting:</strong> Meet with family to explain the changes 
          and why increased care requires increased staffing/resources</li>
          <li><strong>Provide Comparison:</strong> Show what the same level of care would cost in 
          a facility or with 24/7 home care</li>
          <li><strong>Update Disclosure:</strong> Amend the Disclosure of Charges form to reflect 
          new level and obtain signature</li>
        </ol>
      </div>

      <div className="card my-8 bg-blue-50">
        <h4 className="font-semibold text-blue-900 mb-3">Sample Level of Care Increase Letter</h4>
        <div className="text-sm text-gray-700 space-y-3 italic">
          <p>
            <strong>Date:</strong> [Date]
          </p>
          <p>
            <strong>To:</strong> [Family Member Name]
          </p>
          <p>
            <strong>Re:</strong> Level of Care Adjustment for [Resident Name]
          </p>
          <p>
            We hope this letter finds you well. As part of our commitment to providing the highest 
            quality care, we conduct regular assessments of each resident's needs. Our most recent 
            assessment of [Resident Name] indicates that their care requirements have increased, 
            necessitating additional staff time and specialized services.
          </p>
          <p>
            Specifically, [Resident Name] now requires:
          </p>
          <ul className="list-disc ml-6">
            <li>[Specific care need, e.g., Two-person transfers due to decreased mobility]</li>
            <li>[Specific care need, e.g., Increased incontinence management - 6+ changes daily]</li>
            <li>[Specific care need, e.g., Complex medication management requiring RN oversight]</li>
          </ul>
          <p>
            To ensure we can continue providing the exceptional care [Resident Name] deserves, we 
            will be adjusting the monthly rate from $[Current Rate] to $[New Rate], effective 
            [Date - 30 days from notice].
          </p>
          <p>
            We would like to schedule a meeting to discuss these changes and answer any questions 
            you may have. Please contact us at [Phone] to arrange a convenient time.
          </p>
          <p>
            Thank you for your understanding and continued trust in our care.
          </p>
          <p>
            Sincerely,<br />
            [Owner Name]<br />
            [Home Name] Adult Family Home
          </p>
        </div>
      </div>

      <h2>Part 5: The Master "Add-On" Menu for Private Pay</h2>
      <p>
        Standardizing the "Add-On" menu to prevent profit leak. Every service that requires 
        additional resources should have a corresponding charge.
      </p>

      <div className="card my-8">
        <table>
          <thead>
            <tr>
              <th>Service Item</th>
              <th>Recommended Charge</th>
              <th>Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nurse Delegation</strong></td>
              <td>$250 - $500 / month</td>
              <td>Covers the cost of the RN contractor and liability</td>
            </tr>
            <tr>
              <td><strong>In-Room Tray Service</strong></td>
              <td>$15 / day</td>
              <td>For residents who prefer not to eat in the dining area</td>
            </tr>
            <tr>
              <td><strong>Two-Person Assist</strong></td>
              <td>$1,500 / month extra</td>
              <td>Covers the cost of the additional caregiver required on shift</td>
            </tr>
            <tr>
              <td><strong>Wound Care (Simple)</strong></td>
              <td>$25 - $50 / day</td>
              <td>Based on frequency of dressing changes</td>
            </tr>
            <tr>
              <td><strong>Wound Care (Complex)</strong></td>
              <td>$75 - $150 / day</td>
              <td>Requires RN oversight, specialized supplies, frequent monitoring</td>
            </tr>
            <tr>
              <td><strong>Heavy Incontinence Care</strong></td>
              <td>$500 / month</td>
              <td>For residents requiring 5+ changes daily</td>
            </tr>
            <tr>
              <td><strong>Social & Activity Fee</strong></td>
              <td>$200 - $400 / month</td>
              <td>For residents requiring 1-on-1 engagement, music therapy, escorted outings</td>
            </tr>
            <tr>
              <td><strong>Insulin Management</strong></td>
              <td>$100 - $200 / month</td>
              <td>Blood glucose monitoring, injection administration, coordination with physician</td>
            </tr>
            <tr>
              <td><strong>Oxygen Management</strong></td>
              <td>$150 - $300 / month</td>
              <td>Equipment monitoring, supply management, safety protocols</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Takeaways</h2>
      <ul className="list-disc space-y-3 mb-8">
        <li><strong>Disclosure is protection:</strong> Document everything upfront to avoid disputes later</li>
        <li><strong>Admission fees are essential:</strong> Cover setup costs and filter serious clients</li>
        <li><strong>Daily billing is superior:</strong> More accurate and transparent than monthly</li>
        <li><strong>Level-of-care increases require notice:</strong> Follow WAC requirements (30 days) 
        and communicate clearly</li>
        <li><strong>Every service has a cost:</strong> Don't absorb expenses—charge appropriately</li>
      </ul>

      <div className="card bg-blue-50 border-l-4 border-blue-500 mt-8">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Additional Resources</h3>
        <p className="text-blue-800 mb-4">
          For a comprehensive checklist to ensure nothing is missed during intake, see the{' '}
          <Link href="/checklist" className="underline font-semibold">
            New Resident Financial Intake Checklist
          </Link>.
        </p>
        <p className="text-blue-800">
          Next, learn how to protect the business long-term through compliance and financial 
          management. Proceed to <strong>Module 6: Long-Term Financial Health & Compliance</strong>.
        </p>
      </div>
    </ModuleLayout>
  )
}

