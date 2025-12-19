import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-navy text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo tuslik.jpeg"
                alt="Tuslik Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400">
              Your trusted real estate broker for premium houses and lands across Nigeria.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/buy" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-gold">Locations</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lagos</li>
              <li>Abuja</li>
              <li>Port Harcourt</li>
              <li>Kano</li>
              <li>Ibadan</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-gold">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@tuslik.com</li>
              <li>Phone: +234 814 141 6640</li>
              <li>Address: Suite 302, Shashilga Court, Abuja</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tuslik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

