const { categories, products } = require('../data/products');

function getProducts() {
  return products.slice();
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addFavoriteState(items) {
  const favorites = getFavorites();
  return items.map((product) => ({
    ...product,
    isFavorite: favorites.includes(product.id)
  }));
}

function getCategories() {
  return categories.slice();
}

function getFavorites() {
  const ids = wx.getStorageSync('favoriteProductIds');
  return Array.isArray(ids) ? ids : [];
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  const favorites = getFavorites();
  const nextFavorites = favorites.includes(id)
    ? favorites.filter((favoriteId) => favoriteId !== id)
    : favorites.concat(id);
  wx.setStorageSync('favoriteProductIds', nextFavorites);
  return nextFavorites.includes(id);
}

module.exports = {
  getProducts,
  getProductById,
  getCategories,
  addFavoriteState,
  getFavorites,
  isFavorite,
  toggleFavorite
};
