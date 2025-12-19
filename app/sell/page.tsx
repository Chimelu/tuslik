export default function SellPage() {
  return (
    <main className="min-h-screen bg-primary-navy">
      <div className="bg-gradient-to-r from-primary-navy to-primary-gold text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-primary-gold">Sell Your</span>{" "}
            <span className="text-white">Property</span>
          </h1>
          <p className="text-xl text-gray-300">
            Let us help you sell your property quickly and at the best price
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-white">
            List Your Property With Us
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Property Type
              </label>
              <select className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none">
                <option>House</option>
                <option>Land</option>
                <option>Apartment</option>
                <option>Serviced Apartment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter property location"
                className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Asking Price (₦)
              </label>
              <input
                type="text"
                placeholder="Enter asking price"
                className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Description
              </label>
              <textarea
                rows={5}
                placeholder="Describe your property..."
                className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none placeholder-gray-500"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Contact Information
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none mb-2 placeholder-gray-500"
              />
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-gold hover:bg-yellow-600 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Submit Listing
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

