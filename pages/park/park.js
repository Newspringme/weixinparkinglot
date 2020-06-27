Page({
  /**
   * 页面的初始数据
   */
  data: {
    money:'',
    maxmoney:'',
    num: '',
    carNum: '',
    disabled: 'false',
    state: '未',
    state2: '无',
    fee: '',
    plateId1: '可添加',
    plateId1color: 'lightgray',
    plateId2: '可添加',
    plateId2color: 'lightgray',
    plateId3: '可添加',
    plateId3color: 'lightgray',
    inputstate: 1,
    token: wx.getStorageSync('token'),
    coupon: '无减免特权',
    ticket: '无可用停车券',
    array: ['浙', '沪', '苏', '京', '津', '冀', '晋', '蒙', '黑', '吉', '辽', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '贵', '琼', '川', '贵', '云', '渝', '藏', '陕', '甘', '青', '宁', '新'],
    array2: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    index: 0,
    index2: 0,
    status: 2,
    car: [],
    button: 'add',
    index3: 0,
    unbindcar: '',
    list: [{}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let status = wx.getStorageSync('status');
    that.setData({
      status: status
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
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange2(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  unbindPickerChange(e) {
    console.log(e.detail.value)
    var that = this;
    that.setData({
      unbindcar: that.data.car[e.detail.value],
      index3: e.detail.value
    })
    console.log(that.data.unbindcar)
  },
  subcard() {
    var that = this;
    that.setData({
      inputstate: 3
    })
    // 查询车牌
    wx.request({
      url: 'https://www.zjzlnet.com/zjepeframeworks/zjepeframe_Parking/getPlateIdByToken',
      method: 'GET',
      data: {
        userId: 'admin',
        passWord: '0192023a7bbd73250516f069df18b500',
        token: wx.getStorageSync('token'),
        userType: that.data.status
      },
      success(res) {
        // console.log(res.data[0].data[1]);   
        // 没有返回值，等后端调试得数值给data赋值，就可以展示车牌了
        let list = [];
        for (let i = 0; i < res.data[0].data.length; i++) {
          list.push(res.data[0].data[i]);
        };
        if (list.length == 1) {
          that.setData({
            plateId1: list[0]
          })
        }
        if (list.length == 2) {
          that.setData({
            plateId2: list[1],
            plateId1: list[0],
          })
        }
        if (list.length == 3) {
          that.setData({
            plateId3: list[2],
            plateId2: list[1],
            plateId1: list[0],
            button: 'sub'
          })
        }
        that.setData({
          car: list
        })
      }
    })
  },
  addcard() {
    this.setData({
      inputstate: 2
    })
  },
  statechange() {
    this.setData({
      state: 1
    })
  },
  carInput(e) {
    this.setData({
      carNum: e.detail.value
    })
    console.log(this.data.carNum)
  },
  // 解绑车牌的确定与取消
  subcardinputcancel() {
    this.setData({
      inputstate: 1,
      carNum: ''
    })
  },
  subcardinputconfirm() {
    var that = this;
    wx.request({
      url: 'https://www.zjzlnet.com/zjepeframeworks/zjepeframe_Parking/unbindPlateId',
      method: 'GET',
      data: {
        userId: 'admin',
        passWord: '0192023a7bbd73250516f069df18b500',
        token: wx.getStorageSync('token'),
        plateId: that.data.unbindcar,
        userType: that.data.status
      },
      success(res) {

        if (that.data.unbindcar == that.data.plateId1) {
          that.setData({
            plateId1: '可添加'
          })
        }
        if (that.data.unbindcar == that.data.plateId2) {
          that.setData({
            plateId2: '可添加'
          })
        }
        if (that.data.unbindcar == that.data.plateId3) {
          that.setData({
            plateId3: '可添加'
          })
        }
        that.setData({
          unbindcar: '',
          inputstate: 1,
          carNum: ''
        })
      }
    })
  },
  // 添加车牌的确定与取消
  cardinputcancel() {
    this.setData({
      inputstate: 1,
      carNum: ''
    })
  },
  cardinputconfirm() {
    var that = this;
    if (that.data.plateId3 !== '可添加') {
      that.setData({
        inputstate: 3
      })
      wx.showToast({
        title: '最多3车牌',
        icon: 'loading',
        duration: 1500,
        mask: true
      })
      that.setData({
        inputstate: 1,
        carNum: '',
        button: 'sub'
      })
      return;
    }
    wx.request({
      url: 'https://www.zjzlnet.com/zjepeframeworks/zjepeframe_Parking/addVehicle?userId=admin&passWord=0192023a7bbd73250516f069df18b500',
      data: {
        plateId: `${that.data.array[that.data.index]}${that.data.array2[that.data.index2]}${that.data.carNum}`,
        token: wx.getStorageSync('token'),
        userType: that.data.status
      },
      method: 'GET',
      success(res) {
        console.log(res.data);
        if (that.data.plateId1 == '可添加' && that.data.plateId2 == '可添加' && that.data.plateId3 == '可添加') {
          that.setData({
            plateId1: `${that.data.array[that.data.index]}${that.data.array2[that.data.index2]}${that.data.carNum}`
          })
        } else if (that.data.plateId1 !== '可添加' && that.data.plateId2 == '可添加' && that.data.plateId3 == '可添加') {
          that.setData({
            plateId2: `${that.data.array[that.data.index]}${that.data.array2[that.data.index2]}${that.data.carNum}`
          })
        } else if (that.data.plateId1 !== '可添加' && that.data.plateId2 !== '可添加' && that.data.plateId3 == '可添加') {
          that.setData({
            plateId3: `${that.data.array[that.data.index]}${that.data.array2[that.data.index2]}${that.data.carNum}`
          })
        } else if (that.data.plateId1 !== '可添加' && that.data.plateId2 !== '可添加' && that.data.plateId3 !== '可添加') {
          wx.showToast({
            title: '最多3车牌',
            icon: 'loading',
            duration: 1500,
            mask: true
          })

        }
        that.setData({
          inputstate: 1,
          carNum: ''
        }),
          wx.showToast({
            title: '添加成功',
          })
      }
    })
  },
  // 点击车牌事件
  plateId1Handle() {
    var that = this;
    if (that.data.plateId1 == '可添加') {
      wx.showToast({
        title: '点击添加按钮',
        icon: 'loading',
        mask: true
      })
      return;
    }
  // 修改用户特权
    // console.log(that.data.list);
    // console.log(this.data.list[0].carNum);
    // console.log(this.data.plateId1);
    for (let i = 0; i < that.data.list.length; i++) {
      if(that.data.list[i].carNum==this.data.plateId1){
        if(that.data.list[i].comboName!=null){
           that.setData({
            coupon: that.data.list[i].comboName
          })
          break;
        }
      } else{
        that.setData({
          coupon: '无减免特权'
        })
      }
    }
    that.setData({
      plateId3color: 'lightgray',
      plateId1color: '#0082DF',
      plateId2color: 'lightgray',
      carNum: that.data.plateId1
    });
// 查询是否停车，需要交费多少
    wx.request({
        url: 'http://39.102.35.36:8080/parkinglot/parkController/queryParkByCarNum',
        method: 'GET',
        data: {
          searchText: this.data.plateId1,
        },
        success(res) {
          console.log(res)
          if(res.data!='false'){
            that.setData({
              state: '已',
              state2: ''
            })
            if(that.data.list[0].comboId==0){
              // 已停车且无办卡，查需要缴费多少
              wx.request({
                url: 'http://39.102.35.36:8080/parkinglot/weiXinCarPay',
                method: 'GET',
                data: {
                  carNum: that.data.plateId1,
                  type: 'car'
                },
                success(res) {
                  console.log('支付金额：')
                  console.log(res.data);
                  var pay = res.data;
                  that.setData({
                    fee: pay,
                    state: '已',
                    state2: ''
                  })
                }
              })
            }else{
              that.setData({
                fee: '',
                state: '已',
                state2: '无'
              })
            }
          }else{
            that.setData({
              fee: '',
              state: '未',
              state2: '无'
            })
          }
        }
      })
  },
  plateId2Handle() {
    var that = this;
    if (that.data.plateId2 == '可添加') {
      wx.showToast({
        title: '点击添加按钮',
        icon: 'loading',
        mask: true
      })
      return;
    }
  // 修改用户特权
    console.log(that.data.list);
    console.log(this.data.list[1].carNum);
    console.log(this.data.plateId2);
    for (let i = 0; i < that.data.list.length; i++) {
      if(that.data.list[i].carNum==this.data.plateId2){
        if(that.data.list[i].comboName!=null){
           that.setData({
            coupon: that.data.list[i].comboName
          })
          break;
        }
      } else{
        that.setData({
          coupon: '无减免特权'
        })
      }
    }
    that.setData({
      plateId3color: 'lightgray',
      plateId1color: 'lightgray',
      plateId2color: '#0082DF',
      carNum: that.data.plateId1
    })
    // 查询是否停车，需要交费多少
    wx.request({
      url: 'http://39.102.35.36:8080/parkinglot/parkController/queryParkByCarNum',
      method: 'GET',
      data: {
        searchText: this.data.plateId2
      },
      success(res) {
        console.log(res)
        if(res.data!='false'){
          that.setData({
            state: '已',
            state2: ''
          });
          if(that.data.list[1].comboId==0){
            // 已停车且无办卡，查需要缴费多少
            wx.request({
              url: 'http://39.102.35.36:8080/parkinglot/weiXinCarPay',
              method: 'GET',
              data: {
                carNum: that.data.plateId2,
                type: 'car'
              },
              success(res) {
                console.log('支付金额：')
                console.log(res.data);
                var pay = res.data;
                that.setData({
                  fee: pay,
                  state: '已',
                  state2: ''
                })
              }
            })
          }else{
            that.setData({
              fee: '',
              state: '已',
              state2: '无'
            })
          }
        }else{
          that.setData({
            fee: '',
            state: '未',
            state2: '无'
          })
        }
      }
    })
  },
  plateId3Handle() {
    var that = this;
    if (that.data.plateId3 == '可添加') {
      wx.showToast({
        title: '点击添加按钮',
        icon: 'loading',
        mask: true
      })
      return;
    }
    // 修改用户特权
    for (let i = 0; i < that.data.list.length; i++) {
      if(that.data.list[i].carNum==this.data.plateId3){
        if(that.data.list[i].comboName!=null){
           that.setData({
            coupon: that.data.list[i].comboName
          })
          break;
        }
      } else{
        that.setData({
          coupon: '无减免特权'
        })
      }
    }
    that.setData({
      plateId3color: '#0082DF',
      plateId1color: 'lightgray',
      plateId2color: 'lightgray',
      carNum: that.data.plateId1
    })
    // 查询是否停车，需要交费多少
    wx.request({
      url: 'http://39.102.35.36:8080/parkinglot/parkController/queryParkByCarNum',
      method: 'GET',
      data: {
        searchText: this.data.plateId3
      },
      success(res) {
        console.log(res)
        if(res.data!='false'){
          that.setData({
            state: '已',
            state2: ''
          })
          if(that.data.list[2].comboId==0){
            // 已停车且无办卡，查需要缴费多少
            wx.request({
              url: 'http://39.102.35.36:8080/parkinglot/weiXinCarPay',
              method: 'GET',
              data: {
                carNum: that.data.plateId3,
                type: 'car'
              },
              success(res) {
                console.log('支付金额：')
                console.log(res.data);
                var pay = res.data;
                that.setData({
                  fee: pay,
                  state: '已',
                  state2: ''
                })
              }
            })
          }else{
            that.setData({
              fee: '',
              state: '已',
              state2: '无'
            })
          }
        }else{
          that.setData({
            fee: '',
            state: '未',
            state2: '无'
          })
        }
      }
    })
  }
})