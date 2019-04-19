
const app = getApp()
import { $stopWuxRefresher, $stopWuxLoader } from '../../../dist/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    customer: [],
    scrollTop: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // wx.getStorage({
    //   key: 'Authorization',
    //   success: function(res) {
    //     var head = {
    //       Authorization: res.data,
    //     }
    //     //获取客户列表
    //     wx.request({
    //       url: app.url_list.customer_list,
    //       method: "GET",
    //       header: head,
    //       success:function(res){
    //         if (res.data.code === 200){
    //             that.setData({
    //               customer:res.data.data
    //             })
    //         }else{
    //           wx.navigateTo({
    //             url: '.././index/index',
    //           })
    //         }
    //       }
    //     })
    //   },
    // })
    //测试环境
    that.setData({
      customer: [{
        "customerAddress": "昭和街",
        "customerArea": "13",
        "customerCode": "JYZHP_JP",
        "customerId": "3",
        "customerLatitude": 0.4080840000,
        "customerLongitude": 112.6355490000,
        "customerName": "矢浪 [解忧杂货铺]",
        "customerPhone": "15692152871",
        "customerRemark": "FUCK",
        "customerStoreName": "解忧杂货铺"
      },
      {
        "customerAddress": "双墩镇",
        "customerArea": "11",
        "customerCode": "WBLM_CN",
        "customerId": "4",
        "customerLatitude": 32.0026290000,
        "customerLongitude": 117.2586270000,
        "customerName": "CJ [味霸拉面馆]",
        "customerPhone": "110",
        "customerRemark": "阿诗丹顿多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多",
        "customerStoreName": "味霸拉面馆"
      }]
    })


  },

  backIndex: function () {

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

  onPulling() {
    console.log('onPulling')
  },

  onRefresh: function () {
    setTimeout(() => {

      $stopWuxRefresher()
    }, 2000)
  },

  /**
   * 
   */
  customer_visit: function (e) {
      wx.navigateTo({
        url: '../customer_visit/customer_visit?customer_id='+e.currentTarget.dataset.id,
      })
  }

})