const { getProducts, addFavoriteState, toggleFavorite } = require('../../services/product');

Page({
  data: {
    keyword: '',
    products: []
  },
  onLoad(options) {
    const keyword = options.keyword ? decodeURIComponent(options.keyword) : '';
    this.setData({ keyword });
    this.search(keyword);
  },
  onShow() {
    this.search(this.data.keyword);
  },
  handleInput(event) {
    const keyword = event.detail.value.trim();
    this.setData({ keyword });
    this.search(keyword);
  },
  handleConfirm(event) {
    this.search(event.detail.value.trim());
  },
  search(keyword) {
    const normalizedKeyword = (keyword || '').toLowerCase();
    const products = addFavoriteState(getProducts().filter((product) => (
      !normalizedKeyword
      || product.name.toLowerCase().includes(normalizedKeyword)
      || product.categoryName.toLowerCase().includes(normalizedKeyword)
      || product.tagline.toLowerCase().includes(normalizedKeyword)
    )));
    this.setData({ products });
  },
  clearSearch() {
    this.setData({ keyword: '' });
    this.search('');
  },
  openProduct(event) {
    wx.navigateTo({ url: `/pages/product-detail/index?id=${event.detail.id}` });
  },
  handleFavorite(event) {
    toggleFavorite(event.detail.id);
    this.onShow();
  }
});
