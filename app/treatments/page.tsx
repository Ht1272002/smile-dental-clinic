export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="bg-red-600 text-white p-6">

        <div className="space-y-6 text-2xl font-semibold">

          <a href="/" className="block">
            Home
          </a>

          <a href="/about" className="block">
            About Us
          </a>

          <details>

            <summary className="cursor-pointer">
              Treatments
            </summary>

            <div className="ml-5 mt-4 space-y-3 text-xl">

              <a href="/treatments" className="block">
                Dental Implants
              </a>

              <a href="/treatments" className="block">
                Root Canal Treatment
              </a>

              <a href="/treatments" className="block">
                Smile Designing
              </a>

              <a href="/treatments" className="block">
                Teeth Whitening
              </a>

              <a href="/treatments" className="block">
                Invisible Aligners
              </a>

              <a href="/treatments" className="block">
                Tooth Extraction
              </a>

            </div>

          </details>

          <a href="/gallery" className="block">
            Gallery
          </a>

          <a href="/contact" className="block">
            Contact Us
          </a>

          <a
            href="https://wa.me/919016705884"
            target="_blank"
            className="inline-block bg-blue-900 px-6 py-4 rounded-xl"
          >
            Book Appointment
          </a>

        </div>

      </nav>

      {/* Hero Section */}

      <section className="p-10 text-center">

        <h1 className="text-5xl font-bold text-blue-900 mb-5">
          Smile Dental Clinic
        </h1>

        <p className="text-2xl text-gray-700 mb-3">
          Dr. Hitesh Trivedi (B.D.S)
        </p>

        <p className="text-xl text-gray-600">
          RCT • Implants • Aligners • Smile Designing
        </p>

      </section>

      {/* Floating WhatsApp Button */}

      <a
        href="https://wa.me/919016705884"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-5 rounded-full shadow-2xl text-3xl"
      >
        💬
      </a>

    </main>
  );
}