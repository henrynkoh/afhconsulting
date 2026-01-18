import ModuleLayout from '@/components/ModuleLayout'

export default function Module6() {
  return (
    <ModuleLayout
      moduleNumber={6}
      moduleTitle="Long-Term Financial Health & Compliance"
      prevModuleHref="/module-5"
    >
      <div className="card bg-primary-50 border-l-4 border-primary-600 mb-8">
        <h3 className="text-xl font-bold text-primary-900 mb-2">Module Goal</h3>
        <p className="text-primary-800">
          Protecting the business from audits and "Medicaid Conversion" traps. Managing prepaid 
          charges, understanding legal requirements, and implementing annual rate increases.
        </p>
      </div>

      <h2>Part 1: The 90-Day Notice for Medicaid Conversion</h2>
      <p>
        Understanding the legal requirements for Medicaid conversion is critical. Owners cannot 
        simply convert a private-pay resident to Medicaid without proper notice and documentation.
      </p>

      <div className="card my-8 bg-red-50 border-l-4 border-red-500">
        <h3 className="text-xl font-semibold text-red-900 mb-4">RCW 70.129.150 Requirements</h3>
        <p className="text-red-800 mb-4">
          According to Washington State law, if a resident or their representative requests 
          conversion to Medicaid, the owner must provide:
        </p>
        <ol className="text-red-800 space-y-2 list-decimal ml-6">
          <li><strong>90 days written notice</strong> before the conversion can take effect</li>
          <li><strong>Written explanation</strong> of the Medicaid application process</li>
          <li><strong>Documentation</strong> that the resident meets Medicaid eligibility requirements</li>
          <li><strong>Continued private-pay services</strong> during the 90-day notice period</li>
        </ol>
        <p className="text-red-800 mt-4">
          <strong>Critical:</strong> The owner cannot evict the resident during this period, and 
          must continue providing care at the private-pay rate until Medicaid is approved and 
          the 90-day period has elapsed.
        </p>
      </div>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Protective Measures: The "Private Pay Contract"</h3>
        <p className="mb-4">
          To protect against unexpected Medicaid conversions, consultants should advise owners to 
          include a "Private Pay Commitment" clause in the admission agreement:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm">
          <p className="font-semibold mb-2">Sample Clause:</p>
          <p className="italic text-gray-700">
            "Resident and/or Representative agree to maintain private-pay status for a minimum of 
            [24] months from the date of admission. Should the resident request conversion to 
            Medicaid prior to this period, the resident agrees to pay a conversion fee of $[X] 
            to cover the administrative costs and lost revenue associated with the conversion."
          </p>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Note:</strong> Consult with an attorney to ensure this clause is enforceable 
          in your jurisdiction and complies with state regulations.
        </p>
      </div>

      <h2>Part 2: Managing Prepaid Charges</h2>
      <p>
        Handling deposits and refunds according to state law (RCW 70.129.150) to avoid legal 
        penalties and maintain financial stability.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Prepaid Charge Categories</h3>
        <table>
          <thead>
            <tr>
              <th>Charge Type</th>
              <th>Refundable?</th>
              <th>Legal Requirements</th>
              <th>Best Practice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Admission Fee</strong></td>
              <td>No (non-refundable)</td>
              <td>Must be clearly stated in contract</td>
              <td>Frame as "setup fee" for services rendered</td>
            </tr>
            <tr>
              <td><strong>Security Deposit</strong></td>
              <td>Yes (with conditions)</td>
              <td>Must be held in separate account</td>
              <td>Return within 14 days of move-out, minus damages</td>
            </tr>
            <tr>
              <td><strong>Last Month's Rent</strong></td>
              <td>Yes (if unused)</td>
              <td>Must be applied to final month or refunded</td>
              <td>Apply to final month, refund any excess</td>
            </tr>
            <tr>
              <td><strong>Prepaid Care Fees</strong></td>
              <td>Yes (prorated)</td>
              <td>Refund unused portion within 30 days</td>
              <td>Calculate daily rate and refund unused days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card my-8 bg-yellow-50 border-l-4 border-yellow-500">
        <h4 className="font-semibold text-yellow-900 mb-2">Critical Compliance Rule</h4>
        <p className="text-yellow-800">
          <strong>All prepaid charges must be held in a separate, interest-bearing account.</strong> 
          The owner cannot commingle these funds with operating accounts. Failure to comply can 
          result in fines, license suspension, or legal action.
        </p>
      </div>

      <h3>Refund Calculation Example</h3>
      <div className="card my-8 bg-blue-50">
        <h4 className="font-semibold text-blue-900 mb-3">Scenario: Resident Moves Out Mid-Month</h4>
        <div className="text-sm text-blue-800 space-y-2">
          <p><strong>Monthly Rate:</strong> $8,500</p>
          <p><strong>Daily Rate:</strong> ($8,500 × 12) ÷ 365 = $279.45/day</p>
          <p><strong>Resident Paid:</strong> $8,500 (full month)</p>
          <p><strong>Resident Stayed:</strong> 15 days</p>
          <p><strong>Amount Owed:</strong> 15 × $279.45 = $4,191.75</p>
          <p><strong>Refund Due:</strong> $8,500 - $4,191.75 = <strong>$4,308.25</strong></p>
          <p className="mt-3 text-xs">
            <strong>Timeline:</strong> Refund must be issued within 30 days of move-out date, 
            per RCW 70.129.150.
          </p>
        </div>
      </div>

      <h2>Part 3: Annual Rate Increases</h2>
      <p>
        Setting the expectation with families that rates will increase 3–5% annually to cover 
        inflation and staffing costs. This is essential for long-term financial viability.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Rate Increase Justification</h3>
        <table>
          <thead>
            <tr>
              <th>Cost Category</th>
              <th>Annual Increase</th>
              <th>Impact on $8,500 Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Food & Supplies</td>
              <td>4-6%</td>
              <td>+$340 - $510/year</td>
            </tr>
            <tr>
              <td>Staff Wages</td>
              <td>3-5%</td>
              <td>+$255 - $425/year</td>
            </tr>
            <tr>
              <td>Utilities</td>
              <td>5-8%</td>
              <td>+$425 - $680/year</td>
            </tr>
            <tr>
              <td>Insurance & Licensing</td>
              <td>2-4%</td>
              <td>+$170 - $340/year</td>
            </tr>
            <tr>
              <td>Maintenance & Repairs</td>
              <td>3-5%</td>
              <td>+$255 - $425/year</td>
            </tr>
            <tr className="font-semibold">
              <td><strong>Total Annual Increase Needed</strong></td>
              <td><strong>3-5%</strong></td>
              <td><strong>+$255 - $425/month</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card my-8 bg-green-50 border-l-4 border-green-500">
        <h4 className="font-semibold text-green-900 mb-3">Best Practice: Annual Rate Increase Letter</h4>
        <div className="text-sm text-green-800 space-y-3">
          <p>
            <strong>Timing:</strong> Send 60 days before the increase takes effect (allows families 
            time to adjust budgets)
          </p>
          <p>
            <strong>Tone:</strong> Professional, transparent, and justified
          </p>
          <p>
            <strong>Content:</strong> Explain the increase in the context of rising costs and 
            commitment to maintaining quality
          </p>
          <p>
            <strong>Frequency:</strong> Annual increases are expected and normal—frame as standard 
            business practice
          </p>
        </div>
      </div>

      <h3>Sample Annual Rate Increase Letter</h3>
      <div className="card my-8 bg-blue-50">
        <div className="text-sm text-gray-700 space-y-3 italic">
          <p>
            <strong>Date:</strong> [Date - 60 days before increase]
          </p>
          <p>
            <strong>To:</strong> [Family Member Name]
          </p>
          <p>
            <strong>Re:</strong> Annual Rate Adjustment for [Resident Name]
          </p>
          <p>
            We hope this letter finds you and [Resident Name] well. As we approach another year 
            of providing care, we want to inform you of our annual rate adjustment, which will 
            take effect on [Date].
          </p>
          <p>
            To maintain the high standard of care and services you've come to expect, we must 
            adjust our rates to keep pace with rising costs. Over the past year, we've experienced 
            increases in:
          </p>
          <ul className="list-disc ml-6">
            <li>Food and supply costs (5% increase)</li>
            <li>Staff wages and benefits (4% increase to retain quality caregivers)</li>
            <li>Utilities and insurance (6% increase)</li>
            <li>Licensing and compliance requirements</li>
          </ul>
          <p>
            Effective [Date], the monthly rate for [Resident Name] will increase from $[Current Rate] 
            to $[New Rate], representing a [X]% adjustment that aligns with industry standards 
            and cost increases.
          </p>
          <p>
            We remain committed to providing exceptional care and value, and this adjustment ensures 
            we can continue to maintain our 1:3 staff ratio, premium meals, and specialized services 
            that set us apart.
          </p>
          <p>
            If you have any questions or concerns, please don't hesitate to contact us. We appreciate 
            your understanding and continued trust in our care.
          </p>
          <p>
            Sincerely,<br />
            [Owner Name]<br />
            [Home Name] Adult Family Home
          </p>
        </div>
      </div>

      <h2>Part 4: Audit Protection & Documentation</h2>
      <p>
        Protecting the business from state audits and compliance issues through proper documentation 
        and record-keeping.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Required Documentation Checklist</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Disclosure of Charges:</strong> Signed copy for each resident, updated when 
              rates change
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Admission Agreements:</strong> Complete contracts with all terms clearly stated
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Financial Records:</strong> Separate accounts for prepaid charges, detailed 
              invoicing, payment receipts
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Care Plans:</strong> Updated assessments, level-of-care documentation, 
              medical coordination records
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Rate Change Notices:</strong> 30-day notices for all rate increases, with 
              proof of delivery
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">✓</span>
            <div>
              <strong>Medicaid Conversion Documentation:</strong> 90-day notices, application 
              records, communication logs
            </div>
          </li>
        </ul>
      </div>

      <h2>Part 5: Long-Term Financial Planning</h2>
      <p>
        Building a financially sustainable business requires planning beyond the first year. 
        Consultants must teach owners to think strategically about growth, reserves, and exit planning.
      </p>

      <div className="card my-8">
        <h3 className="text-xl font-semibold mb-4">Financial Health Metrics</h3>
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
              <td><strong>Operating Reserve</strong></td>
              <td>6 months expenses</td>
              <td>Covers vacancies, emergencies, unexpected costs</td>
            </tr>
            <tr>
              <td><strong>Private Pay Ratio</strong></td>
              <td>80%+ of residents</td>
              <td>Ensures profitability and reduces Medicaid risk</td>
            </tr>
            <tr>
              <td><strong>Occupancy Rate</strong></td>
              <td>95%+</td>
              <td>Maximizes revenue and operational efficiency</td>
            </tr>
            <tr>
              <td><strong>Net Profit Margin</strong></td>
              <td>25-35%</td>
              <td>Allows for reinvestment and owner compensation</td>
            </tr>
            <tr>
              <td><strong>Days Sales Outstanding</strong></td>
              <td>&lt; 15 days</td>
              <td>Ensures healthy cash flow</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Takeaways</h2>
      <ul className="list-disc space-y-3 mb-8">
        <li><strong>Medicaid conversion requires 90-day notice:</strong> Understand and comply with 
        RCW 70.129.150 requirements</li>
        <li><strong>Prepaid charges must be protected:</strong> Separate accounts, proper documentation, 
        timely refunds</li>
        <li><strong>Annual rate increases are essential:</strong> 3-5% increases maintain profitability 
        and quality</li>
        <li><strong>Documentation protects the business:</strong> Maintain complete records for audits 
        and compliance</li>
        <li><strong>Financial planning ensures sustainability:</strong> Build reserves, monitor metrics, 
        plan for growth</li>
      </ul>

      <div className="card bg-green-50 border-l-4 border-green-500 mt-8">
        <h3 className="text-xl font-semibold text-green-900 mb-2">Congratulations!</h3>
        <p className="text-green-800 mb-4">
          You've completed all six modules of the AFH Financial Masterclass. You now have the 
          knowledge to guide owners toward financial success.
        </p>
        <p className="text-green-800">
          Next steps: Review the additional resources (checklists, templates, marketing scripts) 
          and take the <strong>Certification Exam</strong> to validate your expertise.
        </p>
      </div>
    </ModuleLayout>
  )
}

