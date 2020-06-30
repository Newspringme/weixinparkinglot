//app.js
App({
  isNeedSearch() {
    var userInfo = wx.getStorageSync("userInfo");
    console.log("登录user:")
    console.log(userInfo)
    if (!userInfo) {
      console.log("存在用户数据")
      return true;
    }
    return false;
  },
 
  enterMainPage(flag) {
    if (flag) {
      wx.redirectTo({
        url: '/pages/tologin/tologin',
      });
    } else {
      wx.redirectTo({
        url: '/pages/index/index',
      });
    }
  },
})