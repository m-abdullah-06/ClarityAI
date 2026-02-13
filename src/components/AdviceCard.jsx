import { useState, useEffect } from 'react';
import { saveFavorite, isFavorite as checkIsFavorite } from '../services/favorites';
import usePuterStore from '../hooks/usePuterStore';

const AdviceCard = ({ advice }) => {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = usePuterStore();

  useEffect(() => {
    const checkSaved = async () => {
      if (isAuthenticated) {
        const isSaved = await checkIsFavorite(advice);
        setSaved(isSaved);
      }
    };
    checkSaved();
  }, [advice, isAuthenticated]);

  const handleSave = async () => {
    if (!isAuthenticated) {
      alert('Please sign in to save favorites');
      return;
    }

    if (saved) return;

    setLoading(true);
    try {
      await saveFavorite(advice);
      setSaved(true);
    } catch (error) {
      console.error('Error saving:', error);
      alert('Failed to save favorite');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card slide-up group">
      <div className="flex items-start justify-between gap-4">
        <p className="text-gray-700 leading-relaxed flex-1">{advice}</p>
        
        {isAuthenticated && (
          <button
            onClick={handleSave}
            disabled={saved || loading}
            className={`flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
              saved ? 'text-yellow-500 bg-yellow-50' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'
            }`}
            title={saved ? 'Already saved' : 'Save to favorites'}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                saved ? 'scale-110' : 'group-hover:scale-110'
              }`}
              fill={saved ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
        )}
      </div>
      {saved && <p className="text-sm text-yellow-600 mt-2 fade-in">✓ Saved to favorites</p>}
    </div>
  );
};

export default AdviceCard;
