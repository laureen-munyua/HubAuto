export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">About AutoHub</h1>
        <p className="text-gray-500 text-lg">
          Your trusted partner for quality cars and homes in Kenya.
        </p>
      </div>

      {/* Who We Are */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          AutoHub is a Nairobi-based dealership offering a wide selection of quality
          vehicles and properties. We are committed to helping you find the perfect
          car or home at the best price, with honest service every step of the way.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl mb-2">🚗</div>
            <h3 className="font-bold text-gray-800">Wide Selection</h3>
            <p className="text-gray-500 text-sm mt-1">Cars and houses to fit every budget</p>
          </div>
          <div>
            <div className="text-4xl mb-2">✅</div>
            <h3 className="font-bold text-gray-800">Verified Listings</h3>
            <p className="text-gray-500 text-sm mt-1">Every listing is checked for accuracy</p>
          </div>
          <div>
            <div className="text-4xl mb-2">💬</div>
            <h3 className="font-bold text-gray-800">WhatsApp Support</h3>
            <p className="text-gray-500 text-sm mt-1">Chat with us instantly anytime</p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-500 mb-4">Ready to find your next car or home?</p>
        <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition font-medium">
          Contact Us
        </a>
      </div>
    </div>
  );
}