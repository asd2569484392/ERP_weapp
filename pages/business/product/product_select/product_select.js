// // pages/business/product/product_select/product_select.js
const app = getApp()

// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     products: [],
//     StatusBar: app.globalData.StatusBar,
//     CustomBar: app.globalData.CustomBar,
//     Custom: app.globalData.Custom,
//     TabCur: 0,
//     MainCur: 0,
//     VerticalNavTop: 0,
//     list: [],
//     load: true
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     wx.showLoading({
//       title: '加载中...',
//       mask: true
//     });
//     let list = [{}];
//     for (let i = 0; i < 26; i++) {
//       list[i] = {};
//       list[i].name = String.fromCharCode(65 + i);
//       list[i].id = i;
//     }
//     this.setData({
//       list: list,
//       listCur: list[0]
//     })


//   },

//   onChange(e) {
//     console.log('onChange', e)
//     this.setData({
//       current: e.detail.key,
//     })
//   },
//   onTabsChange(e) {
//     console.log('onTabsChange', e)
//     const { key } = e.detail
//     const index = this.data.products.map((n) => n.key).indexOf(key)

//     this.setData({
//       key,
//       index,
//     })
//   },
//   onSwiperChange(e) {
//     console.log('onSwiperChange', e)
//     const { current: index, source } = e.detail
//     const { key } = this.data.tabs[index]

//     if (!!source) {
//       this.setData({
//         key,
//         index,
//       })
//     }
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */



//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   },
//   tabSelect(e) {
//     this.setData({
//       TabCur: e.currentTarget.dataset.id,
//       MainCur: e.currentTarget.dataset.id,
//       VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
//     })
//   },
//   VerticalMain(e) {
//     let that = this;
//     let list = this.data.list;
//     let tabHeight = 0;
//     if (this.data.load) {
//       for (let i = 0; i < list.length; i++) {
//         let view = wx.createSelectorQuery().select("#main-" + list[i].id);
//         view.fields({
//           size: true
//         }, data => {
//           list[i].top = tabHeight;
//           tabHeight = tabHeight + data.height;
//           list[i].bottom = tabHeight;
//         }).exec();
//       }
//       that.setData({
//         load: false,
//         list: list
//       })
//     }
//     let scrollTop = e.detail.scrollTop + 20;
//     for (let i = 0; i < list.length; i++) {
//       if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
//         that.setData({
//           VerticalNavTop: (list[i].id - 1) * 50,
//           TabCur: list[i].id
//         })
//         return false
//       }
//     }
//   }
// })

Page({
  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    //模拟数据

    products: [

    ],

    curNav: 1,
    curIndex: 0
  },

  //事件处理函数
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  selected: function(e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected: true,
    })
  },
  selected1: function(e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false
    })
  },
  selected2: function(e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      products: [{
          "kindPid": 0,
          "kindName": "白酒类",
          "kindId": 5,
          "products": [{
            "productTaxFreeUnitPrice": 60.00,
            "specificationId": 2,
            "images": [{
                "imageCreateTime": "2019-04-15 12:55:28",
                "imageId": "1117652637098037250",
                "imageUrl": "bf48a0cb-6dbb-49ff-926c-a43c5d496129.jpg"
              },
              {
                "imageCreateTime": "2019-04-17 13:21:56",
                "imageId": "1118384072410918914",
                "imageUrl": "2f9fb34c-f4d2-420c-8745-ebc76598bb6c.jpeg"
              }
            ],
            "productPhoto": "1117652637098037250,1118384072410918914,",
            "productShelfLife": 12,
            "supplierId": 10,
            "productId": 111,
            "modelId": 1,
            "productCreateTime": "1555498610515",
            "count": 0,
            "productNumber": "10101086",
            "productSafetyStock": "0",
            "productName": "老干妈",
            "productTaxIncludedUnitPrice": 50,
            "taxRateId": 5,
            "kindId": 5
          }]
        },
        {
          "kindPid": 5,
          "kindName": "古井",
          "kindId": 6,
          "products": [{
              "productTaxFreeUnitPrice": 120.00,
              "specificationId": 2,
              "images": [{
                "imageCreateTime": "2019-04-15 12:54:20",
                "imageId": "1117652350601908225",
                "imageUrl": "e3f766f0-7cad-4e2f-bd70-e2dc296e84f8.jpg"
              }],
              "productPhoto": "1117652350601908225,",
              "productShelfLife": 30,
              "supplierId": 10,
              "productId": 110,
              "modelId": 1,
              "productCreateTime": "1555498591248",
              "count": 0,
              "productNumber": "10101019",
              "productSafetyStock": "0",
              "productName": "康师傅",
              "productTaxIncludedUnitPrice": 100,
              "taxRateId": 5,
              "kindId": 6
            },
            {
              "productTaxFreeUnitPrice": 55.00,
              "specificationId": 2,
              "images": [],
              "productPhoto": "",
              "productShelfLife": 12,
              "supplierId": 10,
              "productId": 112,
              "modelId": 1,
              "productCreateTime": "1555498600854",
              "count": 0,
              "productNumber": "10101042",
              "productSafetyStock": "0",
              "productName": "娃哈哈",
              "productTaxIncludedUnitPrice": 23,
              "taxRateId": 5,
              "kindId": 6
            },
            {
              "productTaxFreeUnitPrice": 10000.00,
              "specificationId": 2,
              "images": [{
                  "imageCreateTime": "2019-04-15 15:16:30",
                  "imageId": "1117688130681556994",
                  "imageUrl": "c3a506fc-6253-422c-8f27-fe5fcc1cc5df.jpg"
                },
                {
                  "imageCreateTime": "2019-04-15 15:21:37",
                  "imageId": "1117689417250754562",
                  "imageUrl": "435f1a7a-6728-4e67-8a73-84eb33c2891a.jpg"
                },
                {
                  "imageCreateTime": "2019-04-15 15:21:37",
                  "imageId": "1117689417259143170",
                  "imageUrl": "10a5161b-78a3-4dc0-9d13-13eb62c3f86e.jpg"
                }
              ],
              "productPhoto": "1117688130681556994,1117689417250754562,1117689417259143170,",
              "productShelfLife": 2019,
              "supplierId": 10,
              "productId": 113,
              "modelId": 1,
              "productCreateTime": "1555495320796",
              "count": 0,
              "productNumber": "000000001",
              "productSafetyStock": "11111",
              "productName": "测试000001",
              "productTaxIncludedUnitPrice": 10000,
              "taxRateId": 6,
              "kindId": 6
            }
          ]
        },
        {
          "kindPid": 6,
          "kindName": "年份系列",
          "kindId": 7,
          "products": []
        },
        {
          "kindPid": 6,
          "kindName": "55",
          "kindId": 8,
          "products": []
        },
        {
          "kindPid": 5,
          "kindName": "cs ",
          "kindId": 9,
          "products": []
        }
      ]
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     wx.hideLoading()
     var that = this;
      wx.getStorage({
        key: 'Authorization',
        success: function (res) {
          var head = {
            Authorization: res.data,
          }
          wx.request({
            url: app.url_list.product_group,
       method: "GET",
       header: head,
       success: function (res) {
         if (res.data.code === 200) {
           that.setData({
             products: res.data.data
           })
         } else {
           wx.navigateTo({
             url: '.././index/index',
           })
         }
       }
     })
   },
 })},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})