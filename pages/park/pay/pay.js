<<<<<<< HEAD
Page({
=======

Page({

>>>>>>> dome
  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
   url:''
=======
    webUrl:''
>>>>>>> dome
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    var that = this;
    let url = wx.getStorageSync('url');
    console.log("url="+url);
    that.setData({
      url: url
    });

    // 登录者已绑定车辆
    let list = wx.getStorageSync('carList');
    that.setData({
      list: list,
    });
    console.log(list);
    if (list.length == 1) {
      that.setData({
        plateId1: list[0].carNum
      })
    }
    if (list.length == 2) {
      that.setData({
        plateId2: list[1].carNum,
        plateId1: list[0].carNum,
      })
    }
    if (list.length == 3) {
      that.setData({
        plateId3: list[2].carNum,
        plateId2: list[1].carNum,
        plateId1: list[0].carNum,
        button: 'sub'
      })
    }
    that.setData({
      car: list
    })

    // 查询空车位
    wx.request({
      url: 'http://39.102.35.36:8080/parkinglot/queryNullPark',
      method: 'GET',
      success(res) {
        // console.log(res.data);
        that.setData({
          num: res.data
        })
      }
    }),
    // 查询计费规则
    wx.request({
      url: 'http://39.102.35.36:8080/parkinglot/AdminController/queryPrice',
      method: 'GET',
      success(res) {
        that.setData({
          money: res.data.ratesUprice,
          maxmoney: res.data.ratesMaxprice
        })
      }
=======
    console.log("跳转支付界面")
    console.log(options.carNum)
    console.log(options.type)

    this.setData({
      webUrl: 'www.baidu.com'
      // webUrl: 'http://localhost:8080/parkinglot/alipay?carNum='+options.carNum+'&type='+options.type
>>>>>>> dome
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
<<<<<<< HEAD

=======
    wx.reLaunch({
      url: '/pages/index/index'
    })
>>>>>>> dome
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
<<<<<<< HEAD

=======
    this.onLoad()
>>>>>>> dome
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

<<<<<<< HEAD
  },

=======
  }
>>>>>>> dome
})