
//获取应用实例
var app = getApp()
Page({
  data: {
    numbers:[],
    number:'',
    password:''
  },
  //事件处理函数
  formSubmit: function(e) {
    var that = this
    wx.request({
      url: 'http://style-lee.com/collectiveWeiXin/ofo-bicycle/add', 
      data: {
         number: e.detail.value.number ,
         password: e.detail.value.password
      },
      method:"POST",
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        //更新数据
        that.setData({
          numbers:res.data.numbers
        })
      }
    })
  },
  onLoad: function () {
    var that = this
    //更新数据
    wx.request({
      url: 'http://style-lee.com/collectiveWeiXin/ofo-bicycle/add', 
      data: {
         number: '' ,
         password: ''
      },
      method:"POST",
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        //更新数据
        that.setData({
          numbers:res.data.numbers
        })
      }
    })
  }
})
