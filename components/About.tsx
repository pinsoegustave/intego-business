import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section className="max-container padding-container relative py-4 lg:py-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Unlock Opportunity <br />
            <span className="text-[#034833]">Through Financial Clarity</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive financial and business solutions tailored to help your business thrive in today's competitive market. Our expertise ensures your financial operations are efficient and compliant.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#83CD20]/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#83CD20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#034833] mb-3">Business Guides</h3>
            <p className="text-gray-600 leading-relaxed">
              Expert guidance for business registration, compliance, and strategic planning to ensure your business operates smoothly and efficiently.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#034833]/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#034833]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#034833] mb-3">Financial Consultancy</h3>
            <p className="text-gray-600 leading-relaxed">
              Professional financial advice and planning services to optimize your business performance and ensure sustainable growth and profitability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
