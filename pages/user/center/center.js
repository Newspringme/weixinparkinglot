// pages/user/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    index: '',
    list: ['男','女'],
    name: '',
    age: 0,
    phoneNo: '',
    sex:'',
    userId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  wx.request({
    
    url: 'http://localhost:8080/parkinglot/queryUserbyUserTel',
    data: {
    userTel:wx.getStorageSync('userTel')
    },
    method: 'GET',
    success(res){
      console.log(res.data)
     that.setData({
       userId:res.data.userId,
       age:res.data.userAge,
       name:res.data.userName,
       sex:res.data.userSex,
       phoneNo:res.data.userTel
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
    var that = this;
    console.log("index="+e.detail.value)
    console.log("sex="+that.data.list);
    console.log("sex="+that.data.list[e.detail.value]);
    console.log(8888888888);
    this.setData({
      index: e.detail.value,
      sex:that.data.list[e.detail.value]
      
    })
  },
  // textareaInput(e) {
  //   var that = this;
  //   console.log(e)
  //   if (e.detail.value.length>140) {
  //     wx.showToast({
  //       title: '字数超限',
  //       duration: 1000,
  //       mask: true
  //     })
  //     setTimeout(function() {
  //       that.setData({
  //         content: ''
  //       })
  //     }.bind(that), 1000)
  //   }else {
  //     that.setData({
  //       content: e.detail.value,
  //       characterNum: e.detail.value.length
  //     })
  //   }

  // },
  phoneInput(e) {
    this.setData({
      phoneNo: e.detail.value
    })
  },
  ageInput(e) {
    this.setData({
      age: e.detail.value
    })
  },
  nameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  // makePhoneCall(){
  //   wx.makePhoneCall({
  //     phoneNumber: '12315' 
  //   })
  // },
  submit() {
    var that = this;
    if (that.data.name == 0) {
      wx.showToast({
        title: '未输入昵称',
        duration: 1000,
        icon: 'loading'
      })
      return;
    }else if(that.data.phoneNo == 0){
      wx.showToast({
        title: '未输入联系电话',
        duration: 1000,
        icon: 'loading'
      })
      return;
    }
   else {
     console.log("name="+that.data.name);
     console.log("age="+that.data.age);
     console.log("phone="+that.data.phoneNo);
     console.log("index="+that.data.list[that.data.index]);
      wx.request({
        url: 'http://localhost:8080/parkinglot/sumbitUserdata',
        data: {
          userName: that.data.name,
          userAge: that.data.age,
          userTel:that.data.phoneNo,
          userId:that.data.userId,
          userSex:that.data.sex
        },
        method: 'GET',
        success(res) {
          if(res.data == "提交成功"){
            wx.showToast({
              title: '提交成功',
              duration: 2000,
              icon: 'success'
            })
            setTimeout(function(){
              wx.navigateBack({
                url: '../../user/user',
              })
            }.bind(this), 2000)
          }
        }
      })
    }
  }
  
})