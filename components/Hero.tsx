import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop&q=80",
];

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Gallery Grid Background - Asymmetric Pattern */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 md:gap-2">
        {/* Large image spanning 2x2 */}
        <div className="relative col-span-2 row-span-2 overflow-hidden">
          <Image
            src={galleryImages[0]}
            alt="Property 1"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 50vw"
            priority
          />
        </div>
        {/* Two smaller images on the right */}
        <div className="relative col-span-2 row-span-1 overflow-hidden">
          <Image
            src={galleryImages[1]}
            alt="Property 2"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 50vw"
            priority
          />
        </div>
        <div className="relative col-span-2 row-span-1 overflow-hidden">
          <Image
            src={galleryImages[2]}
            alt="Property 3"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 50vw"
          />
        </div>
        {/* Bottom row - three images */}
        <div className="relative col-span-1 row-span-1 overflow-hidden">
          <Image
            src={galleryImages[3]}
            alt="Property 4"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 25vw, 25vw"
          />
        </div>
        <div className="relative col-span-1 row-span-1 overflow-hidden">
          <Image
            src={galleryImages[4]}
            alt="Property 5"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 25vw, 25vw"
          />
        </div>
        <div className="relative col-span-2 row-span-1 overflow-hidden">
          <Image
            src={galleryImages[5]}
            alt="Property 6"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 50vw"
          />
        </div>
      </div>
      
      {/* Dark Overlay - Lighter to show images better */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/50 via-black/40 to-primary-navy/50"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-48 md:pt-32">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Welcome to </span>
            <span className="text-primary-gold">Tuslik</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-gold mb-2 font-semibold">
            Your Real Estate Broker
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your trusted partner for houses and lands across Nigeria
          </p>
          
          {/* Search Bar */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-4 shadow-2xl">
              {/* Top Row - I'm looking for */}
              <div className="mb-3 relative">
                <select className="w-full px-4 py-3 pr-10 bg-primary-navy text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-lg appearance-none cursor-pointer">
                  <option value="">I&apos;m looking for...</option>
                  <option value="house">House</option>
                  <option value="land">Land</option>
                  <option value="apartment">Apartment</option>
                  <option value="serviced-apartment">Serviced Apartment</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Bottom Row - Three fields + Search button */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <select className="w-full px-4 py-3 pr-10 bg-primary-navy text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-lg appearance-none cursor-pointer">
                    <option value="">Select Area</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="port-harcourt">Port Harcourt</option>
                    <option value="kano">Kano</option>
                    <option value="ibadan">Ibadan</option>
                    <option value="enugu">Enugu</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  <select className="w-full px-4 py-3 pr-10 bg-primary-navy text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-lg appearance-none cursor-pointer">
                    <option value="">Bedrooms</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5+">5+ Bedrooms</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  <select className="w-full px-4 py-3 pr-10 bg-primary-navy text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-lg appearance-none cursor-pointer">
                    <option value="">Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="duplex">Duplex</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="land">Land</option>
                    <option value="serviced-apartment">Serviced Apartment</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <button className="bg-primary-gold hover:bg-yellow-600 text-primary-navy px-8 py-3 rounded-lg font-bold text-lg transition-colors whitespace-nowrap">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

