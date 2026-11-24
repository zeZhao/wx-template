const { getProducts, addFavoriteState, getFavorites, toggleFavorite } = require('../../services/product');

Page({
  data: {
    products: [],
    favorites: []
  },
  onShow() {
    const favorites = getFavorites();
    this.setData({
      favorites,
      products: addFavoriteState(getProducts().filter((product) => favorites.includes(product.id)))
    });
  },
  openProduct(event) {
    wx.navigateTo({ url: `/pages/product-detail/index?id=${event.detail.id}` });
  },
  handleFavorite(event) {
    toggleFavorite(event.detail.id);
    this.onShow();
  },
  openCategory() {
    wx.switchTab({ url: '/pages/category/index' });
  }
});
