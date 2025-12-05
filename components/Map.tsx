'use client';

import { useEffect, useState } from 'react';

export default function Map() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <div className="text-lg font-semibold mb-2">Location Map</div>
        <div className="text-sm text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.838769975917!2d30.32401417422035!3d-1.2985714356678917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5b0e7d5b9b5%3A0x1e3a9b0b0b0b0b0b0!2sNyagatare%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Nyagatare District Location"
    />
  );
}
