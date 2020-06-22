var app = getApp();
Component({
  data: {
    selected: 0,
    color: "#9D9D9D",
    selectedColor: "#00AC6E",
    isIPX: false,
    list: [
      {
        selectedIconPath: "/imgs/tabIcon/index_green.png",
        iconPath: "/imgs/tabIcon/index_gray.png",
        pagePath: "/pages/index/tab1",
        text: "tab1"
      },
      {
        selectedIconPath: "/imgs/tabIcon/discount_green.png",
        iconPath: "/imgs/tabIcon/discount_gray.png",
        pagePath: "/pages/index/tab2",
        text: "tab2"
      },
      {
        selectedIconPath: "/imgs/tabIcon/my_green.png",
        iconPath: "/imgs/tabIcon/my_gray.png",
        pagePath: "/pages/index/index",
        text: "index"
      }
    ]
  },
  attached() {
    // console.log("插件")
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      // console.log("data:" + JSON.stringify(data))
      console.log("url:" + url)
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
      console.log(this.data.selected)
    }
  }
})