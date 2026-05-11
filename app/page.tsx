"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="bg-white text-gray-800">

      {/* NAVBAR */}
      <nav className="bg-blue-900 text-white px-4 py-5 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <h1 className="text-xl md:text-3*1 font-bold">
          Smile Dental Clinic
        </h1>

        <div className="hidden md:flex gap-6 text-lg font-medium">
  <a href="#about">About</a>
  <a href="#treatments">Treatments</a>
  <a href="#gallery">Gallery</a>
  <a href="#doctor">Doctor</a>
  <a href="#contact">Contact</a>
</div>

<button
  onClick={() => setOpen(!open)}
  className="md:hidden text-4xl"
>
  ☰
</button>
      </nav>
      {open && (
  <div className="bg-blue-900 text-white flex flex-col px-8 py-4 gap-4 md:hidden text-lg">
    <a href="#about">About</a>
    <a href="#treatments">Treatments</a>
    <a href="#gallery">Gallery</a>
    <a href="#doctor">Doctor</a>
    <a href="#contact">Contact</a>
  </div>
)}

      {/* HERO SECTION */}
      <section className="relative h-screen">

  <img
    src="/image/hero.jpg"
    alt="Dental Clinic"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">

    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      Smile Dental Clinic
    </h1>

    <p className="text-2xl md:text-3xl font-medium mb-8">
      Creating Confident Smiles With Advanced Dental Care
    </p>

    <a
      href="https://wa.me/919016705884"
      target="_blank"
      className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-2xl font-semibold"
    >
      Book Appointment
    </a>

  </div>
</section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-10 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-blue-900 mb-10 text-center">
            About Our Clinic
          </h2>

          <p className="text-xl leading-10 text-gray-700 text-center">
            Smile Dental Clinic provides advanced dental care with modern
            technology and personalized treatment planning. Our clinic focuses
            on painless dentistry, smile designing, root canal treatment,
            implants, aligners, cosmetic dentistry, and complete oral care.
            We believe every patient deserves confidence, comfort, and a
            healthy smile with premium dental experience.
          </p>

        </div>
      </section>

      {/* TREATMENTS */}
      <section
        id="treatments"
        className="bg-blue-50 py-24 px-10"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
            Our Treatments
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Root Canal Treatment",
              "Dental Implants",
              "Smile Designing",
              "Invisible Aligners",
              "Teeth Whitening",
              "Dental Veneers",
              "Crown & Bridge",
              "Tooth Extraction",
              "Pediatric Dentistry",
              "Dentures",
              "Gum Surgery",
              "Emergency Dental Care",
            ].map((treatment) => (
              <div
                key={treatment}
                className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {treatment}
                </h3>

                <p className="text-gray-600 leading-8">
                  Premium dental treatment with advanced technology,
                  experienced care, painless procedures, modern equipment,
                  and personalized smile solutions for long lasting oral health.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-10 bg-white">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
            Clinic Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="/image/clinic1.jpg"
              className="w-full h-[350px] object- cover rounded-3xl shadow-xl"
            />

            <img
              src="/image/clinic2.png"
              className="rounded-3xl shadow-xl"
            />

            <img
              src="/image/clinic3.png"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>

      {/* DOCTOR */}
      <section
        id="doctor"
        className="bg-blue-50 py-24 px-10"
      >

        <div className="max-w-5xl mx-auto text-center">

          <img
            src="/image/doctor.jpg"
            className="w-[350px] h-[500px] object-cover mx-auto mb-8 rounded-3*1 shadow-2xl"
          />

          <h2 className="text-5xl font-bold text-blue-900 mb-6">
            Dr. Hitesh Trivedi
          </h2>

          <p className="text-2xl text-gray-700 mb-8">
            B.D.S • Dental Surgeon
          </p>

          <p className="text-xl leading-10 text-gray-600">
            Dedicated to delivering high-quality dental care with modern
            dentistry techniques and patient comfort. Specialized in root
            canal treatment, implants, smile designing, aligners, and cosmetic dentistry.
          </p><div className="mt-8 text-lg text-gray-700 space-y-3">
  <p>✔ Root Canal Specialist</p>
  <p>✔ Smile Designing & Veneers</p>
  <p>✔ Dental Implants</p>
  <p>✔ Cosmetic Dentistry</p>
  <p>✔ Advanced Painless Treatment</p>
</div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-10 bg-white">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-blue-900 mb-10">
            Contact Us
          </h2>

          <p className="text-2xl mb-6">
            📞 +91 9016705884
          </p>

          <p className="text-2xl mb-6">
            📍 -1 st floor devnandan complex near damru circle,ghatlodiya ahmedabad, Gujarat
          </p>

          <p className="text-xl text-gray-600 mb-10">
            Timings: 10 AM – 2 PM | 4 PM – 9 PM
          </p>

          <a
            href="https://wa.me/919016705884"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-2xl font-bold shadow-xl"
          >
            WhatsApp Now
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white text-center py-8 text-lg">
        © 2026 Smile Dental Clinic. All Rights Reserved.
      </footer>

    <a
  href="tel:+919016705884"
  className="fixed bottom-24 left-5 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 text-3xl"
>
  📞
</a>

<a
  href="https://wa.me/919016705884"
  target="_blank"
  className="fixed bottom-24 right-5 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 text-3xl"
>
  💬
</a>
</main>
  );
}