'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Exam() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: 'The "5-Mile Rule" suggests that private-pay families prioritize proximity. If you are consulting an owner looking at a property in a zip code where the median home value is $350,000, but 10 miles away is a zip code with a $1.2M median, what is your advice?',
      options: [
        'A) Open in the $350k area because the mortgage is lower.',
        'B) Open in the $350k area but market exclusively to the $1.2M area.',
        'C) Advise the owner to relocate the search to the $1.2M area to capture the "Affluence Radius" and justify $9k+ rates.',
      ],
      correct: 'C',
      explanation: 'The $1.2M area represents high-wealth demographics that can support premium pricing. The 5-Mile Rule means families will choose homes near their own residence, so being in the affluent area is essential.',
    },
    {
      id: 2,
      question: 'You find an area with 15 AFHs within 3 miles. 12 of them accept Medicaid. Is this a "saturated" market or an "opportunity" market? Explain why.',
      type: 'essay',
      correct: 'opportunity',
      explanation: 'It is an opportunity market for a High-End Private Pay home, as there is a clear lack of premium competition. Most homes are Medicaid-focused, leaving a gap for premium private-pay services.',
    },
    {
      id: 3,
      question: 'A resident is currently paying a base rate of $7,000. They have become incontinent and now require 2-person transfers. Based on the "Cookbook" menu, which fees should the consultant advise the owner to add?',
      options: [
        'A) Nothing; it\'s covered in the base rate.',
        'B) A "Heavy Care" surcharge (approx. $500–$1,000) and a "Two-Person Assist" fee (approx. $1,500).',
        'C) Tell the family they must move out.',
      ],
      correct: 'B',
      explanation: 'Increased care needs require additional staffing and resources. The Heavy Care surcharge covers increased incontinence management, and the Two-Person Assist fee covers the additional caregiver required on shift.',
    },
    {
      id: 4,
      question: 'Calculate the Daily Rate for a resident whose monthly private pay contract is $8,500.',
      type: 'calculation',
      correct: '279.45',
      explanation: 'Formula: ($8,500 × 12) ÷ 365 = $279.45 per day',
    },
    {
      id: 5,
      question: 'According to the Disclosure of Charges, when must the "Disclosure of Charges" form be given to a resident?',
      options: [
        'A) 30 days after they move in.',
        'B) Prior to or upon admission.',
        'C) Only if they ask for it.',
      ],
      correct: 'B',
      explanation: 'WAC requires that all charges be disclosed prior to or upon admission. This protects both the resident and the owner by establishing clear expectations.',
    },
    {
      id: 6,
      question: 'An owner wants to raise rates by $500/month for all residents due to rising food costs. What is the legal requirement for notice?',
      type: 'essay',
      correct: '30 days',
      explanation: 'RCW requires 30 days written notice to the resident and their representative before any rate increase takes effect.',
    },
    {
      id: 7,
      question: 'A Hospital Discharge Planner calls with a "hard-to-place" resident who has a high budget but requires complex wound care. What is the "Consultant\'s Secret Sauce" move for the owner?',
      options: [
        'A) Ask the planner to send the paperwork and review it next week.',
        'B) Offer to be at the hospital within 4 hours to conduct a bedside assessment.',
        'C) Tell the planner to call back when the resident is "easier" to care for.',
      ],
      correct: 'B',
      explanation: 'The 4-hour response time demonstrates reliability and makes the owner the discharge planner\'s preferred partner. Speed and responsiveness are critical in hospital discharge scenarios.',
    },
    {
      id: 8,
      question: 'Which of these amenities is most likely to justify a "Luxury" price point during a tour?',
      options: [
        'A) A clean shared bathroom.',
        'B) A private suite with a "walk-in" shower, a curated organic menu, and a 1:3 staffing ratio.',
        'C) Having a television in the common area.',
      ],
      correct: 'B',
      explanation: 'Luxury positioning requires premium amenities: private suites, high-end finishes, gourmet meals, and superior staffing ratios. These justify premium pricing.',
    },
  ]

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer })
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      const userAnswer = answers[q.id]?.toLowerCase().trim()
      const correctAnswer = q.correct.toLowerCase().trim()
      
      if (q.type === 'essay' || q.type === 'calculation') {
        if (userAnswer && userAnswer.includes(correctAnswer)) {
          correct++
        }
      } else {
        if (userAnswer === correctAnswer) {
          correct++
        }
      }
    })
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const score = showResults ? calculateScore() : null

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AFH Success Consultant: Final Certification Assessment
        </h1>
        <p className="text-lg text-gray-600">
          This exam is designed to test both the technical knowledge and the strategic "gut instinct" 
          of your prospective advisors. A consultant who passes this exam is ready to guide an owner 
          through a high-stakes, high-profit business launch.
        </p>
      </div>

      {!showResults ? (
        <div className="space-y-8">
          {questions.map((q, index) => (
            <div key={q.id} className="card">
              <h3 className="text-xl font-semibold mb-4">
                Question {index + 1}: {q.question}
              </h3>
              
              {q.type === 'essay' ? (
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  rows={4}
                  placeholder="Type your answer here..."
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                />
              ) : q.type === 'calculation' ? (
                <div>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your calculation (e.g., $279.45)"
                    value={answers[q.id] || ''}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Formula: (Monthly Rate × 12) ÷ 365 = Daily Rate
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {q.options?.map((option, optIndex) => (
                    <label key={optIndex} className="flex items-start cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option.charAt(0)}
                        checked={answers[q.id] === option.charAt(0)}
                        onChange={() => handleAnswerChange(q.id, option.charAt(0))}
                        className="mt-1 mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="card bg-blue-50 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Case Study: The "Final Boss"</h3>
            <p className="text-blue-800 mb-4">
              <strong>Scenario:</strong> An owner is grossing $30,000/month with 6 Medicaid residents. 
              They are exhausted, have high staff turnover, and are barely breaking even.
            </p>
            <p className="text-blue-800 mb-4">
              <strong>Task:</strong> Outline a 3-step "Conversion Plan" the consultant would provide 
              to transition this home to a $50,000/month private-pay model.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Step 1:</label>
                <textarea
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={2}
                  placeholder="e.g., Physical upgrades/Curb appeal"
                  value={answers[9] || ''}
                  onChange={(e) => handleAnswerChange(9, e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Step 2:</label>
                <textarea
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={2}
                  placeholder="e.g., Targeted marketing to high-end Hospice/Discharge planners"
                  value={answers[10] || ''}
                  onChange={(e) => handleAnswerChange(10, e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Step 3:</label>
                <textarea
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={2}
                  placeholder="e.g., Implementation of tiered Level of Care pricing"
                  value={answers[11] || ''}
                  onChange={(e) => handleAnswerChange(11, e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="btn-primary w-full text-lg py-4"
          >
            Submit Exam
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className={`card ${score && score.percentage >= 85 ? 'bg-green-50 border-l-4 border-green-500' : score && score.percentage >= 70 ? 'bg-yellow-50 border-l-4 border-yellow-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
            <h2 className="text-3xl font-bold mb-4">Your Results</h2>
            <p className="text-2xl mb-2">
              Score: {score?.correct} / {score?.total} ({score?.percentage}%)
            </p>
            {score && score.percentage >= 85 && (
              <p className="text-green-800 font-semibold text-lg">
                Master Consultant. Ready to lead high-level business strategy.
              </p>
            )}
            {score && score.percentage >= 70 && score.percentage < 85 && (
              <p className="text-yellow-800 font-semibold text-lg">
                Junior Consultant. Needs more work on the "Offensive Pricing" mindset.
              </p>
            )}
            {score && score.percentage < 70 && (
              <p className="text-red-800 font-semibold text-lg">
                Care-Giver Mindset. Needs to re-study Module 1 and 3 to understand the business-owner perspective.
              </p>
            )}
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Answer Review</h2>
            {questions.map((q, index) => (
              <div key={q.id} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
                <h3 className="font-semibold mb-2">Question {index + 1}</h3>
                <p className="text-gray-700 mb-3">{q.question}</p>
                <div className="bg-gray-50 p-3 rounded mb-2">
                  <p className="text-sm">
                    <strong>Your Answer:</strong> {answers[q.id] || 'Not answered'}
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm text-green-800">
                    <strong>Correct Answer:</strong> {q.correct}
                  </p>
                  <p className="text-sm text-green-700 mt-1">{q.explanation}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-blue-50 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Next Steps</h3>
            <p className="text-blue-800 mb-4">
              {score && score.percentage >= 85
                ? 'Congratulations! You have mastered the AFH Success Consultant curriculum. You are ready to guide owners toward financial success.'
                : 'Review the modules where you struggled and retake the exam when ready.'}
            </p>
            <div className="flex gap-4">
              <Link href="/handbook" className="btn-primary">
                Review Handbook
              </Link>
              <Link href="/" className="btn-secondary">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

