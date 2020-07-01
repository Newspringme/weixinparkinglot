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
  carList:[{}]
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var carList = wx.getStorageSync('carList');
    console.log(carList);
    console.log(wx.getStorageSync('carList'));
    // 查询金额记录
    wx.request({
      url: 'http://39.102.35.36:8080/parkinglot/weiXinQueryBill',
      method: 'GET',
      data: {
        carList:carList,
      },
      success(res) {
        console.log(res)
        console.log(res.data.data);
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
    var that = this;
      var billNum = e.target.id;
      console.log(billNum);
      wx.navigateTo({
        url: '../expense/record/record?billNum='+billNum,
      })
  }
  


})