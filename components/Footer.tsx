const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-3xl font-bold tracking-wide">PHYUR</h3>
          <p className="text-sm mt-3 text-green-200">
            Leading the path to holistic wellness with ancient Ayurveda blended with modern science.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-lime-300 transition">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-lime-300 transition">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-lime-300 transition">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
          <p className="text-sm text-green-200">Email: info@phyur.in</p>
          <p className="text-sm text-green-200 mt-1">Phone: +91-12345-67890</p>
          <p className="text-sm mt-3 text-green-300">
            <a href="https://phyur.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-lime-300">
              www.phyur.in
            </a>
          </p>
        </div>

      </div>

      <div className="border-t border-green-700 mt-10 pt-5 text-center text-sm text-green-300">
        &copy; {new Date().getFullYear()} PHYUR | Designed & Developed by PHYUR Team | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
