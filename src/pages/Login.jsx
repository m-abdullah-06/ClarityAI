import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePuterStore from "../hooks/usePuterStore";

const Login = () => {
  const { isAuthenticated, signIn, puterReady, isLoading } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-violet-100 via-blue-100 to-indigo-100

"
    >
      <div className="absolute w-72 h-72 bg-violet-200 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      <div className="max-w-md w-full">
        <div className="text-center mb-8 fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ClarityAI
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            Clarity when life feels overwhelming.
          </p>
          <p className="text-sm text-gray-500">
            A quiet place to think clearly.
          </p>
        </div>

        <div className="card text-center slide-up bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-8 ">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome!</h2>
            <p className="text-gray-600">
              Save the words that help you and come back to them anytime.
            </p>
          </div>

          <button
            onClick={signIn}
            disabled={!puterReady || isLoading}
            className="w-full py-3 rounded-xl font-semibold text-white 
bg-gradient-to-r from-indigo-500 to-violet-500
hover:from-indigo-600 hover:to-violet-600
transition-all duration-300 shadow-md hover:shadow-lg
disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

          <div className="mt-6 text-sm text-gray-500">
            <p className="mb-2">✨ Features:</p>
            <ul className="text-left space-y-1 text-gray-600">
              <li>• Gentle AI guidance</li>
              <li>• Save meaningful advice</li>
              <li>• Access from any device</li>
              <li>• Private & secure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
