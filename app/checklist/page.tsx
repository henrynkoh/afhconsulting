import Link from 'next/link'

export default function Checklist() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          New Resident Financial Intake Checklist
        </h1>
        <p className="text-lg text-gray-600">
          This checklist is designed for the Consultant to hand over to the AFH Owner. Its purpose 
          is to ensure that from "Day 0," every level of care and every administrative cost is 
          captured, disclosed, and billed correctly to maximize the home's profit margin.
        </p>
      </div>

      <div className="card bg-yellow-50 border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold text-yellow-900 mb-2">Consultant Pro-Tip</h3>
        <p className="text-yellow-800">
          "Always remind the owner: If it isn't documented in the Disclosure of Charges, you 
          cannot charge for it later without a 30-day written notice. Capture the 'Intensive' 
          needs now, or the business will absorb the cost of the extra labor."
        </p>
      </div>

      <div className="card mb-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Resident Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Resident Name:
              </label>
              <div className="border-b-2 border-dashed border-gray-300 pb-1">
                __________________________
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admission Date:
              </label>
              <div className="border-b-2 border-dashed border-gray-300 pb-1">
                __________________________
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Phase 1: The "Soft" Intake & Documentation</h2>
        <p className="text-gray-600 mb-4">
          Before the resident moves in, ensure these legal and financial anchors are in place.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Assessment Review:</strong> Has the CARE assessment or private assessment been 
              reviewed to determine the true Level of Care (Level 1–4)?
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Disclosure of Charges signed:</strong> Does the resident/family have the 
              signed WAC-compliant disclosure form? (Reference: Module 5)
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Admission Fee Collected:</strong> Has the non-refundable admission fee (for 
              assessment and administrative setup) been paid?
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Security Deposit/Last Month's Rent:</strong> Are funds held in a separate 
              account for move-out cleaning or damage?
            </div>
          </li>
        </ul>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Phase 2: Level of Care (LOC) Verification</h2>
        <p className="text-gray-600 mb-4">
          Don't leave money on the table by underestimating the workload.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Night-Time Needs:</strong> Does the resident require "night-watch" or 
              "night-wanderer" supervision? (Add premium to daily rate).
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Incontinence Management:</strong> Is the resident "Total Care" for 
              bowel/bladder? (Select: Intensive Care Level 3).
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Feeding/Nutrition:</strong> Are there special diets (low sodium, mechanical 
              soft) or the need for a 2-person assist/Hoyer lift for transfers?
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Memory Care:</strong> Is there a surcharge for "Heavy Lifting, Dementia, 
              or Alzheimer's" behaviors? (Reference: Module 3)
            </div>
          </li>
        </ul>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Phase 3: The "Add-On" Service Audit</h2>
        <p className="text-gray-600 mb-4">
          Review this list with the family to determine what is NOT covered in the base rate.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Nurse Delegation:</strong> If the resident requires meds that must be 
              delegated by an RN, has the delegation fee been added?
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Supplies Pass-Through:</strong> Are you billing for incontinence briefs, 
              gloves, and specialty wipes, or is the family providing them?
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Medication Management:</strong> Is the pharmacy bubble-packing, or is the 
              staff manually managing complex med sets?
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Special Services:</strong> Will the home provide blood glucose monitoring, 
              insulin injections, or oxygen management? (Charge monthly/daily fee per Module 5).
            </div>
          </li>
        </ul>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Phase 4: Billing Setup & Terms</h2>
        <p className="text-gray-600 mb-4">
          Set the expectation for a professional, "No-Late-Payment" relationship.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Daily Rate Calculation:</strong> MonthlyRate × 12 ÷ 365 = DailyRate
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Billing Cycle:</strong> Confirmed that invoices go out on the 20th and are 
              due by the 1st of the upcoming month.
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Medicaid Conversion Clause:</strong> Has the family signed the acknowledgment 
              that they must provide 90 days' notice before requesting a Medicaid conversion?
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
            <div>
              <strong>Refund Policy:</strong> Has the "minimum stay" or "refund of prepaid charges" 
              policy been initialed?
            </div>
          </li>
        </ul>
      </div>

      <div className="card bg-blue-50 border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Related Resources</h3>
        <ul className="text-blue-800 space-y-2">
          <li>
            <Link href="/module-5" className="underline hover:text-blue-900">
              Module 5: The "Cookbook" for Disclosures & Billing
            </Link>
          </li>
          <li>
            <Link href="/handbook" className="underline hover:text-blue-900">
              Consultant Handbook
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

