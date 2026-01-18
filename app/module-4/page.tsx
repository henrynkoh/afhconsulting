import ModuleLayout from '@/components/ModuleLayout'

export default function Module4() {
  return (
    <ModuleLayout
      moduleNumber={4}
      moduleTitle='Marketing to the "Golden" Resident'
      nextModuleHref="/module-5"
      prevModuleHref="/module-3"
    >
      <div className="card bg-primary-50 border-l-4 border-primary-600 mb-8">
        <h3 className="text-xl font-bold text-primary-900 mb-2">Module Goal</h3>
        <p className="text-primary-800">
          How to find and close Private Pay clients. Building referral networks and conducting 
          premium tours that justify premium pricing.
        </p>
      </div>

      <h2>Part 1: The Referral Network</h2>
      <p>
        Building relationships with key referral sources is the foundation of a successful Private 
        Pay AFH. These relationships take time to develop but provide a steady stream of qualified 
        leads.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Primary Referral Sources</h3>
        <table>
          <thead>
            <tr>
              <th>Source</th>
              <th>Why They Refer</th>
              <th>How to Build Relationship</th>
              <th>Expected Lead Quality</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Hospital Discharge Planners</strong></td>
              <td>Need reliable placement for complex cases</td>
              <td>4-hour response time, specialized care</td>
              <td>High (complex, high-budget cases)</td>
            </tr>
            <tr>
              <td><strong>Hospice Agencies</strong></td>
              <td>Need homes that accept end-of-life care</td>
              <td>Hospice-ready facilities, RN oversight</td>
              <td>Very High (short-term, premium rates)</td>
            </tr>
            <tr>
              <td><strong>Wealth Managers</strong></td>
              <td>Clients need premium care solutions</td>
              <td>Professional presentation, luxury positioning</td>
              <td>Highest (high-net-worth families)</td>
            </tr>
            <tr>
              <td><strong>Elder Law Attorneys</strong></td>
              <td>Clients planning for long-term care</td>
              <td>Educational seminars, referral partnerships</td>
              <td>High (pre-planned, financially prepared)</td>
            </tr>
            <tr>
              <td><strong>Geriatric Care Managers</strong></td>
              <td>Need quality homes for their clients</td>
              <td>Consistent quality, responsive communication</td>
              <td>High (vetted, ready to move)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Part 2: The "Concierge" Tour</h2>
      <p>
        How to conduct a tour that justifies a $9,000/month price tag. The tour is where families 
        make their decision, and every detail matters.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Tour Preparation Checklist</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Home is spotless:</strong> No odors, fresh flowers, made beds, clean common areas
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Residents are engaged:</strong> Not watching TV alone, but in activities or conversation
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Staff is visible and professional:</strong> Clean uniforms, friendly demeanor, 
              interacting with residents
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Marketing materials ready:</strong> Professional folder with menu, activities schedule, 
              staff bios, pricing sheet
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Sample meal prepared:</strong> If possible, have a sample of the day's meal 
              available to showcase quality
            </div>
          </li>
        </ul>
      </div>

      <h3>Tour Script: The Premium Experience</h3>
      <div className="card my-8 bg-blue-50">
        <h4 className="font-semibold text-blue-900 mb-3">Opening (First 2 Minutes)</h4>
        <p className="text-sm text-gray-700 italic mb-4">
          "Welcome to [Home Name]. I'm [Owner Name], and I'm so glad you're here. Before we begin 
          the tour, I'd like to understand what's most important to you and your family in finding 
          the right home. What specific concerns or priorities do you have?"
        </p>
        <p className="text-xs text-gray-600">
          <strong>Why this works:</strong> Shows you care about their needs, not just filling a bed. 
          Allows you to tailor the tour to their priorities.
        </p>
      </div>

      <div className="card my-8 bg-blue-50">
        <h4 className="font-semibold text-blue-900 mb-3">During the Tour (10-15 Minutes)</h4>
        <ul className="text-sm space-y-2 text-gray-700">
          <li><strong>Point out safety features:</strong> "Notice the wide hallways—this allows us 
          to accommodate hospital beds and medical equipment for our high-acuity residents."</li>
          <li><strong>Highlight staffing:</strong> "We maintain a 1:3 staff-to-resident ratio, which 
          means your loved one never waits more than 2 minutes for assistance."</li>
          <li><strong>Showcase amenities:</strong> "This is our private dining room where families 
          can host special meals. We also have a spa room for hair care and personal grooming."</li>
          <li><strong>Demonstrate expertise:</strong> "Our RN visits twice weekly to oversee medication 
          management and complex medical needs."</li>
        </ul>
      </div>

      <div className="card my-8 bg-blue-50">
        <h4 className="font-semibold text-blue-900 mb-3">Closing (Final 5 Minutes)</h4>
        <p className="text-sm text-gray-700 italic mb-4">
          "I can see how much you care about [Resident Name]'s quality of life. At [Home Name], 
          we don't just provide care—we provide a clinical management plan tailored to each resident. 
          Our rate of $[X] includes 24-hour supervision, customized nutrition, and RN oversight. 
          We have one suite available, and I'd be happy to reserve it for you through [Date]. 
          Would you like to schedule a second visit to bring [Resident Name] to see the home?"
        </p>
        <p className="text-xs text-gray-600">
          <strong>Why this works:</strong> Creates urgency, emphasizes value, and provides next steps 
          without being pushy.
        </p>
      </div>

      <h2>Part 3: Marketing the "Expertise"</h2>
      <p>
        Using staff credentials (RN/LPN on site) to command higher rates. Expertise is a key 
        differentiator that justifies premium pricing.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Credential-Based Marketing Points</h3>
        <ul className="space-y-3">
          <li>
            <strong>RN Oversight:</strong> "Our Registered Nurse conducts weekly assessments and 
            oversees all complex medical management, ensuring your loved one receives clinical-grade 
            care in a home setting."
          </li>
          <li>
            <strong>Specialized Training:</strong> "All staff are certified in dementia care, 
            wound care, and medication management—not just basic caregiving."
          </li>
          <li>
            <strong>Medical Partnerships:</strong> "We have direct relationships with [Hospital Name] 
            and [Hospice Agency], allowing for seamless medical coordination."
          </li>
          <li>
            <strong>Continuous Education:</strong> "Our team participates in monthly training on 
            the latest care techniques and medical protocols."
          </li>
        </ul>
      </div>

      <h2>Part 4: The "Value Comparison" Worksheet</h2>
      <p>
        When a family says $8,500/month is too much, the Consultant provides the owner with this 
        comparison framework:
      </p>

      <div className="card my-8 bg-green-50">
        <h3 className="text-xl font-semibold text-green-900 mb-4">The Assisted Living Comparison</h3>
        <p className="text-green-800 mb-4">
          "A large facility charges $6,000 for the room, but then 'points' you for every glass of 
          water or help with a shower. Here, our 1:3 staff ratio means your mom never waits more 
          than 2 minutes for help. In a facility, she might wait 20 minutes."
        </p>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Large Facility</th>
              <th>Premium AFH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base Monthly Rate</td>
              <td>$6,000</td>
              <td>$8,500</td>
            </tr>
            <tr>
              <td>Additional Care Charges</td>
              <td>$500 - $1,500/month</td>
              <td>Included</td>
            </tr>
            <tr>
              <td>Staff Response Time</td>
              <td>15-30 minutes</td>
              <td>&lt; 2 minutes</td>
            </tr>
            <tr>
              <td>Staff-to-Resident Ratio</td>
              <td>1:15 to 1:20</td>
              <td>1:3</td>
            </tr>
            <tr>
              <td>Personalized Care</td>
              <td>Limited</td>
              <td>Highly Personalized</td>
            </tr>
            <tr>
              <td><strong>Total Monthly Cost</strong></td>
              <td><strong>$6,500 - $7,500</strong></td>
              <td><strong>$8,500 (all-inclusive)</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>The "Total Cost of Ownership" Argument</h3>
      <div className="card my-8">
        <p className="mb-4">
          Remind families that the AFH price is all-inclusive of:
        </p>
        <ul className="list-disc space-y-2 ml-6">
          <li>Utilities (electric, water, heat, internet)</li>
          <li>All meals and snacks (no à la carte charges)</li>
          <li>24-hour supervision (no hourly charges)</li>
          <li>Laundry and housekeeping</li>
          <li>Medication management</li>
          <li>Personal care assistance</li>
          <li>Activities and social engagement</li>
        </ul>
        <p className="mt-4">
          <strong>At home,</strong> families would still pay for utilities, food, home modifications, 
          and potentially 24/7 caregivers at $25-35/hour = $18,000-25,000/month.
        </p>
      </div>

      <h2>Part 5: The "90-Day Medicaid" Protective Shield</h2>
      <p>
        Owners often go broke because a private-pay resident runs out of money and flips to Medicaid. 
        This must be prevented through proper financial screening.
      </p>

      <div className="card my-8 bg-red-50 border-l-4 border-red-500">
        <h3 className="text-xl font-semibold text-red-900 mb-4">Financial Disclosure Requirements</h3>
        <p className="text-red-800 mb-4">
          During intake, consultants must teach owners to require a "Financial Disclosure" that includes:
        </p>
        <ul className="text-red-800 list-disc space-y-2 ml-6">
          <li>Bank statements (last 3 months)</li>
          <li>Investment account statements</li>
          <li>Monthly income sources (pensions, Social Security, etc.)</li>
          <li>Estimated monthly expenses</li>
          <li>Projected private-pay duration</li>
        </ul>
        <p className="text-red-800 mt-4">
          <strong>If the resident has less than 24 months of private funds:</strong> The owner should 
          consider a higher deposit or a "Private Pay for 2 Years" contract requirement.
        </p>
      </div>

      <h2>Key Takeaways</h2>
      <ul className="list-disc space-y-3 mb-8">
        <li><strong>Referral relationships are gold:</strong> Invest time in building connections with 
        discharge planners, hospice agencies, and wealth managers</li>
        <li><strong>The tour makes or breaks the sale:</strong> Every detail matters—prepare thoroughly</li>
        <li><strong>Expertise justifies premium:</strong> Highlight credentials, training, and medical 
        partnerships</li>
        <li><strong>Value comparison closes deals:</strong> Show families why premium AFH is better 
        than facilities</li>
        <li><strong>Financial screening protects profitability:</strong> Don't accept residents who 
        will quickly convert to Medicaid</li>
      </ul>

      <div className="card bg-blue-50 border-l-4 border-blue-500 mt-8">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Next Steps</h3>
        <p className="text-blue-800">
          Once the resident is identified and the tour is successful, owners must ensure proper 
          documentation and billing to actually get paid. Proceed to <strong>Module 5: The "Cookbook" 
          for Disclosures & Billing</strong>.
        </p>
      </div>
    </ModuleLayout>
  )
}

