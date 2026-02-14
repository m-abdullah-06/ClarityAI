import { Link, useLocation } from "react-router-dom";
import usePuterStore from "../hooks/usePuterStore";

const Header = () => {
  const location = useLocation();
  const { user, signOut } = usePuterStore();

  return (
    <header className="w-full py-4 md:py-6 px-4 mb-6 md:mb-8">
      <div className="max-w-4xl mx-auto">
        {/* Title and User Section */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ClarityAI
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 font-semibold">
              Real advice for real life
            </p>
          </div>

          {user && (
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-700">
                  {user.username}
                </p>
                <button
                  onClick={signOut}
                  className="text-xs text-indigo-600 hover:text-indigo-700"
                >
                  Sign out
                </button>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                {user.username?.[0]?.toUpperCase() || "U"}
              </div>
            </div>
          )}
        </div>

        {/* Subtitle - hidden on very small screens, shown on sm+ */}
        <p className="text-gray-600 text-base sm:text-lg mb-4 text-center hidden sm:block">
          Type your problem. Get real advice.
        </p>

        {/* Navigation */}
        <nav className="flex justify-center gap-2 sm:gap-4">
          <Link
            to="/"
            className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
              location.pathname === "/"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
              location.pathname === "/favorites"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            Favorites
          </Link>
        </nav>

        {/* Mobile-only Sign Out */}
        {user && (
          <div className="sm:hidden text-center mt-3">
            <button
              onClick={signOut}
              className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Sign out ({user.username})
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
