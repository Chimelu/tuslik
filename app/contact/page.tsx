export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary-navy">
      <div className="bg-gradient-to-r from-primary-navy to-primary-gold text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-primary-gold">Contact</span>{" "}
            <span className="text-white">Us</span>
          </h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team for any inquiries
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-white">Get In Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message"
                  className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none placeholder-gray-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-gold hover:bg-yellow-600 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-gold mb-2">Email</h3>
                <p className="text-gray-400">info@tuslik.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-gold mb-2">Phone</h3>
                <p className="text-gray-400">+234 814 141 6640</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-gold mb-2">Address</h3>
                <p className="text-gray-400">Suite 302, Shashilga Court, Abuja</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-gold mb-2">Business Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

