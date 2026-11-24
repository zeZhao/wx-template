const { getProductById, isFavorite, toggleFavorite } = require('../../services/product');

Page({
  data: {
    product: null,
    favorite: false
  },
  onLoad(options) {
    const product = getProductById(options.id);
    if (!product) {
      wx.showToast({ title: '商品不存在', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1200);
      return;
    }
    this.setData({
      product,
      favorite: isFavorite(product.id)
    });
  },
  onShow() {
    if (this.data.product) {
      this.setData({ favorite: isFavorite(this.data.product.id) });
    }
  },
  toggleFavorite() {
    if (!this.data.product) return;
    const favorite = toggleFavorite(this.data.product.id);
    this.setData({ favorite });
    wx.showToast({
      title: favorite ? '已加入收藏' : '已取消收藏',
      icon: 'none'
    });
  }
});
