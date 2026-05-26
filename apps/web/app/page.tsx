export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">🏷️ Discount Hunter</h1>
          <nav className="flex gap-4 text-sm font-medium">
            <a href="#" className="hover:underline">Search</a>
            <a href="#" className="hover:underline">Popular</a>
            <a href="#" className="hover:underline">Stores</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Never miss a discount code again
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Search verified promo codes, flash sales, and exclusive deals from hundreds of
          stores — all in one place.
        </p>
        <form className="flex gap-3 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search store, brand, or category..."
            className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Search
          </button>
        </form>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid sm:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="text-3xl mb-3">✅</div>
          <h3 className="font-bold text-lg mb-2">Verified Codes</h3>
          <p className="text-gray-600 text-sm">
            Community-verified codes with upvote tracking so you know what works.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="font-bold text-lg mb-2">Real-time Updates</h3>
          <p className="text-gray-600 text-sm">
            New codes added and expired ones removed automatically every hour.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="text-3xl mb-3">💡</div>
          <h3 className="font-bold text-lg mb-2">Smart Search</h3>
          <p className="text-gray-600 text-sm">
            Full-text search across stores, categories, and code descriptions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Discount Hunter. Open source.</p>
      </footer>
    </main>
  );
}
