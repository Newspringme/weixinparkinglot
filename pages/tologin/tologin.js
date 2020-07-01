// pages/tologin/tologin.js
const app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    loginState: '0',
    isHide: 'true',
    carList: [{
      carBrand: '',
      carColor: '',
      carId: 0,
      carNum: '',
      carType: '',
      comboId: 0,
      comboName: '',
      endTime: '',
      userId: 0,
      userName: '',
      userTel: ''
    }]

  },

  // bindGetUserInfo: function (e) {
  //   var page = this;
  //   wx.getSetting({
  //     success: function (res) {
  //       if (res.authSetting['scope.userInfo']) {
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称
  //         wxb.login()
  //         wx.navigateBack();
  //       }
  //     }
  //   })
  // },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that = this;
    //查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          console.log("用户授权了");
          app.enterMainPage(app.isNeedSearch());
          that.setData({
            loginState: 1
          })
          
        } else {
          //用户没有授权
          console.log("用户没有授权");
          that.setData({
            loginState: 0
          })
        }
      }
    });
  },

  bindGetUserInfo: function (res) {
    console.log("用户登录状态：")
    console.log(this.data.loginState)
    // if(this.data.loginState==1){
      if (res.detail.userInfo) {
        var userInfo = res.detail.userInfo
        //用户按了允许授权按钮
        var that = this;
        // 获取到用户的信息了，打印到控制台上看下
        console.log("用户的信息如下：");
        console.log(userInfo);
  
        wx.login({
          success: function (login_res) {
            wx.getUserInfo({
              success: function (res) {
                wx.request({
                  url:'http://39.102.35.36:8080/parkinglot/weChatLogin',
                  method: 'POST',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    code: login_res.code,
                    userHead: userInfo.avatarUrl, //头像
                    userName: userInfo.nickName, //昵称
                    userGender: userInfo.gender, //性别
                    userCity: userInfo.city, //城市
                    userProvince: userInfo.province //省
                  },
                  success: function (res) {
                    // const userInfo = res.data.object
                    console.log("登录后----------------用户的信息如下：");
                    console.log(res.data.data);
                    

                  // 登入成功获取所拥有的车辆信息
                  wx.request({
                    url: 'http://39.102.35.36:8080/parkinglot/queryCarNum',
                    method: 'GET',
                    data: {
                      userCard:res.data.data.userCard
                    },
                    success(res) {
                      console.log(55555);
                      console.log(res.data);
                      if(res.data!=null){
                        wx.setStorageSync('carList',res.data);
                        that.setData({
                          carList: res.data
                        })
                      }
                    }
                  })

// 将返回的数据保存到全局的缓冲中，方便其他页面使用
                    wx.setStorage({
                      key: 'userInfo',
                      data: res.data.data
                    })
                    wx.redirectTo({
                      url: '/pages/index/index',
                    })
                  }
                })
              }
            })
          }
        })

        //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
        that.setData({
          isHide: false
        });
      } else {
        //用户按了拒绝按钮
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
          showCancel: false,
          confirmText: '返回授权',
          success: function (res) {
            // 用户没有授权成功，不需要改变 isHide 的值
            if (res.confirm) {
              console.log('用户点击了“返回授权”');
            }
          }
        });
      }
    // }
    
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