import Link from 'next/link'

export default function MenuActivities() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sample Luxury Menu & Activities Schedule
        </h1>
        <p className="text-lg text-gray-600">
          To justify a $9,000 to $12,000 monthly rate, the AFH cannot look or feel like a "facility" 
          or a "nursing home." It must feel like a private estate with high-end hospitality services. 
          This marketing collateral is the "visual proof" of that quality.
        </p>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">The "Signature Living" Weekly Menu</h2>
        <p className="text-gray-600 mb-4">
          <strong>Focus:</strong> Nutrition-dense, fresh ingredients, and "Choice." High-paying 
          families expect organic produce, hydration stations, and customization.
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Meal</th>
                <th>Monday</th>
                <th>Wednesday</th>
                <th>Friday (Signature Seafood)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Breakfast</strong></td>
                <td>Steel-cut oats with fresh berries, walnuts, and local honey.</td>
                <td>Poached eggs on avocado toast with microgreens.</td>
                <td>Smoked salmon bagel with capers, cream cheese, and red onion.</td>
              </tr>
              <tr>
                <td><strong>Lunch</strong></td>
                <td>Roasted tomato bisque with a grilled Havarti and pear sandwich.</td>
                <td>Quinoa power bowl with roasted sweet potatoes and kale.</td>
                <td>Lemon-herb grilled chicken Caesar salad with house-made croutons.</td>
              </tr>
              <tr>
                <td><strong>Afternoon Tea</strong></td>
                <td>Earl Grey tea with warm lemon-poppyseed scones.</td>
                <td>Infused cucumber-mint water and charcuterie plate.</td>
                <td>Iced hibiscus tea with dark chocolate almond clusters.</td>
              </tr>
              <tr>
                <td><strong>Dinner</strong></td>
                <td>Herb-crusted pork tenderloin, garlic mash, and asparagus.</td>
                <td>Pan-seared wild-caught salmon, wild rice pilaf, and lemon broccolini.</td>
                <td>Braised beef short ribs in red wine reduction with root vegetables.</td>
              </tr>
              <tr>
                <td><strong>Evening Treat</strong></td>
                <td>Warm baked apple with cinnamon.</td>
                <td>Greek yogurt with honey drizzle.</td>
                <td>Small-batch vanilla bean gelato.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <h4 className="font-semibold text-green-900 mb-2">The "Luxury" Difference:</h4>
          <ul className="text-green-800 text-sm space-y-1">
            <li><strong>Hydration Stations:</strong> 24/7 access to "Spa Water" (lemon, lime, or berry infused)</li>
            <li><strong>Family Dining:</strong> Residents are invited to "Host" their family for Sunday Brunch 
            (a billable premium service)</li>
            <li><strong>Customization:</strong> All meals can be modified for dietary restrictions, preferences, 
            or cultural preferences</li>
          </ul>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">The "Active Engagement" Weekly Schedule</h2>
        <p className="text-gray-600 mb-4">
          <strong>Focus:</strong> Cognitive stimulation, physical movement, and dignity. Avoid 
          "child-like" crafts (no coloring books).
        </p>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10:00 AM</td>
              <td>Cognitive Vitality</td>
              <td>Current Events & Coffee: Guided discussion on the morning headlines to maintain 
              community connection.</td>
            </tr>
            <tr>
              <td>11:00 AM</td>
              <td>Physical Wellness</td>
              <td>Chair Yoga or Tai Chi: Low-impact movement led by a certified instructor 
              (or specialized video series).</td>
            </tr>
            <tr>
              <td>2:00 PM</td>
              <td>Sensory Engagement</td>
              <td>Horticultural Therapy: Tending to the indoor herb garden or raised outdoor 
              flower beds.</td>
            </tr>
            <tr>
              <td>4:00 PM</td>
              <td>Social Hour</td>
              <td>"Mocktail" Hour: Non-alcoholic sparkling cider and jazz music to reduce 
              "sundowners" anxiety.</td>
            </tr>
            <tr>
              <td>7:00 PM</td>
              <td>Restorative Calm</td>
              <td>Classic Cinema Night: Screening of curated films from the 1940s-60s on a 75" 
              4K screen.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Part 2: The Consultant's "Menu & Activity" Implementation Guide</h2>
        <p className="text-gray-600 mb-4">
          To ensure the owner can deliver on these promises without going over budget, the consultant 
          provides the following "Cooking Book" rules:
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">1. The "Plate Presentation" Rule</h3>
          <p className="text-gray-600 mb-3">
            In a $10k/month home, the food must look like it came from a restaurant.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-800">
              <strong>Tactic:</strong> Use white ceramic plates (no plastic), cloth napkins, and 
              garnish every dinner plate with a sprig of fresh parsley or a lemon wedge. Visual 
              appeal reduces food refusal in dementia patients.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">2. Outsourced Enrichment</h3>
          <p className="text-gray-600 mb-3">
            Owners don't have to do it all.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-green-800">
              <strong>Tactic:</strong> Hire a local music student or a retired yoga teacher for 
              1 hour a week. Marketing this as "Professional Music Therapy" or "Certified Wellness 
              Instruction" justifies a Level 2 or 3 Care Charge.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">3. The "Customized Care" Documentation</h3>
          <p className="text-gray-600 mb-3">
            Every resident should have a "Life History Profile" in their file.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800">
              <strong>Tactic:</strong> If Mr. Smith was an engineer, the activities should involve 
              "tinkering" or mechanical puzzles, not bingo. Families will pay a premium for this 
              level of personalization.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-blue-50 border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Final Wrap-Up: The Consultant's Goal</h3>
        <p className="text-blue-800">
          By the end of this curriculum, your consultants will have moved an AFH owner from a 
          "survival mindset" to a "thrival mindset." 1. Select the right location (High-wealth). 
          2. Attract the right client (Private pay). 3. Charge the right price (Value-based/Acuity-based). 
          4. Deliver the right experience (Luxury/Boutique).
        </p>
      </div>

      <div className="card bg-gray-50 mt-8">
        <h3 className="text-xl font-semibold mb-2">Related Resources</h3>
        <ul className="text-gray-700 space-y-2">
          <li>
            <Link href="/module-4" className="text-primary-600 underline hover:text-primary-700">
              Module 4: Marketing to the "Golden" Resident
            </Link>
          </li>
          <li>
            <Link href="/marketing-scripts" className="text-primary-600 underline hover:text-primary-700">
              Marketing Scripts for Hospital Discharge Planners
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

