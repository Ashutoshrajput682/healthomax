// app/page.tsx

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to Our Platform</h1>
      <p className="text-lg text-blue-700 mb-6">Discover content, ask questions, and connect.</p>

      <a href="/LandingPage">
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
          Go to Home Page
        </button>
      </a>
    </main>
  );
}
