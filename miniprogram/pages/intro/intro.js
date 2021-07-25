// pages/intro/intro.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
  },

  /**
   * Lifecycle function--Called when page load
   */
  showQrcode1: function () {
    wx.previewImage({
      current: '图片1链接',
      urls: ['图片1链接']
    })
  },
  showQrcode2: function () {
    wx.previewImage({
      current: '图片2链接',
      urls: ['图片2链接']
    })
  },
  //电话拨打
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: 'Your phoneNumber',
      fail() {
        console.log('拨打失败');
      }
    })
  },
  //保存通讯录
  saveContact: function () {
    wx.addPhoneContact({
      nickName: 'nickName',
      firstName: 'firstName',
      lastName: 'lastName',
      remark: 'remark',
      mobilePhoneNumber: 'mobilePhoneNumber',
      weChatNumber: 'weChatNumbe',
      addressCountry:'addressCountry',
      addressState: 'addressState',
      addressCity: 'addressCity',
      email:'email',
      url:'url',
      success() {},
      fail() {
        console.log('保存失败');
      }
    })
  },
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }
})