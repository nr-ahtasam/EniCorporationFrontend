import React from "react";

const ContactModal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        <h2 className="text-xl font-bold text-[#18398b] mb-6">Send us a message</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded col-span-1" type="text" placeholder="First name *" required />
          <input className="border p-2 rounded col-span-1" type="text" placeholder="Last name *" required />
          <input className="border p-2 rounded col-span-1" type="text" placeholder="Company name *" required />
          <input className="border p-2 rounded col-span-1" type="text" placeholder="Country *" required />
          <input className="border p-2 rounded col-span-1" type="email" placeholder="Email *" required />
          <input className="border p-2 rounded col-span-1" type="text" placeholder="Phone number *" required />
          <input className="border p-2 rounded md:col-span-2" type="text" placeholder="Subject *" required />
          <textarea className="border p-2 rounded md:col-span-2" rows="4" placeholder="Message"></textarea>
          <div className="md:col-span-2 flex items-center mt-2">
            <input type="checkbox" id="privacy" className="mr-2" required />
            <label htmlFor="privacy" className="text-sm">I have read and accept the <a href="/privacy-policy" className="text-blue-700 underline">Privacy Policy</a>*.</label>
          </div>
          <div className="md:col-span-2 text-xs text-gray-500 mt-2">
            This website is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="underline">Terms of Service</a> apply.
          </div>
          <div className="md:col-span-2 flex justify-between mt-4">
            <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded">SEND</button>
            <button type="button" onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded">CLOSE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
