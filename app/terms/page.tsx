"use client";

export default function TermsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service - Nagpur Realty Hub",
    description: "Legal terms and conditions for real estate services in Nagpur, Maharashtra, in compliance with MahaRERA guidelines.",
    url: "https://www.nagpurrealtyhub.com/terms",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
      />

      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-900">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8 italic">Effective Date: April 20, 2026</p>

        <section className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing **Nagpur Realty Hub**, you agree to abide by these Terms of Service, all applicable laws in India, 
              and regulations including **MahaRERA guidelines**. These terms apply to all buyers, sellers, and investors 
              seeking property in Nagpur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3 text-blue-800">2. Real Estate Intermediary Disclaimer</h2>
            <p>
              Nagpur Realty Hub acts as a **Real Estate Advertising and Marketing platform**. While we strive to list 
              verified properties:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>We are not a party to any final sale agreement between a buyer and a developer/owner.</li>
              <li>Users are strongly advised to verify the **MahaRERA Registration Number** of any project before making payments.</li>
              <li>All images, floor plans, and amenities mentioned are indicative and provided by the developers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">3. User Responsibilities (KYC)</h2>
            <p>
              In compliance with 2026 digital regulations, users must provide accurate information (Name, Phone, Email) 
              when requesting site visits. You agree not to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide false contact details for property inquiries.</li>
              <li>Use our property listings for unauthorized commercial "scraping" or data mining.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">4. Brokerage & Professional Fees</h2>
            <p>
              Unless explicitly stated otherwise in a separate written agreement, professional fees or brokerage for 
              residential and commercial properties in Nagpur shall be governed by the standard market practice of 
              **2% of the final transaction value**, plus applicable GST.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3 text-blue-800">5. Limitation of Liability</h2>
            <p>
              Nagpur Realty Hub shall not be held liable for:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Delays in project completion by developers.</li>
              <li>Financial losses arising from market fluctuations in the Nagpur real estate sector.</li>
              <li>Inaccuracies in third-party property documentation provided by sellers.</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold mb-3 text-blue-900">6. Governing Law & Jurisdiction</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising from the use of this platform 
              shall be subject to the exclusive jurisdiction of the courts in **Nagpur, Maharashtra**, and the 
              **Maharashtra Real Estate Regulatory Authority (MahaRERA)**.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">7. Contact Information</h2>
            <p>For legal inquiries or clarification on these terms, contact:</p>
            <p className="font-bold mt-2">Legal Department - Nagpur Realty Hub</p>
            <p>Email: legal@nagpurrealtyhub.com</p>
            <p>Office: Civil Lines, Nagpur, MH 440001</p>
          </div>
        </section>
      </div>
    </div>
  );
}