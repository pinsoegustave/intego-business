import React from "react";

export default function Card() {
  return (
    <div className="w-[50%] max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact Information */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Contact Information
          </h3>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
              <span className="text-green-600 font-bold">📞</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Requesting A Call:</p>
              <p className="text-lg font-semibold text-gray-800">
                (629) 555-0129
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
              <span className="text-blue-600 font-bold">✉️</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">E-mail</p>
              <p className="text-lg font-semibold text-gray-800">
                info@example.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
              <span className="text-orange-600 font-bold">📍</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-lg font-semibold text-gray-800">KG 655 st</p>
              <p className="text-gray-600">Kigali, Rwanda</p>
            </div>
          </div>
        </div>

        {/* Right Column - Working Hours */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Working Hours
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="font-semibold text-gray-800">Monday</span>
              <span className="text-gray-600">9 am - 8 pm</span>
            </div>

            <div className="pb-2 border-b border-gray-200">
              <span className="font-semibold text-gray-800">
                Tuesday-Friday
              </span><br />
              <span className="text-gray-600">12 am - 9 pm</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">Saturday</span>
              <span className="text-gray-600">8 am - 3 pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
