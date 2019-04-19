// //index.js
// //获取应用实例

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
const app = getApp()
import {
  $wuxToast
} from '../dist/index'
Page({
  data: {
    usernameErrorMsg: "",
    passwordMessage: "",
    username: "",
    password: "",
    usernameStatus: false,
    passwordStatus: false
  },

  onLoad: function(options) {
    // 生命周期函数--监听页面加载

    //判断当前TOKEN是否鉴权
    wx.getStorage({
      key: 'Authorization',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {
        var head = {
          Authorization: res.data,
        }
        wx.request({
          url: 'http://192.168.1.103:8089/gunsApi/validationToken',
          method: "GET",
          header: head,
          complete: function(res) {
            if (res.data.code == 200) {
              wx.redirectTo({
                url: '../business/workbench/workbench',
              })
            }
            // wx.redirectTo({
            //   url: '../business/workbench/workbench',
            // })
          }
        })
      },
    })
  },

  login: function() {
    var that = this;

    if (that.data.username.length == 0 || that.data.password.length == 0) {
      that.setData({
        usernameStatus: true,
        passwordStatus: true,
        usernameErrorMsg: "请完善信息",
        passwordMessage: "请完善信息"
      })
    } else {
      wx.request({
        url: app.url_list.auth,
        method: "GET",
        data: {
          username: this.data.username,
          password: this.data.password
        },
        success: function(res) {
          if (res.data.success) {
            $wuxToast().show({
              type: 'success',
              duration: 1500,
              color: '#fff',
              text: '登录成功',
              success: () => {
                console.log("日期:" + Date.now, +"\n" + "用户" + that.data.username),                 wx.redirectTo({
                  url: '../business/workbench/workbench',
                })
              }
            })
            //保存Token
            // app.globalData.header.Authorization = "Bearer "+ res.data.data.token;
            wx.setStorage({
              key: 'Authorization',
              data: "Bearer " + res.data.data.token,
            })

            wx.setStorage({
              key: 'user',
              data: res.data.data.user,
            })
          } else {
            that.resetError(res.data.message);
          }
        },
        fail: function(res) {
          console.log(res)

        },
        complete: function(res) {
          // console.log(app.validationToken());
          // console.log(res)
          // console.log(getApp().globalData.header);
          // app.validationToken();
        }
      })
    }
  },

  getUsername: function(e) {
    this.resetUser();
    this.setData({
      username: e.detail.value
    })
  },

  getPassword: function(e) {
    this.resetPaw();
    this.setData({
      password: e.detail.value
    })
  },

  /**
   * 重置状态和错误信息
   */
  resetUser: function() {
    var that = this;
    that.setData({
      usernameErrorMsg: "",
      usernameStatus: false,
    })
  },

  resetPaw: function() {
    var that = this;
    that.setData({
      passwordMessage: "",
      passwordStatus: false,
    })
  },
  resetError(msg) {
    var that = this;
    that.setData({
      usernameErrorMsg: msg,
      usernameStatus: true,
      passwordMessage: msg,
      passwordStatus: true,
    })
  }

})