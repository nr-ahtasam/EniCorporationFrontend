"use client";
import React, { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  subject: "",
  message: "",
  privacy: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend or API
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto py-12 px-4">
      {/* Form Section */}
      <div className="flex-1 bg-white rounded-lg shadow p-8">
        <h2 className="text-3xl font-semibold text-[#20419a] mb-6">Send us a message</h2>
        {submitted ? (
          <div className="text-green-600 font-semibold">Thank you for your message!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="firstName" required placeholder="First name *" className="border rounded px-3 py-2 w-full text-black/50" value={form.firstName} onChange={handleChange} />
              <input name="lastName" required placeholder="Last name *" className="border rounded px-3 py-2 w-full text-black/50" value={form.lastName} onChange={handleChange} />
              <input name="company" required placeholder="Company Name *" className="border rounded px-3 py-2 w-full text-black/50" value={form.company} onChange={handleChange} />
              <input name="email" type="email" required placeholder="Email *" className="border rounded px-3 py-2 w-full text-black/50" value={form.email} onChange={handleChange} />
              <input name="phone" required placeholder="Phone number *" className="border rounded px-3 py-2 w-full text-black/50" value={form.phone} onChange={handleChange} />
              <input name="country" required placeholder="Country *" className="border rounded px-3 py-2 w-full text-black/50" value={form.country} onChange={handleChange} />
            </div>
            <input name="subject" placeholder="Subject" className="border rounded px-3 py-2 w-full text-black/50" value={form.subject} onChange={handleChange} />
            <textarea name="message" placeholder="Message" className="border rounded px-3 py-2 w-full min-h-[120px] text-black/50" value={form.message} onChange={handleChange} />
            <div className="flex items-center gap-2">
              <input type="checkbox" name="privacy" required checked={form.privacy} onChange={handleChange} />
              <span className="text-sm text-black/50">I have read and accept the <a href="/privacy-policy" className="text-blue-700 underline">Privacy Policy</a><span className="text-red-500">*</span>.</span>
            </div>
            <button type="submit" className="bg-[#ffc107] hover:bg-[#e6ac00] text-black font-bold px-8 py-2 rounded mt-2">SEND</button>
            <div className="text-xs text-gray-500 mt-2">
              This website is protected by reCAPTCHA and the Google <a href="/privacy-policy" className="underline">Privacy Policy</a> and <a href="/terms-and-conditions" className="underline">Terms of Service</a> apply.
            </div>
          </form>
        )}
      </div>
      {/* Contact Info Section */}
      <div className="w-full md:w-96 bg-gray-100 rounded-lg shadow p-8 flex flex-col items-center">
        <img src="/images/testimonial/image2.jpg" alt="Contact" className="w-full h-40 object-cover rounded mb-6" />
        <h3 className="text-2xl text-[#20419a] font-semibold mb-4 text-center">Contact information</h3>
        <div className="text-left w-full text-gray-700 text-sm space-y-4">
          <div>
            <span className="font-bold uppercase">Dhaka HeadOffice</span><br />
            
            House # 10 (1st Floor), Road # 19,<br />
            Uttara # 11, Dhaka-1230<br />
            Tel: <a href="tel:+8801313420661" className="text-blue-700 underline">+880 1313-420661</a>
          </div>
          <div>

            

            <span className="font-bold uppercase">Chittagong Office</span><br />
            58, Kabi Nazrul Islam Road (1st FLoor),<br />
             Feringhee Bazar, Chittagong 4000.<br />
            Tel: <a href="tel:+8801313420669" className="text-blue-700 underline">+880 1313-420669</a>
          </div>
          <div>
            
 
            <span className="font-bold uppercase">Bogura Office</span><br />
           ENI Mart, Holding No. 0456-02 Matidali,<br />
            Bogura Sadar, Bogura 5800<br />
           
            Tel: <a href="tel:+8801313420661" className="text-blue-700 underline">+880 1313-420661</a>
          </div>
        </div>
      </div>
    </div>
  );
}
