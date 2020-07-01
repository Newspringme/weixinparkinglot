// pages/demo01/demo01.js
Page({
    handleRenew: function (e) {
      var carNum=e.detail.value.carNum;
      var addTime=e.detail.value.addTime;
      console.log(carNum);
      console.log(addTime);
      wx.showModal({
        title: '',
        content: '您是否确认续费该时长？',
        success(res) {
         if (res.confirm) {
          wx.request({
            url: 'http://39.102.35.36:8080/parkinglot/CarController/handleRenew',
            data: {
              carNum: carNum,
              addTime: addTime
            },
            success: function(e){
              if (e.data) {
                wx.showToast({
                  title: '续费成功',
                })
                
              } else {
               wx.showToast({
                 title: '续费失败',
               })
              }
            }
          })
         } else if (res.cancel) {
          wx.showToast({
            title: '您取消了续费',
          })
         }
        }
       })
    

      }
})