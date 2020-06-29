// pages/arond/fragment/find.js
// var app = getApp();
// var wxb = require('../../utils/wxb.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type:0,
    money:0,
    color:'',
    orderNum:''
  },

  

  backhome:function(){
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  onUnload: function () {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
})