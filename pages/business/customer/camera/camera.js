// pages/business/customer/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      type:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      this.setData({
        type: options.type
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        var pages = getCurrentPages();

        var currPage = pages[pages.length - 1]; //当前页面
        var prevPage = pages[pages.length - 2]; //上一个页面

        if(this.data.type === "pic"){
          prevPage.setData({
            imgList: [res.tempImagePath]
          })
        }else{
          prevPage.setData({
            storeImageList: prevPage.data.storeImageList.concat(res.tempImagePath)
          })
        }
        wx.navigateBack({
          delta: 1
        })

      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})