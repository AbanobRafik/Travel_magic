import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router"; // خليه من react-router-dom مش react-router

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHotelsOpen, setIsHotelsOpen] = useState(false);

  const links = [
    { name: "الصفحه الرئيسيه", to: "/", bold: true },
    { name: "الغردقة والجونة", to: "/hurghada" },
    { name: "شرم الشيخ ودهب", to: "/sharm" },
    { name: "الاقصر واسوان", to: "/luxor" },
    { name: "مرسى مطروح", to: "/matrouh" },
    { name: "الاسكندريه و الساحل الشمالي", to: "/alexandria" },
    { name: "العلمين الجديدة والعين السخنة", to: "/new-alamein" },
    { name: "للاستفسار والحجز", to: "/contact" },
  ];

  const visibleHotels = links.slice(1, 4);
  const hiddenHotels = links.slice(4, -1);

  return (
    <nav className="bg-[#f7f8f4] border-b border-gray-200 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center flex-row-reverse">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-x-8">
            <NavLink
              to={links[0].to}
              className="text-gray-600 hover:text-gray-900 font-bold"
            >
              {links[0].name}
            </NavLink>

            {/* 3 Visible Hotels */}
            {visibleHotels.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.to}
                className="text-gray-600 hover:text-gray-900"
              >
                {link.name}
              </NavLink>
            ))}

            {/* Dropdown Menu */}
            {hiddenHotels.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setIsHotelsOpen(!isHotelsOpen)}
                  className="text-gray-600 hover:text-gray-900 font-bold flex items-center gap-1"
                >
                  فنادق {isHotelsOpen ? "▲" : "▼"}
                </button>
                {isHotelsOpen && (
                  <div className="absolute right-0 bg-white shadow-lg mt-2 rounded-lg p-4 z-50 grid grid-cols-1 gap-4 min-w-[200px]">
                    {hiddenHotels.map((link, idx) => (
                      <NavLink
                        key={idx}
                        to={link.to}
                        className="block text-gray-600 hover:text-gray-900"
                        onClick={() => setIsHotelsOpen(false)}
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Contact link */}
            <NavLink
              to={links[links.length - 1].to}
              className="text-gray-600 hover:text-gray-900"
            >
              {links[links.length - 1].name}
            </NavLink>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#f7f8f4] shadow-lg 
        transform transition-transform duration-300 ease-in-out z-50 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              className={`text-gray-600 hover:text-gray-900 ${
                link.bold ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
