"use client";
import Header from '@/components/Header';
import { useState, FormEvent } from "react";

export default function ScholarshipAgreementForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    FullName: "",
    PhoneNumber: "",
    EmailAddress: "",
    GuidelinesCommitment: false,
    ReplacementPolicy: false,
    Declaration: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // REPLACE WITH YOUR ACTUAL GOOGLE WEB APP URL
    const GOOGLE_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxig5m2iUT8hxPU2RiLEdNsfjPfhQ5d9PFm2YIMg40Ar0kBH6tfCZ8o1okuVkgiBvOWGg/exec";

    try {
      await fetch(GOOGLE_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitStatus("success");
      setFormData({
        FullName: "",
        PhoneNumber: "",
        EmailAddress: "",
        GuidelinesCommitment: false,
        ReplacementPolicy: false,
        Declaration: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans relative">
      
      {/* --- POPUP OVERLAY SECTION --- */}
      {/* --- POPUP OVERLAY SECTION --- */}
      {submitStatus !== "idle" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 text-center transform transition-all">
            {submitStatus === "success" ? (
              <>
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Success!</h3>
                <p className="text-gray-600 mb-6">Your responses have been successfully recorded.</p>
              </>
            ) : (
              <>
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                  <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Submission Error</h3>
                <p className="text-gray-600 mb-6">There was an error submitting your form. Please try again.</p>
              </>
            )}
            
            {/* Action Buttons inside Popup */}
            <div className="flex flex-col space-y-3 mt-2">
              <a
                href="https://ictfoundation.org.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block bg-[#0B57D0] hover:bg-[#0948A7] text-white font-medium py-2.5 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B57D0]"
              >
                Visit IFN Website
              </a>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
      {/* ----------------------------- */}
      {/* ----------------------------- */}

      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <img 
            src="/images/events/banner.jpg" 
            alt="Grow with Google Scholarship Program - ICT Foundation Nepal Banner" 
            className="w-full h-auto object-cover"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Main Title Card */}
          <div className="bg-white rounded-lg shadow-sm border-t-8 border-[#0B57D0] p-6 sm:p-8">
            <h1 className="text-3xl font-medium text-gray-950 mb-4">
              Google Career Certificates Scholarship Program 2026- Scholarship Acceptance & Commitment Agreement
            </h1>
            <div className="text-sm text-gray-800 space-y-4 text-justify">
              <p>
                Congratulations on being selected for the Google Career Certificates Scholarship 2026. This form serves as your official Acceptance & Commitment Agreement. Please review the guidelines, scholarship terms, and declaration carefully before providing your consent.  Failure to complete and submit this form within 7 days of receiving the scholarship offer may result in the scholarship being revoked and reassigned to an eligible applicant on the waiting list.
              </p>
              <p>
                ICT Foundation Nepal (IFN), in collaboration with Mero Job Limited and Google LLC, is offering up to 500 fully funded scholarship seats for the Google Career Certificates Program. Gain globally recognized skills through Google-designed professional certificate x`courses delivered via Coursera and enhance your career prospects in today's digital economy.
              </p>
              <div className="text-gray-700 mt-4">
                <p className="italic mb-3">
                  Stay connected with IFN for program updates, learning opportunities, and future announcements:
                </p>
                
                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-6 sm:items-center">
                  
                  {/* Website */}
                  <a href="https://ictfoundation.org.np/" className="flex items-center gap-2 text-[#0B57D0] hover:underline hover:text-[#0948A7] transition-colors w-fit group" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-[#0B57D0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                    <span>Website</span>
                  </a>

                  {/* Facebook */}
                  <a href="https://www.facebook.com/ictfoundationnepal2026/" className="flex items-center gap-2 text-[#0B57D0] hover:underline hover:text-[#0948A7] transition-colors w-fit group" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1877F2] transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/ictfoundationnepal" className="flex items-center gap-2 text-[#0B57D0] hover:underline hover:text-[#0948A7] transition-colors w-fit group" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-[#E4405F] transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://linkedin.com/company/ict-foundation-nepal" className="flex items-center gap-2 text-[#0B57D0] hover:underline hover:text-[#0948A7] transition-colors w-fit group" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-[#0A66C2] transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                </div>
              </div>
              <div className="pt-2 text-red-600 text-sm font-medium">* Indicates required question</div>
            </div>
          </div>

          {/* Participant Information Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#0B57D0] text-white px-6 py-4">
              <h2 className="text-xl font-medium">Participant Information</h2>
            </div>
            <div className="p-6 sm:p-8 space-y-8">
              
              <div>
                <label className="block text-base font-medium text-gray-950 mb-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="FullName"
                  required
                  placeholder="Your answer"
                  value={formData.FullName}
                  onChange={handleChange}
                  className="w-full md:w-1/2 border-0 border-b border-gray-300 focus:border-[#0B57D0] focus:ring-0 px-0 py-2 bg-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-950 mb-1">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="PhoneNumber"
                  required
                  placeholder="Your answer"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  className="w-full md:w-1/2 border-0 border-b border-gray-300 focus:border-[#0B57D0] focus:ring-0 px-0 py-2 bg-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-950 mb-1">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <p className="text-sm text-gray-700 mb-3 italic">
                  Please use the same email address that you used in your scholarship application and to which this scholarship acceptance form was sent.
                </p>
                <input
                  type="email"
                  name="EmailAddress"
                  required
                  placeholder="Your answer"
                  value={formData.EmailAddress}
                  onChange={handleChange}
                  className="w-full md:w-1/2 border-0 border-b border-gray-300 focus:border-[#0B57D0] focus:ring-0 px-0 py-2 bg-transparent transition-colors"
                />
              </div>

            </div>
          </div>

          {/* Guidelines & Commitment Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#0B57D0] text-white px-6 py-4">
              <h2 className="text-xl font-medium">Scholarship Recipient Guidelines & Commitment</h2>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-gray-800 italic">
                Please review the responsibilities and expectations of scholarship recipients and confirm your commitment to actively participate and complete the program.<span className="text-red-600">*</span>
              </p>
              
              <ul className="space-y-4 text-sm text-gray-900 list-disc pl-5">
                <li>I agree to actively participate in my designated Google Career Certificate course.</li>
                <li>I agree to maintain regular engagement throughout the course duration.</li>
                <li>I agree to complete the course within the prescribed timeframe.</li>
                <li>I agree to respond to program communications and monitoring activities.</li>
              </ul>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="GuidelinesCommitment"
                  name="GuidelinesCommitment"
                  required
                  checked={formData.GuidelinesCommitment}
                  onChange={handleChange}
                  className="h-5 w-5 text-[#0B57D0] border-gray-300 rounded focus:ring-[#0B57D0] cursor-pointer"
                />
                <label htmlFor="GuidelinesCommitment" className="ml-3 block text-sm font-medium text-gray-950 cursor-pointer">
                  I agree to all the points stated above.
                </label>
              </div>
            </div>
          </div>

          {/* Replacement Policy Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#0B57D0] text-white px-6 py-4">
              <h2 className="text-xl font-medium">Scholarship Replacement Policy</h2>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-gray-800 italic">
                Please read and understand the conditions under which a scholarship may be reallocated to another eligible applicant.<span className="text-red-600">*</span>
              </p>
              
              <ul className="space-y-4 text-sm text-gray-900 list-disc pl-5">
                <li>I understand a minimum course completion rate of 70% is required.</li>
                <li>I understand that inactivity for 60 or more consecutive days may result in scholarship revocation.</li>
                <li>I understand that failure to demonstrate adequate progress may result in scholarship cancellation.</li>
                <li>I understand that vacated seats may be reassigned to eligible applicants on the waiting list.</li>
                <li>I acknowledge that the program management team's decisions regarding scholarship continuation, cancellation, and reassignment are final.</li>
                <li>I understand that failure to submit this Scholarship Acceptance and Commitment Agreement within 7 days of receiving the scholarship offer may result in the cancellation of my scholarship and reassignment of the seat to an eligible applicant on the waiting list.</li>
              </ul>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="ReplacementPolicy"
                  name="ReplacementPolicy"
                  required
                  checked={formData.ReplacementPolicy}
                  onChange={handleChange}
                  className="h-5 w-5 text-[#0B57D0] border-gray-300 rounded focus:ring-[#0B57D0] cursor-pointer"
                />
                <label htmlFor="ReplacementPolicy" className="ml-3 block text-sm font-medium text-gray-950 cursor-pointer">
                  I understand and agree to all the points stated above.
                </label>
              </div>
            </div>
          </div>

          {/* Declaration Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#0B57D0] text-white px-6 py-4">
              <h2 className="text-xl font-medium">Declaration</h2>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-gray-800 italic">
                Please read the declaration below carefully before proceeding. By checking the box and submitting this application, you confirm that the information provided is true and accurate to the best of your knowledge, and that you agree to abide by all program terms, conditions, and policies.<span className="text-red-600">*</span>
              </p>
              
              <ul className="space-y-4 text-sm text-gray-900 list-disc pl-5">
                <li>After completing the certification, I am willing to actively participate in future skill-based programs, training sessions, and opportunities organized by ICT Foundation Nepal.</li>
                <li>I confirm that I have read, understood, and agree to comply with all guidelines, responsibilities, and requirements outlined in this Scholarship Acceptance and Commitment Agreement.</li>
                <li>I understand that failure to maintain active participation and commitment may result in the cancellation of my scholarship and reassignment of the seat.</li>
              </ul>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="Declaration"
                  name="Declaration"
                  required
                  checked={formData.Declaration}
                  onChange={handleChange}
                  className="h-5 w-5 text-[#0B57D0] border-gray-300 rounded focus:ring-[#0B57D0] cursor-pointer"
                />
                <label htmlFor="Declaration" className="ml-3 block text-sm font-medium text-gray-950 cursor-pointer">
                  I have read, understood, and agree to all the points stated above.
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 pb-8">
            <div className="space-x-4 flex items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0B57D0] hover:bg-[#0948A7] text-white font-medium py-2.5 px-6 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B57D0] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
            <button
              type="button"
              onClick={() => setFormData({
                FullName: "", PhoneNumber: "", EmailAddress: "", 
                GuidelinesCommitment: false, ReplacementPolicy: false, Declaration: false
              })}
              className="text-sm font-medium text-[#0B57D0] hover:text-[#0948A7] hover:bg-blue-50 hover:underline px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B57D0]"
            >
              Clear form
            </button>
          </div>
          
        </form>
      </div>
    </div>
    </>
  );
}