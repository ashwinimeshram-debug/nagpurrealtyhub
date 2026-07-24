"use client";

import { useState } from "react";
import Image from "next/image";

// 1. DATA ARRAY: Easily manage your listings here
const featuredProperties = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "Wardha Road, Nagpur",
    price: "₹75 Lakhs+",
    tag: "New Launch",
    imageUrl: "/images/property-1.png" 
  },
  {
    id: 2,
    title: "Premium Residential Plot",
    location: "MIHAN SEZ, Nagpur",
    price: "₹45 Lakhs+",
    tag: "Investment Hotspot",
    imageUrl: "/images/property-2.png"
  },
  {
    id: 3,
    title: "Commercial Office Space",
    location: "Civil Lines, Nagpur",
    price: "₹1.2 Cr+",
    tag: "High ROI",
    imageUrl: "/images/property-3.png"
  }
];

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${form.name}! Our Nagpur property expert will contact you shortly.`);
  };

  // SEO SCHEMAS (Local Business & FAQ)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Nagpur Realty Hub",
    image: "https://www.nagpurrealtyhub.com/logo.png",
    "@id": "https://www.nagpurrealtyhub.com",
    url: "https://www.nagpurrealtyhub.com",
    telephone: "+91-92703330343",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nagpur",
      addressLocality: "Nagpur",
      addressRegion: "MH",
      postalCode: "440001",
      addressCountry: "IN",
    },
    areaServed: ["Nagpur", "Wardha Road", "MIHAN", "Besa"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to buy property in Nagpur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Nagpur Realty Hub to explore verified listings and get expert guidance for buying property in Nagpur.",
        },
      },
      {
        "@type": "Question",
        name: "Is RERA registration important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, RERA ensures transparency and protects buyers. Always verify RERA registration before purchasing property.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best areas to invest in Nagpur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prime areas include MIHAN, Wardha Road, and Hingna due to rapid infrastructure growth.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* INJECTING SEO SCHEMAS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* NAVBAR */}
      {/* <nav className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0 z-50">
        <h1 className="font-bold text-xl tracking-tight text-blue-900 uppercase">Nagpur Realty Hub</h1>
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#properties" className="hover:text-blue-700 transition">Properties</a>
          <a href="#about" className="hover:text-blue-700 transition">About</a>
          <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
        </div>
      </nav> */}

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Invest in Nagpur's <span className="text-yellow-400">Premium Future</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Verified listings near MIHAN SEZ, Samruddhi Expressway, and Wardha Road. Experience high ROI with Nagpur's trusted experts.
        </p>
        <a href="#properties">
          <button className="bg-yellow-400 text-blue-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-transform hover:scale-105 shadow-lg">
            Explore 2026 Listings
          </button>
        </a>
      </section>

      {/* SPECIALIZED SERVICES (AEO/GEO Optimized) */}
      <section className="py-20 px-6 text-center max-w-6xl mx-auto" id="about">
        <h2 className="text-3xl font-bold mb-4">Our Specialized Services</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">Providing data-driven real estate solutions in Central India's fastest-growing logistics and tech hub.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition text-left">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Buy Property</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Find verified homes in high-growth zones like <strong>Wardha Road, MIHAN, Manish Nagar, Trimurti Nagar and Besa.</strong> We provide verified site visits, transparent documentation, and legal assistance to ensure you secure the best 2026 market price.
            </p>
            <p className="text-xs font-semibold text-blue-600 italic">Target: Best RERA-registered projects in Nagpur.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition text-left">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Sell Property</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Using <strong>hyper-local SEO</strong> and targeted digital marketing, we connect your property with qualified buyers. We handle valuation, professional staging, and negotiation for a premium exit in the Nagpur market.
            </p>
            <p className="text-xs font-semibold text-blue-600 italic">Target: Highest property valuation in Nagpur.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition text-left">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Investment Strategy</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Capitalize on the <strong>Samruddhi Mahamarg</strong> and <strong>Metro Phase 2 expansion</strong>. We identify high-appreciation commercial spaces and industrial plots backed by real-time market data.
            </p>
            <p className="text-xs font-semibold text-blue-600 italic">Target: Highest rental yield areas in 2026.</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES (Local Public Folder Images) */}
      <section className="bg-gray-100 py-20 px-6" id="properties">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Trending Localities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-3xl shadow-lg overflow-hidden group">
                {/* IMAGE CONTAINER */}
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={property.imageUrl} 
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={property.id === 1}
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase">
                    {property.tag}
                  </span>
                  <h3 className="font-bold text-xl mt-4 text-gray-900">{property.title}</h3>
                  <p className="text-gray-500 mb-6">{property.location}</p>
                  <div className="flex justify-between items-center border-t pt-5">
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Price</p>
                        <p className="font-black text-blue-900 text-xl">{property.price}</p>
                    </div>
                    {/* <button className="bg-blue-800 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-blue-900 transition">
                      Details
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section className="py-20 px-6 bg-white" id="contact">
        <div className="max-w-xl mx-auto bg-blue-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
          <h2 className="text-3xl font-bold mb-2 text-center text-blue-900">Get Expert Guidance</h2>
          <p className="text-center text-gray-600 mb-8">Schedule a free site visit or consultation today.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required type="text" name="name" placeholder="Full Name" className="w-full p-4 border-none rounded-2xl shadow-inner focus:ring-2 focus:ring-blue-500 outline-none" onChange={handleChange} />
            <input required type="tel" name="phone" placeholder="WhatsApp Number" className="w-full p-4 border-none rounded-2xl shadow-inner focus:ring-2 focus:ring-blue-500 outline-none" onChange={handleChange} />
            <input required type="email" name="email" placeholder="Email Address" className="w-full p-4 border-none rounded-2xl shadow-inner focus:ring-2 focus:ring-blue-500 outline-none" onChange={handleChange} />
            <button className="w-full bg-blue-800 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-900 shadow-lg transition-all active:scale-95">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Property FAQ's</h2>
          <div className="space-y-6">
            {[
              { q: "How to buy property in Nagpur?", a: "Contact us to explore verified listings, schedule site visits, and get complete documentation assistance from start to finish." },
              { q: "Is RERA registration important?", a: "Absolutely. RERA ensures legal safety, timely delivery, and transparency. We only deal in RERA-registered properties." },
              { q: "Best areas to invest in Nagpur?", a: "MIHAN, Wardha Road, and Hingna are current hotspots due to IT park expansions and infrastructure projects." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-blue-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-16 text-center px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 tracking-tighter">Nagpur Realty Hub</h2>
          <p className="opacity-70 mb-8 max-w-md mx-auto">Trusted Real Estate Partners in the Orange City. Providing verified homes and high-ROI investments.</p>
          <div className="flex justify-center space-x-10 mb-10 font-semibold text-sm uppercase tracking-widest">
            <a href="/terms" className="hover:text-yellow-400 transition">Terms</a>
            <a href="/privacy" className="hover:text-yellow-400 transition">Privacy</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </div>
          <div className="border-t border-blue-900 pt-8 opacity-50 text-xs">
            <p>© 2026 Nagpur Realty Hub. All rights reserved.</p>
            {/* <p className="mt-2 uppercase">MahaRERA Registered Agency</p> */}
          </div>
        </div>
      </footer>
    </div>
  );
}