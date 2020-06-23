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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.carNum);
    console.log(options.billNum);
    that.setData({
      billNum: options.billNum,
    })

      // 根据订单编号查账单信息
      wx.request({
        url: 'http://localhost:8080/parkinglot/queryBilldetails',
        method: 'GET',
        data: {
          carNum:'京A00001',
          billNum: options.billNum,
        },
        success(res) {
          console.log(res.data);
          that.setData({
            userName: res.data.userName,
            billTime: res.data.billTime,
            billMoney: res.data.billMoney,
            comboName: res.data.comboName,
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