// pages/demo01/demo01.js
Page({
  // carNum: function (e) {
  //   console.log(e.detail.value)
  //   },
  //   comboId: function (e){
  //     // console.log(e);
  //     var val=e.detail.value;//获取radio值，类型：字符串
  //     wx.showToast({
  //       title: ''+val,
  //     })
  //   }
    handleCombo: function (e) {
      var carNum=e.detail.value.carNum;
      var comboId=e.detail.value.comboId;
      console.log(carNum);
      console.log(comboId);
      wx.showModal({
        title: '',
        content: '您是否确认办理该套餐？',
        success(res) {
         if (res.confirm) {
          wx.request({
            url: 'http://39.102.35.36:8080/parkinglot/CarController/handlePackage',
            data: {
              carNum: carNum,
              comboId: comboId
            },
            success: function(e){
              if (e.data) {
                wx.showToast({
                  title: '办理成功',
                })
                
              } else {
               wx.showToast({
                 title: '办理失败',
               })
              }
            }
          })
         } else if (res.cancel) {
          wx.showToast({
            title: '您取消了办理',
          })
         }
        }
       })
    

      }
})