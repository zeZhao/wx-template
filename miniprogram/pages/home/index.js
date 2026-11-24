const { getProducts, addFavoriteState, toggleFavorite } = require('../../services/product');

Page({
  data: {
    products: []
  },
  onShow() {
    const products = addFavoriteState(getProducts());
    this.setData({ products });
  },
  openSearch() {
    wx.navigateTo({ url: '/pages/search/index' });
  },
  openCategory() {
    wx.switchTab({ url: '/pages/category/index' });
  },
  openProduct(event) {
    wx.navigateTo({ url: `/pages/product-detail/index?id=${event.detail.id}` });
  },
  handleFavorite(event) {
    toggleFavorite(event.detail.id);
    this.onShow();
  }
});
