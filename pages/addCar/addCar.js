// pages/addCar/addCar.js
Page({
  addCar: function(e){
    var tbCar={
      "userName":e.detail.value.userName,
      "carNum":e.detail.value.carNum,
      "carType":e.detail.value.carType,
      "carBrand":e.detail.value.carBrand,
      "carColor":e.detail.value.carColor
    };
   
    wx.request({
      url: 'http://39.102.35.36:8080/parkinglot/CarController/addCar',
      data: {
        msg:tbCar
      },
      success: function(e){
        if (e.data) {
          wx.showToast({
            title: '绑定成功',
          })
        } else {
          wx.showToast({
            title: '绑定失败',
          })
        }

      }
    })

  }


})