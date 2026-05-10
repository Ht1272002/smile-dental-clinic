export default function Treatments() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-5xl font-bold text-blue-900 mb-6">
        Our Treatments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-6 rounded-2xl shadow-lg bg-blue-100">
          <h2 className="text-2xl font-bold mb-2">
            Root Canal Treatment
          </h2>

          <p>
            Advanced painless RCT with modern technology.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-yellow-100">
          <h2 className="text-2xl font-bold mb-2">
            Dental Implants
          </h2>

          <p>
            Permanent solution for missing teeth.
          </p>
        </div>

      </div>
    </main>
  );
}