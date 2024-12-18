export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4 text-purple-400 text-center">
          Sign Up
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-gray-700 p-2 rounded text-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-700 p-2 rounded text-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-700 p-2 rounded text-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 p-2 rounded text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
