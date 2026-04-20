"use client";

export default function PrivacyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "Privacy Policy - Nagpur Realty Hub",
    description: "Official privacy policy of Nagpur Realty Hub in compliance with the DPDP Act 2023.",
    url: "https://www.nagpurrealtyhub.com/privacy",
    publisher: {
      "@type": "Organization",
      "name": "Nagpur Realty Hub"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
      />

      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 2023 (Compliant with DPDP Act 2023)</p>

        <section className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
            <p>
              Nagpur Realty Hub ("we," "us," or "our") is committed to protecting the privacy of our "Data Principals" (users). 
              This policy explains how we collect, use, and safeguard your digital personal data in accordance with the 
              <strong> Digital Personal Data Protection Act (DPDPA) 2023</strong> and the <strong>Information Technology Act, 2000</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">2. Data We Collect</h2>
            <p className="mb-2">We collect only the data necessary to provide our real estate services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> Name, age (to verify legal capacity to contract).</li>
              <li><strong>Contact Data:</strong> Phone number, email address, and residential address.</li>
              <li><strong>Property Preferences:</strong> Budget, preferred locations in Nagpur, and property type.</li>
              <li><strong>Technical Data:</strong> IP address and browser type for security and site optimization.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">3. Purpose of Processing</h2>
            <p>In line with the principle of "Purpose Limitation," we use your data solely for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Facilitating property site visits and inquiries.</li>
              <li>Providing updates on RERA-registered projects in Nagpur.</li>
              <li>Legal compliance related to property transactions.</li>
              <li>Responding to your specific requests submitted via our lead forms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">4. Consent and Your Rights</h2>
            <p className="mb-4">
              By using our website and submitting your details, you provide "Affirmative Consent" for us to process your data. 
              Under the DPDP Act, you have the following rights:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="font-bold">Right to Access</p>
                <p className="text-sm">Request a summary of your personal data being processed.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="font-bold">Right to Correction</p>
                <p className="text-sm">Update or correct any inaccurate or incomplete info.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="font-bold">Right to Erasure</p>
                <p className="text-sm">Request deletion of data once the purpose is fulfilled.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="font-bold">Withdraw Consent</p>
                <p className="text-sm">You may withdraw consent at any time by contacting us.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">5. Data Retention & Security</h2>
            <p>
              We implement reasonable security safeguards to prevent data breaches. Your data is retained only as long as 
              necessary to fulfill the service or as required by Indian financial/real estate laws.
            </p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-xl font-bold mb-3 text-red-800">6. Grievance Redressal</h2>
            <p className="mb-4">
              If you have any concerns or wish to exercise your rights, you may contact our designated 
              <strong> Grievance Officer</strong> as per the requirements of Indian law:
            </p>
            <div className="bg-gray-100 p-6 rounded-2xl">
              <p><strong>Name:</strong> [Insert Name of Officer]</p>
              <p><strong>Email:</strong> privacy@nagpurrealtyhub.com</p>
              <p><strong>Address:</strong> Nagpur Realty Hub, Civil Lines, Nagpur - 440001</p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              We will respond to all grievances within the timeframe mandated by the DPDP Rules.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}