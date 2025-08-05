import React from "react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 bg-white text-gray-900">
      <Helmet>
        <title>Contact Us | Smart Development</title>
        <meta name="description" content="Get in touch with Smart Development. We'd love to hear from you about partnerships, products, or support." />
        <link rel="canonical" href="https://www.smartdevelopment.com.au/contact" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-8">We’re here to answer your questions. Fill out the form below or reach out to us directly.</p>

      <form className="grid grid-cols-1 gap-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you soon."); }}>
        <input type="text" name="name" required placeholder="Your Name" className="border border-gray-300 p-3 rounded" />
        <input type="email" name="email" required placeholder="Your Email" className="border border-gray-300 p-3 rounded" />
        <input type="text" name="subject" placeholder="Subject" className="border border-gray-300 p-3 rounded" />
        <textarea name="message" rows="5" required placeholder="Your Message" className="border border-gray-300 p-3 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 w-fit">
          Send Message
        </button>
      </form>

      <div className="mt-12 text-sm text-gray-600">
        <p><strong>Email:</strong> contact@smartdevelopment.com.au</p>
        <p><strong>Phone:</strong> +61 2 8000 1234</p>
        <p><strong>Location:</strong> Sydney, NSW, Australia</p>
      </div>
    </div>
  );
};

export default ContactUs;
