'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-black/95 mt-auto">
      <div className="w-full px-8 py-16 max-md:py-10 max-md:px-4">
        
        <div className="flex flex-row justify-around !pt-[55px] flex-wrap gap-7 max-md:flex-col max-md:text-center max-md:items-center">
          
          <div className="min-w-[150px]">
            <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">COMPANY</h3>
            <div className="flex flex-col gap-3">
              <li className="list-none text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                About Us
              </li>
              <li className="list-none text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                Our Process
              </li>
              <li className="list-none text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                Careers
              </li>
            </div>
          </div>

          <div className="min-w-[150px]">
            <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">SERVICES</h3>
            <div className="flex flex-col gap-3">
              <li className="list-none text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                SEO & SEM
              </li>
              <li className="list-none text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                Content Marketing
              </li>
              <li className="list-none text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                Social Media
              </li>
            </div>
          </div>

          <div className="min-w-[150px]">
            <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">RESOURCES</h3>
            <div className="flex flex-col gap-3">
              <li className="list-none text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                Growth Blog
              </li>
              <li className="list-none text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                Case Studies
              </li>
              <li className="list-none text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                Privacy Policy
              </li>
            </div>
          </div>

        </div>

        <div className="w-full border-t border-white/10 !mt-18 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Digital Marketing Services. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}