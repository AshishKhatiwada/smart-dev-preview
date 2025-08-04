import React from "react";

const SiteMap = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Smart Development Site Map</h1>
      <ul className="space-y-2">
        <li>
          <strong>Homepage</strong>
          <ul className="ml-4 list-disc">
            <li>Hero Section with CTA</li>
            <li>Featured Sectors</li>
            <li>Highlights (Articles, Products, Reviews)</li>
          </ul>
        </li>

        <li>
          <strong>Smart Development Sectors</strong>
          <ul className="ml-4 list-disc">
            <li>Sector Grid/List View</li>
            <li>Sector Detail Page</li>
          </ul>
        </li>

        <li>
          <strong>Product Listings</strong>
          <ul className="ml-4 list-disc">
            <li>Filter/Search</li>
            <li>Product Detail Page</li>
          </ul>
        </li>

        <li>
          <strong>Supplier Application / Express Interest</strong>
          <ul className="ml-4 list-disc">
            <li>Supplier Registration Form</li>
            <li>Dashboard (future)</li>
          </ul>
        </li>

        <li>
          <strong>Articles / Blog</strong>
          <ul className="ml-4 list-disc">
            <li>Categories</li>
            <li>Article Detail Page</li>
          </ul>
        </li>

        <li>
          <strong>Reviews & Verifications</strong>
          <ul className="ml-4 list-disc">
            <li>Verified Testimonials</li>
            <li>Third-party Verification</li>
          </ul>
        </li>

        <li>
          <strong>Affiliate Hub / Monetisation Ideas</strong>
          <ul className="ml-4 list-disc">
            <li>Affiliate Programs</li>
            <li>Monetisation Strategies</li>
          </ul>
        </li>

        <li>
          <strong>Contact / Join Us</strong>
          <ul className="ml-4 list-disc">
            <li>Contact Form</li>
            <li>Career Opportunities</li>
          </ul>
        </li>

        <li>
          <strong>Global</strong>
          <ul className="ml-4 list-disc">
            <li>Header (logo, nav, search)</li>
            <li>Footer (quick links, newsletter, legal)</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SiteMap;
