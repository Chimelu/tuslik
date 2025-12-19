"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const timer = setTimeout(() => {
      handleScroll();
    }, 0);
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const shouldBeAbsolute = isHomePage && !isScrolled && mounted;
  const shouldHaveBackground = (isScrolled && mounted) || !isHomePage;

  return (
    <nav
      suppressHydrationWarning
      className={`${
        shouldBeAbsolute ? "absolute" : "sticky"
      } ${shouldBeAbsolute ? "top-8" : "top-0"} left-0 right-0 z-40 transition-all duration-300 ${
        shouldHaveBackground
          ? "bg-primary-navy/95 backdrop-blur-sm text-white shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center md:mt-0 mt-4">
            <Image
              src="/logo tuslik.jpeg"
              alt="Tuslik Logo"
              width={150}
              height={60}
              className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link
              href="/"
              className="hover:text-primary-gold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/buy"
              className="hover:text-primary-gold transition-colors"
            >
              Buy
            </Link>
            <Link
              href="/rent"
              className="hover:text-primary-gold transition-colors"
            >
              Rent
            </Link>
            <Link
              href="/sell"
              className="hover:text-primary-gold transition-colors"
            >
              Sell
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary-gold transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {!isMobileMenuOpen && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileMenu();
              }}
              className="md:hidden text-white focus:outline-none mt-4 z-[110] relative"
              aria-label="Toggle menu"
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 z-[90]" : "opacity-0 z-[-1] pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-primary-navy z-[100] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl overflow-y-auto`}
        style={{ maxHeight: '100vh' }}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <Image
              src="/logo tuslik.jpeg"
              alt="Tuslik Logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={closeMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-4">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-white hover:bg-primary-gold/20 rounded-lg transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/buy"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-white hover:bg-primary-gold/20 rounded-lg transition-colors font-medium"
              >
                Buy
              </Link>
              <Link
                href="/rent"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-white hover:bg-primary-gold/20 rounded-lg transition-colors font-medium"
              >
                Rent
              </Link>
              <Link
                href="/sell"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-white hover:bg-primary-gold/20 rounded-lg transition-colors font-medium"
              >
                Sell
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-white hover:bg-primary-gold/20 rounded-lg transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

