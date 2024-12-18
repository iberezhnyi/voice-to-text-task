import { FaMicrophoneAlt } from "react-icons/fa"; // Импорт иконки микрофона

const Home = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center space-y-6 pt-10">
      {/* Иконка */}
      <FaMicrophoneAlt className="text-purple-400 text-6xl animate-bounce" />

      {/* Заголовок */}
      <h1 className="text-4xl font-bold text-purple-400">Welcome!</h1>

      {/* Подзаголовок */}
      <p className="text-lg text-gray-300 text-center px-4 max-w-md">
        Convert your audio files to text quickly and easily. Enjoy a seamless
        experience with our simple interface.
      </p>

      {/* Кнопка */}
      <a
        href="/dashboard"
        className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Started
      </a>

      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">
          How It Works
        </h2>
        <ul className="space-y-2 text-gray-400">
          <li>🎤 Upload your audio file</li>
          <li>📝 Our AI transcribes it into text</li>
          <li>⚡ Download or share your transcription</li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
