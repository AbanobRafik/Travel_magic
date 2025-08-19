import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "الصفحه الرئيسيه", href: "#", bold: true },
    { name: "فنادق الغردقة", href: "#" },
    { name: "فنادق شرم الشيخ ودهب", href: "#" },
    { name: "فنادق الاسكندريه و الساحل الشمالي", href: "#" },
  ];

  return (
    <nav className="bg-[#f7f8f4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center flex-row-reverse">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 w-auto" // كبرنا اللوجو
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-wrap items-center gap-x-8">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`text-gray-600 hover:text-gray-900 ${
                  link.bold ? "font-bold" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral-600 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#f7f8f4] shadow-lg transform transition-transform duration-300 ease-in-out z-50 
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
            <a
              key={idx}
              href={link.href}
              className={`text-gray-600 hover:text-gray-900 ${
                link.bold ? "font-bold" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
