// pages/admin/admin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* */
    //临时微信用户昵称和头像
    nickName: '未登录',
    src: '/images/index.png',
  },

  /** 获取新闻用户信息 */
  getMyInfo:function(e){
    let info=e.detail.userInfo;
    this.setData({
      isLogin:true,//确认登录状态
      src:info.avatarUrl,//更新图片路径
      nickName:info.nickName//更新昵称
    })
    //获取收藏列表
    this.getMyFavorites();
  },

  /** 获取新闻用户信息 */
  getMyFavorites: function (e) {
    let info = wx.getStorageInfoSync();//读取本地缓存信息
    let keys=info.keys;//获取全部key信息
    let num=keys.length;//获取收藏数量
    let myList=[];
    for(var i=0;i<num;i++){
      let obj=wx.getStorageSync(keys[i]);
      myList.push(obj);//将新闻添加到数组中
     // console.log(obj);
    }
    //根性收藏列表
    this.setData({
      newsList:myList,
      num:num
    })

  },
  /* 自定义函数 */
  goToDetail: function (e) {
    //获取id
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getMyFavorites();
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