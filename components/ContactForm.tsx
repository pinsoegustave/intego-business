'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Input changed:', e.target.name, e.target.value); // Debug log
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));  
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) {
    return <div className="w-full h-64 flex items-center justify-center">Loading form...</div>;
  }

  return (
    <div className="w-full relative" style={{ zIndex: 10, pointerEvents: 'auto' }}>
      {status.message && (
        <div 
          className={`mb-4 p-4 rounded-md ${
            status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {status.message}
        </div>
      )}
      
      <form key={status.type === 'success' ? 'form-reset' : 'form'} onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <label htmlFor="email" className="flex-1">
            <span className="text-sm font-bold text-[#034833] block mb-2">
              Your Email
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="bg-[#FFFFFF] w-full rounded-full border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#034833] sm:text-sm text-black"
            />
          </label>
          <label htmlFor="phone" className="flex-1">
            <span className="text-sm font-bold text-[#034833] block mb-2">
              Your Phone
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Your Phone"
              className="bg-[#FFFFFF] w-full rounded-full border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#034833] sm:text-sm text-black"
            />
          </label>
        </div>

        <div>
          <label htmlFor="name" className="block">
            <span className="text-sm font-bold text-[#034833] block mb-2">
              Your Name
            </span>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="bg-[#FFFFFF] w-full rounded-full border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#034833] sm:text-sm text-black"
            />
          </label>
        </div>

        <div>
          <label htmlFor="subject" className="block">
            <span className="text-sm font-bold text-[#034833] block mb-2">
              Subject
            </span>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="bg-[#FFFFFF] w-full rounded-full border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#034833] sm:text-sm text-black"
            />
          </label>
        </div>

        <div>
          <label htmlFor="message" className="block">
            <span className="text-sm font-bold text-[#034833] block mb-2">
              Your Message
            </span>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="bg-[#FFFFFF] w-full rounded-2xl border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#034833] sm:text-sm text-black"
            ></textarea>
          </label>
        </div>

        <div>
          <Button
            type="submit"
            title={isSubmitting ? 'Sending...' : 'Send Message'}
            variant="btn_green"
            icon="arrow-right"
            full
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}
