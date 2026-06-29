export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Contact Us</h1>
        <p className="text-gray-500 text-lg">
          We are happy to help! Reach out to us via WhatsApp or visit us in Nairobi.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="text-4xl mb-3">📍</div>
          <h3 className="font-bold text-gray-800 mb-1">Location</h3>
          <p className="text-gray-500 text-sm">Nairobi, Kenya</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="text-4xl mb-3">📞</div>
          <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
          <p className="text-gray-500 text-sm">+254 714 573 892</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="text-4xl mb-3">🕒</div>
          <h3 className="font-bold text-gray-800 mb-1">Working Hours</h3>
          <p className="text-gray-500 text-sm">Mon - Sat, 8am - 6pm</p>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Chat With Us on WhatsApp</h2>
        <p className="text-gray-500 mb-6">
          The fastest way to reach us. Click below and we will respond right away.
        </p>
        <a href="https://wa.me/254717074974?text=Hi, I found you on AutoHub and I would like to inquire about your listings." target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition font-medium inline-block">
          💬 WhatsApp Us
        </a>
      </div>
    </div>
  );
}