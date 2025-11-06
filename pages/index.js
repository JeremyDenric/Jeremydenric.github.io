import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 space-y-12">

      {/* HERO SECTION (Leave yours as is) */}

      <section>
        <h2 className="text-2xl font-bold mb-4">Personal Systems</h2>
        <div className="border rounded p-4 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Personal Decision Engine</h3>
          <p className="text-gray-600">
            A self-built reflection tool I use to improve reasoning, track predictions vs outcomes, 
            and develop long-term decision-making clarity.
          </p>
          <Link href="/decisions">
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">
               Open Tool →
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
