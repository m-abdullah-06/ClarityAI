// Favorites management using Puter KV store

const FAVORITES_PREFIX = "favorites:";

export const getFavorites = async () => {
  try {
    if (!window.puter) return [];

    const items = await window.puter.kv.list(FAVORITES_PREFIX, true);

    // items is an array of {key, value}
    const favorites = items
      .map((item) => {
        try {
          return JSON.parse(item.value);
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    // Sort by timestamp descending
    return favorites.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
    );
  } catch (error) {
    console.error("Error getting favorites:", error);
    return [];
  }
};

export const saveFavorite = async (adviceText) => {
  try {
    if (!window.puter) throw new Error("Puter not available");

    const favorite = {
      id: Date.now().toString(),
      text: adviceText,
      timestamp: new Date().toISOString(),
    };

    const key = `${FAVORITES_PREFIX}${favorite.id}`;
    await window.puter.kv.set(key, JSON.stringify(favorite));

    return favorite;
  } catch (error) {
    console.error("Error saving favorite:", error);
    throw error;
  }
};

export const deleteFavorite = async (id) => {
  try {
    if (!window.puter) throw new Error("Puter not available");

    const key = `${FAVORITES_PREFIX}${id}`;
    await window.puter.kv.del(key);
    return true;
  } catch (error) {
    console.error("Error deleting favorite:", error);
    return false;
  }
};

export const isFavorite = async (adviceText) => {
  const favorites = await getFavorites();
  return favorites.some((fav) => fav.text === adviceText);
};
