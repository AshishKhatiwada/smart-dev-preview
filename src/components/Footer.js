const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-4">SmartDev</h2>
          <p className="text-sm">
            Empowering innovation through smart development across energy, health, transport, and beyond.
          </p>
        </div>

        {/* Column 2 - Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Sectors</a></li>
            <li><a href="#" className="hover:text-blue-600">Products</a></li>
            <li><a href="#" className="hover:text-blue-600">Articles</a></li>
            <li><a href="#" className="hover:text-blue-600">Reviews</a></li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-blue-600">Supplier Form</a></li>
            <li><a href="#" className="hover:text-blue-600">Join Us</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: hello@smartdev.com</li>
            <li>Phone: +61 123 456 789</li>
            <li><a href="#" className="hover:text-blue-600">Contact Page</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-sm text-center py-4 px-4">
        © {new Date().getFullYear()} SmartDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
