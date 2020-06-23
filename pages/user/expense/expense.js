// pages/user/expense/expense.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // array: [{
    //   message: 'foo',
    // }, {
    //   message: 'bar'
    // }],
    array:[
      {
      billId: 0,
      billTime: '',
      billNum: '',
      billState: 0,
      billTime: '',
      carId: 0,
      carNum: '',
      comboId: 0,
      comboName: '',
      userName: ''
    }
  ],
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 查询金额记录
    wx.request({
      url: 'http://localhost:8080/parkinglot/weiXinQueryBill',
      method: 'GET',
      data: {
        carNum:'京A00001',
      },
      success(res) {
        // console.log(res.data.data);
        // console.log(res.data.data[0].billNum);
        that.setData({
          array: res.data.data,
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

  },

  moneyRecord:function (e) {
      var billNum = e.target.id;
      var carNum = '京A00001';
      console.log(billNum);
      wx.navigateTo({
        url: '../expense/record/record?carNum='+carNum+'&billNum='+billNum,
      })
  }
  


})