var common = require('../utils/common.js')//引用公共js文件
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {
      id: '305789',
      title: '我校举行2020届毕业生就业工作推进会',
      poster: 'https://www.jxust.edu.cn/__local/4/7D/7D/3F8076C10C8B9D0D949790239D2_DC5BCD10_D7BE.jpg',
      content: '本网讯  3月20日，我校在行政楼第二会议室召开2020年就业工作推进会，党委书记罗嗣海参加会议并讲话，各学院（学部）院长、党委副书记、研究生院和招生就业处等相关人员参加了本次会议，南昌校区相关人员同步参加视频会议，会议由党委常委、副校长李国金主持。会上，招生就业处处长余育新汇报了前期本科就业工作开展情况和现存困难，并从建立健全全员参与的就业工作体系和激励机制、举办分学院分专业的网络视频招聘会、实行校院两级就业核查自查机制等措施进一步做好毕业生就业工作；研究生院院长董冰岩对研究生就业数据分析及措施进行汇报；信息工程学院院长廖列法和商学院副书记陈小云分别做就业工作交流。',
      add_date: '2020-03-21'
    }
  },

  /* 取消收藏 */
  cancleFavorites:function(){
    let article=this.data.article;//获取当前新闻
    wx.removeStorageSync(article.id)//从本地缓存删除
    this.setData({isAdd:false})//更新按钮显示
  },
  /** 点击收藏 */
  addFavorites:function(){
    let article=this.data.article//获取当前新闻
    wx.setStorageSync(article.id, article)//添加缓存内容
    this.setData({isAdd:true})//更新按钮显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id;//获取页面跳转过来的携带数据
    /* 获取新闻列表 */
    let result = common.getNewsDetail(id)
    // 获取新闻内容
    if(result.code=='200'){
      this.setData({article:result.news})
    }
    //检查新闻是否在收藏夹中
    var article=wx.getStorageSync(id)
    //已存在
    if(article!=''){
      this.setData({isAdd:true})
    }else{
      //不存在
      this.setData({isAdd:false})
    }
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