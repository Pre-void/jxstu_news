var common=require('../utils/common.js')//引用公共js文件
// pages/index/index.js
Page({

//计算机172刘子华 2120171450
  /**
   * 页面的初始数据
   */
  data: {
    //幻灯片素材
    swiperImg: [
      { src: 'https://www.jxust.edu.cn/__local/3/CF/8A/A070C643D169503C5628C10FA98_8FD546A5_FF0B.jpg' },
      { src: 'https://www.jxust.edu.cn/__local/C/AA/D2/A05AE60EAB966235E76C430E10B_527771E1_BD039.jpg' },
      { src: 'https://www.jxust.edu.cn/__local/4/7D/7D/3F8076C10C8B9D0D949790239D2_DC5BCD10_D7BE.jpg' },
      { src: 'https://www.jxust.edu.cn/__local/5/FC/78/BCC58A004F4B762822EAB7AAD2F_E682405B_51366.jpg' }
    ],

    /**/
    //临时新闻数据
    

  },

  /* 自定义函数 */
  goToDetail:function(e){
    //获取id
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* 获取新闻列表 */
    let list=common.getNewsList()
    // 更新数据列表
    this.setData({newsList:list})
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

  }
})