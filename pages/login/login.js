Page({
  /**
   * 页面的初始数据
   */
  data: {
    sectionTwo: true,
    sectionThree: false,
    sectionFour: false,
    triLeft: 0.23,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    profile: '访客',
    step: 1,
    phone: '',
    password: '',
    organization: '',
    name: '',
    id: '',
    nickname: '',
    head_img: '',
    loginPhone: '',
    loginPassword: '',
    multiIndex: [0, 0],
    multiArrayId: [],
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
    }],
    tbUser:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   var that = this;
  //   // 组织部门获取
  //   wx.request({
  //     url: 'https://www.zjzlnet.com/zjepeframeworks/zjepeframe_parkAppUser/initAppUser',
     
  //     data: {
  //       userId: 'admin',
  //       passWord: '0192023a7bbd73250516f069df18b500'
  //     },
  //     success(res) {
  //       console.log(res)
  //       let org1 = [];
  //       let org2 = [];
  //       let org1id = [];
  //       let org2id = [];
  //       let org = [];
  //       let orgId = [];
  //       for(let i=0;i<res.data.firstMenuData.length; i++) {
  //         org1.push(res.data.firstMenuData[i].orgName);
  //         org1id.push(res.data.firstMenuData[i].orgId);
  //       }
  //       for (let j=0; j<res.data.secondMenuData.length; j++) {
  //         org2.push(res.data.secondMenuData[j].orgName);
  //         org2id.push(res.data.secondMenuData[j].orgId);
  //       }
  //       org.push(org1);
  //       org.push(org2);
  //       orgId.push(org1id);
  //       orgId.push(org2id);
  //       console.log(orgId);
  //       that.setData({
  //         multiArray: org,
  //         multiArrayId: orgId 
  //       })
  //     }
  //   })
  //   // 获取用户授权
  //   wx.getSetting({
  //     success(res) {
  //       if (!res.authSetting['scope.userInfo']) {
  //         wx.authorize({
  //           scope: 'scope.userInfo',
  //           success() {
  //             // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
  //             wx.getUserInfo({
  //               //如果全局用户信息存在，则直接设置数据
  //               withCredentials: false,
  //               success: function (res) {
  //                 that.setData({
  //                   nickname: res.userInfo.nickName,
  //                   head_img: res.userInfo.avatarUrl
  //                 })
  //               }
  //             })
  //           }
  //         })
  //       }
  //     }
  //   })
  // },

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
  // 登录和注册选择
  sectionTwo() {
    this.setData({
      sectionTwo: true,
      sectionThree: false,
      triLeft: 0.23,
      step: 1,
      phone: '',
      password: '',
      organization: '',
      name: '',
      id: '',
      loginPhone: '',
      loginPassword: ''
    })
  },
  sectionThree() {
    this.setData({
      sectionTwo: false,
      sectionThree: true,
      triLeft: 0.73,
      step: 1,
      phone: '',
      password: '',
      organization: '',
      name: '',
      id: '',
      loginPhone: '',
      loginPassword: ''
    })
  },
  // 登录赋值
  sectionTwoPhone(e) {
    this.setData({
      loginPhone: e.detail.value
    })
  },
  sectionTwoPassword(e) {
    this.setData({
      loginPassword: e.detail.value
    })
  },
  // 注册赋值
  // 绑定多选择器更改
  bindMultiPickerChange(e) {
    var that = this;
    // console.log(e.detail.value[1]);
    let index = e.detail.value[1];
    console.log(index);
   
    that.setData({
      organization: that.data.multiArrayId[1][index],
      multiIndex: e.detail.value
    })
  },

// 绑定多选择器列更改
  bindMultiPickerColumnChange(e){
    // console.log('1111111')
    console.log(e.detail)
    
    var that = this;
    var a = [];
    a.push(e.detail.column);
    a.push(e.detail.value);
    that.setData ({
      multiIndex: a
    })
    if (e.detail.column == 1) {
      var index = e.detail.value;
      // console.log(index);
      // console.log(that.data.multiArrayId[1][index]);
      that.setData({
        organization: that.data.multiArrayId[1][index]
      })
    }
  },
  sectionThreeVisitorPhone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  sectionThreeVisitorPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  sectionThreeEmployeePhone(e) {
    this.setData({
      phone: e.detail.value
    })

  },
  sectionThreeEmployeePassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  sectionThreeEmployeeOrganization(e) {
    this.setData({
      organization: e.detail.value
    })
  },
  sectionThreeEmployeeName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  sectionThreeEmployeeId(e) {
    this.setData({
      id: e.detail.value
    })
  },


  // 访客注册赋值
  sectionThreeVisitorPhone(e) {
    console.log(e);
    this.setData({
      phone: e.detail.value
    })
  },
  sectionThreeVisitorPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },


  // 登录
  loginHandle() {
    var that = this;
    //正则方法
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (that.data.loginPhone.length == 0) {
      wx.showToast({
        title: '手机号为空',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (that.data.loginPhone.length < 11) {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (!myreg.test(that.data.loginPhone)) {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (that.data.loginPassword.length < 6) {
      wx.showToast({
        title: '密码少于6位',
        duration: 1500,
        mask: true
      })
    } else {
      // 登陆传输数据
      wx.login({
        success: function (res) {
          if (res.code) {
            // console.log(that.data.head_img);
            console.log( that.data.loginPhone,
              that.data.loginPassword)
            wx.request({
              url:  'http://39.102.35.36:8080/parkinglot/UserController/userLogin',
              data: {
                // code: res.code,
                // head_img: that.data.head_img,
                // nickname: that.data.nickname,
                "phone": that.data.loginPhone,
                "password": that.data.loginPassword
              },
              
              // method: 'POST',
              success(res) {

                console.log(res);
                // if (res.data.errno == 0) {//错误代码为0
                  if (res.data == '用户名或密码错误') {
                    wx.showToast({
                      title: '密码错误',
                      icon: 'loading',
                      duration: 2000,
                      mask: true,
                    })
                    return false;
                  }
                  if (res.data == '请先注册') {
                    wx.showToast({
                      title: '请先注册',
                      icon: 'loading',
                      duration: 2000,
                      mask: true,
                    })
                    return false;
                  }
                  if (res.data == '登陆成功') {
                    // wx.setStorageSync('token', res.data.data);
                    wx.setStorageSync('userTel',that.data.loginPhone);
                    wx.showToast({
                      title: '登录成功',
                      icon: 'success',
                      duration: 2000,
                      mask: true,
                    })
                    console.log(that.data.loginPhone);
                    console.log('ffff'+wx.getStorageSync('userTel'));

                    // 登录成功获取用户信息
                    wx.request({
                      url: 'http://39.102.35.36:8080/parkinglot/UserController/queryUserName',
                      method: 'GET',
                      data: {
                        userTel:wx.getStorageSync('userTel')
                      },
                      success(res) {
                        console.log(res.data);
                        if(res.data!=null){
                          console.log(888888)
                          wx.setStorageSync('tbUser',res.data);
                          console.log('ffff'+wx.getStorageSync('tbUser').userName);
                          that.setData({
                            tbUser: res.data
                          })
                        }
                      }
                    })
                   

                    // 登入成功获取所拥有的车辆信息
                    wx.request({
                      url: 'http://39.102.35.36:8080/parkinglot/queryCarNum',
                      method: 'GET',
                      data: {
                        userTel:wx.getStorageSync('userTel')
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



                    wx.navigateTo({
                      url: '../index/index',
                    })
                    // wx.showToast({
                    //   title: '测试'+wx.getStorage({
                    //     key: 'userTel',
                    //   }),
                    // })
                    setTimeout(function () {
                      wx.navigateBack({
                        url: '../index/index',
                      })
                    }.bind(that), 2000);
                  }
                // }
              },
              fail() {//失败返回
                wx.setStorage({
                  key: 'status',
                  data: '2',
                })
                wx.showToast({
                  title: '登录失败',
                  icon: 'loading',
                  duration: 2000,
                  mask: true
                })
              }
            })
          } 
          else {
            console.log('获取用户登录态失败！' + res.errMsg)
               }
        }
      })
    }
  },

  // 访客注册
  register2Handle() {
    var that = this;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (that.data.phone.length == 0) {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (that.data.phone.length < 11) {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (!myreg.test(that.data.phone)) {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (that.data.password.length < 6) {
      wx.showToast({
        title: '密码少于6位',
        duration: 1500,
        mask: true
      })
    }
    
    else {
      //获取用户信息
      wx.login({
        success: function (res) {
          if (res.code) {
            //发起网络请求
            console.log(that.data.head_img)
            console.log(  that.data.phone,
              that.data.password)
            wx.request({
              url: 'http://39.102.35.36:8080/parkinglot/UserController/userAdd',
              data: {
                // code: res.code,
                // head_img: that.data.head_img,
                // nickname: that.data.nickname,
                phone: that.data.phone,
                password: that.data.password,
                // organization: that.data.organization,
                // name: that.data.name,
                // id: that.data.id,
              },
              // method: 'POST',
              success(res) {
                console.log(res)
                // if (res.data.errno == 0) {
                  if (res.data.data == '注册成功') {
                    wx.showToast({
                      title: '注册成功',
                      duration: 2000,
                      mask: true,
                    })
                    setTimeout(function () {
                      wx.navigateBack({
                        url: '../index/index'
                      })
                    }.bind(that), 2000)
                  }
                  if (res.data == '手机号已注册') {
                    wx.showToast({
                      title: '手机号已注册',
                      icon: 'loading',
                      duration: 2000,
                      mask: true,
                    })
                    return false;
                  }
                  if (res.data.data !== '注册申请已提交，请耐心等待管理员审核') {
                    // console.info("登陆成功，则保存token到本地");

                    wx.setStorageSync('token', res.data.data);
                    wx.showToast({
                      title: '注册已提交',
                      icon: 'success',
                      duration: 2000,
                      mask: true,
                    })
                    setTimeout(function () {
                      wx.showToast({
                        title: '登录成功',
                        icon: 'success',
                        duration: 2000
                      })
                    }.bind(that), 2000)
                    setTimeout(function () {
                      wx.navigateBack({
                        url: '../index/index',
                      })
                    }.bind(that), 4000);
                  }

                // }
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      })
    }
  }
})