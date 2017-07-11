
//获取应用实例
var app = getApp()
Page({
  	data: {
	    postData:[]
  	},
  	onLoad: function () {
        //更新数据
        this.setData({
          postData:app.globalData.postData
        })
  	}
})
