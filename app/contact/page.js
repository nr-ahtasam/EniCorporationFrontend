import React from "react";
import CommonBanner from "../components/CommonBanner.js";
import Contact from "../components/Contact.js";
// import FAQSection from "./FAQSection";
export default function ContactPage() {
    return (
        <div className="min-h-screen">
            
            <CommonBanner
              heading="Contact Us"
                title="We’re here to support your"
                title2="professional support"
              image="/images/partner image/image7.jpg"
            />
            <Contact/>
           
        </div>
    );
}