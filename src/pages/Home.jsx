import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-gray-400 max-w-xl">
        We provide high-quality digital solutions to help grow your business.
      </p>
      <div className="mt-6">
        <Link
          to="/services"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition"
        >
          View Our Services
        </Link>
      </div>
    </div>
  );
}
