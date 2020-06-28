
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webUrl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("跳转支付界面")
    console.log(options.carNum)
    console.log(options.type)

    this.setData({
      // webUrl: 'www.baidu.com'
      webUrl: 'http://39.102.35.36:8080/parkinglot/alipay?carNum='+options.carNum+'&type='+options.type
    })
    console.log(this.data.webUrl)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.onLoad()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})