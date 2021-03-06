// pages/user/expense/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    billNum: '',
    userName: '',
    billTime: '',
    billMoney: '',
    comboName: '',
    carNum: '',
    billType: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.billNum);
    that.setData({
      billNum: options.billNum,
    })

      // 根据订单编号查账单信息
      wx.request({
        url: 'http://39.102.35.36:8080/parkinglot/queryBilldetails',
        method: 'GET',
        data: {
          billNum: options.billNum,
        },
        success(res) {
          console.log(res.data);
          that.setData({
            carNum: res.data.carNum,
            userName: res.data.userName,
            billTime: res.data.billTime,
            billMoney: res.data.billMoney,
            comboName: res.data.comboName,
            billType: res.data.billType
          })
        }
      })

  
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

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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

  }
})