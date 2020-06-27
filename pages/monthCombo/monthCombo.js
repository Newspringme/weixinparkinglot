// pages/monthCombo/monthCombo.js
Page({
  toCar(){
    wx.navigateTo({
      url: '../addCar/addCar',
    })
  },
  toHandle(){
    wx.navigateTo({
      url: '../handlePackage/handlePackage',
    })
  },
  toRenew(){
    wx.navigateTo({
      url: '../handleRenew/handleRenew',
    })
  }
})