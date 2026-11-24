const { getProducts, getCategories, addFavoriteState, toggleFavorite } = require('../../services/product');

Page({
  data: {
    categories: [],
    activeCategory: 'all',
    products: []
  },
  onShow() {
    this.setData({ categories: getCategories() });
    this.applyCategory();
  },
  selectCategory(event) {
    this.setData({ activeCategory: event.currentTarget.dataset.id });
    this.applyCategory();
  },
  applyCategory() {
    const allProducts = addFavoriteState(getProducts());
    const products = this.data.activeCategory === 'all'
      ? allProducts
      : allProducts.filter((product) => product.categoryId === this.data.activeCategory);
    this.setData({ products });
  },
  openProduct(event) {
    wx.navigateTo({ url: `/pages/product-detail/index?id=${event.detail.id}` });
  },
  handleFavorite(event) {
    toggleFavorite(event.detail.id);
    this.onShow();
  },
  openSearch() {
    wx.navigateTo({ url: '/pages/search/index' });
  }
});
