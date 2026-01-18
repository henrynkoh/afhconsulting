import Link from 'next/link'

export default function MarketingScripts() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Marketing Scripts for Hospital Discharge Planners
        </h1>
        <p className="text-lg text-gray-600">
          To a hospital discharge planner or a social worker, a "bed" is a solution to their 
          problem. To an AFH owner, the "right" resident is the solution to their financial goal. 
          This script is designed for the AFH Success Consultant to teach owners how to pitch 
          themselves as a premium, specialized solution.
        </p>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Professional Outreach Strategy</h2>
        <p className="text-gray-600 mb-4">
          <strong>Target Audience:</strong> Case Managers, Hospital Discharge Planners, and Hospice 
          Social Workers at high-end medical centers.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">The "Value Proposition" (The Pitch)</h3>
          <p className="text-blue-800 mb-2">
            <strong>Don't say:</strong> "I have an open bed and I provide good care."
          </p>
          <p className="text-blue-800">
            <strong>Do say:</strong> "I have a high-acuity private suite available with a 1:3 
            staffing ratio, specializing in [Dementia/Complex Wound Care/Hospice]."
          </p>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Template 1: The Initial Introduction (The "Elevator Pitch")</h2>
        <p className="text-gray-600 mb-4">
          <strong>Goal:</strong> To get on their internal referral list.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="italic text-gray-700 leading-relaxed">
            "Hi [Name], my name is [Owner Name] and I'm the Administrator of [Home Name] Adult 
            Family Home in [City].
            <br /><br />
            I'm reaching out because we've specifically designed our home to support families 
            looking for a higher tier of boutique care than what they find in large facilities. 
            We maintain a 1:3 staff-to-resident ratio, which allows us to take those complex 
            'heavy care' cases—like two-person transfers or advanced dementia—that usually get 
            stuck in the discharge process.
            <br /><br />
            We currently have one private executive suite available. Do you have any families 
            currently looking for a high-care, private-pay placement where they won't get lost 
            in the crowd?"
          </p>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Template 2: The "Problem Solver" Script (High-Acuity Focus)</h2>
        <p className="text-gray-600 mb-4">
          <strong>Goal:</strong> To be the first call for the "hard-to-place" (and high-paying) residents.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="italic text-gray-700 leading-relaxed">
            "Hi [Name], I'm calling because I know how difficult it is to find a home for residents 
            with [Specific Condition: e.g., Insulin-dependent Diabetes or Stage 3 Wounds].
            <br /><br />
            Our home is specialized in Nurse-Delegated care. We are equipped to handle complex 
            medication management and 24/7 monitoring. If you have a private-pay family that is 
            struggling to find a home that can actually handle their medical complexity while 
            maintaining a luxury environment, please send them my way. We can do a bedside 
            assessment within 4 hours to help speed up your discharge."
          </p>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Template 3: The "Concierge" Follow-Up (After a Tour)</h2>
        <p className="text-gray-600 mb-4">
          <strong>Goal:</strong> To close the deal with a family referred by the hospital.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="italic text-gray-700 leading-relaxed">
            "It was a pleasure meeting your family today. I know the transition from hospital to 
            home is stressful.
            <br /><br />
            At [Home Name], we don't just provide a room; we provide a clinical management plan. 
            Our rate includes [24-hour supervision, customized nutrition, and RN oversight]. 
            We've reserved the suite for you through [Day], and we can coordinate the medical 
            transport directly with the hospital to make this seamless for you."
          </p>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Consultant's "Secret Sauce": 3 Tactics for Success</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">1. The "Gift of Time" (The 4-Hour Rule)</h3>
          <p className="text-gray-600 mb-3">
            Teach the owner that discharge planners are under massive pressure to "clear the bed."
          </p>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-green-800">
              <strong>The Tactic:</strong> Tell the planner: "If you call me with a lead, I will 
              be at the hospital within 4 hours to do the assessment." This reliability makes the 
              owner the planner's favorite partner.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">2. The Luxury Marketing Folder</h3>
          <p className="text-gray-600 mb-3">
            Owners shouldn't just hand out a business card. They need a high-quality folder containing:
          </p>
          <ul className="list-disc space-y-2 ml-6 text-gray-700">
            <li>A Professional Bio of the owner/staff (highlighting LPN/RN/CNA credentials)</li>
            <li>A Sample Menu (showing "Farm-to-Table" or "Chef-Prepared" meals)</li>
            <li>The "Level of Care" Pricing Sheet (to set the expectation of a premium rate immediately)</li>
            <li>Photos of the home (professional, not cell phone snapshots)</li>
            <li>Testimonials from current families (with permission)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">3. The "Preferred Referral" Bonus</h3>
          <p className="text-gray-600 mb-3">
            While you cannot pay "kickbacks" for referrals (which is illegal), you can provide 
            value back to the discharge planners.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800">
              <strong>The Tactic:</strong> Host a "Lunch & Learn" for the hospital staff. Bring 
              high-end catering and spend 15 minutes educating them on the benefits of AFH vs. 
              Large Facilities for dementia patients. This builds professional authority and keeps 
              your name top-of-mind.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-blue-50 border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Related Resources</h3>
        <ul className="text-blue-800 space-y-2">
          <li>
            <Link href="/module-4" className="underline hover:text-blue-900">
              Module 4: Marketing to the "Golden" Resident
            </Link>
          </li>
          <li>
            <Link href="/menu-activities" className="underline hover:text-blue-900">
              Luxury Menu & Activities Schedule
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

