export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold">
        Oops! The URL you are looking for does not exist.
      </p>
      <p className="text-lg text-gray-600 mt-2">
        It seems the URL you have entered is invalid or expired.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 transition duration-300"
      >
        Go back to the Homepage
      </a>
    </main>
  );
}
