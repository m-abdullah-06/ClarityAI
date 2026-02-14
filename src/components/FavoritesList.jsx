import { useState, useEffect } from "react";
import { getFavorites, deleteFavorite } from "../services/favorites";
import ConfirmModal from "./ConfirmModal";
import usePuterStore from "../hooks/usePuterStore";
import toast, { Toaster } from "react-hot-toast";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { isAuthenticated } = usePuterStore();

  const loadFavorites = async () => {
    setLoading(true);
    const favs = await getFavorites();
    setFavorites(favs);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadFavorites();
    }
  }, [isAuthenticated]);

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;
    console.log("🗑️ Deleting ID:", selectedId);
    console.log("📋 Current favorites:", favorites);

    const success = await deleteFavorite(selectedId);

    if (success) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== selectedId));
      toast.success("Advice removed from favorites!");
    } else {
      toast.error("Failed to remove advice from favorites.");
    }

    setShowModal(false);
    setSelectedId(null);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-600">
          Please sign in to view favorites
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="inline-block w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading favorites...</p>
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">⭐</div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          No favorites yet
        </h2>
        <p className="text-gray-500">
          Save advice you find helpful to see it here
        </p>
      </div>
    );
  }

  return (
    <>
      <Toaster
        position="top-center" // Changed for mobile
        toastOptions={{
          className: "text-sm", // Smaller text on mobile
        }}
      />
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-0">
        <ConfirmModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleDelete}
          message="Are you sure you want to remove this advice from favorites?"
        />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 sm:px-0">
          Saved Advice ({favorites.length})
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="card group slide-up">
              <div className="flex items-start justify-between gap-2 sm:gap-4">
                <div className="flex-1 min-w-0">
                  {" "}
                  {/* min-w-0 prevents flex overflow */}
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                    {favorite.text}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Saved on {formatDate(favorite.timestamp)}
                  </p>
                </div>
                <button
                  onClick={() => openDeleteModal(favorite.id)}
                  className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                  title="Remove from favorites"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoritesList;
