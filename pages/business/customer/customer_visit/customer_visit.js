// pages/business/customer/customer_visit/customer_visit.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    customer: [], imgList: [],storeImageList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.getStorage({
      key: 'Authorization',
      success: function(res) {
        var head = {
          Authorization: res.data,
        }
        //获取客户列表
        wx.request({
          url: app.url_list.customer_visit,
          method: "GET",
          header: head,
          data:{
            customerId: options.customer_id
          },
          success:function(res){
            if (res.data.code === 200){
                that.setData({
                  customer:res.data.data
                })
            }else{
              wx.navigateTo({
                url: '.././index/index',
              })
            }
          }
        })
      },
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
  ChooseImage(e) {
    wx.navigateTo({
      url: '../camera/camera?type=' + e.currentTarget.dataset.type,
    })
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
 
  },
  DelImg_pic(e) {
    wx.showModal({
      title: '确定删除图片?',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  DelImg_pics(e) {
    wx.showModal({
      title: '确定删除图片?',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.storeImageList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            storeImageList: this.data.imgList
          })
        }
      }
    })
  },
})