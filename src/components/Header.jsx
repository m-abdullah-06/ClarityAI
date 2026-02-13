import { Link, useLocation } from 'react-router-dom';
import usePuterStore from '../hooks/usePuterStore';

const Header = () => {
  const location = useLocation();
  const { user, signOut } = usePuterStore();

  return (
    <header className="w-full py-6 px-4 mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Life Advice
            </h1>
            <p className="text-gray-600 text-sm mt-1">Powered by Puter AI</p>
          </div>
          
          {user && (
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">{user.username}</p>
                <button onClick={signOut} className="text-xs text-indigo-600 hover:text-indigo-700">
                  Sign out
                </button>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {user.username?.[0]?.toUpperCase() || 'U'}
              </div>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-lg mb-4 text-center">
          Type your problem. Get real advice.
        </p>
        
        <nav className="flex justify-center gap-4">
          <Link to="/" className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
            location.pathname === '/' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
          }`}>
            Home
          </Link>
          <Link to="/favorites" className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
            location.pathname === '/favorites' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
          }`}>
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
