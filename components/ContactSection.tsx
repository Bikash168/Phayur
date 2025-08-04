"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 md:px-16 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950 text-white"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        Contact Us
      </h2>

      <p className="text-center mb-4 text-gray-200 max-w-3xl mx-auto text-lg">
       Get in touch with us.
      </p>
      <p className="text-center mb-12 text-gray-300 max-w-3xl mx-auto">
        Whether you are a <strong>researcher</strong>, <strong>farmer</strong>, <strong>health practitioner</strong>, <strong>student</strong>, or <strong>organization</strong> working in related fields — we welcome your interest in collaborating, learning, or exploring our work further.
      </p>

      <div className="max-w-3xl mx-auto space-y-10">
        {/* Contact Information */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-lg text-white space-y-6">
          <h2 className="text-3xl font-bold text-lime-400">Contact Information</h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-center space-x-3 justify-center">
              <Phone className="w-5 h-5 text-lime-400" />
              <span>+91 9439173220</span>
            </div>
            <div className="flex items-center space-x-3 justify-center">
              <Mail className="w-5 h-5 text-lime-400" />
              <span>info@phayur.in</span>
            </div>
            <div className="flex items-start space-x-3 justify-center">
              <MapPin className="w-5 h-5 text-lime-400 mt-1" />
              <span>
                F-2, Chandaka Industrial Estate,<br />
                In front of Infocity,<br />
                Bhubaneswar, Odisha - 751024
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-lg text-white space-y-6">
          <h2 className="text-2xl font-semibold text-lime-300">Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-lime-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-lime-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-lime-500 text-black font-semibold py-3 rounded-lg hover:bg-lime-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-16 rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px] lg:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7482.0614668432645!2d85.807754!3d20.340349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190902b2a59ce5%3A0xdfb554a4e0bafffb!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sus!4v1738245957890!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0 w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
