Page({
  data: {
    phoneNumber: ''
  },
  contactUs() {
    if (!this.data.phoneNumber) {
      wx.showToast({ title: '店铺联系方式待配置', icon: 'none' });
      return;
    }
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber
    });
  }
});
