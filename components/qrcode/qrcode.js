import drawQrcode from '../../lib/qrcode/weapp.qrcode'

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    isDraw: {
      type: Boolean,
      value: true,
      /**
       * 监视器
       * @param {*} newVal 
       * @param {*} oldVal 
       */
      observer: function(newVal, oldVal) {
          this.toDarw();
        }
      },
    inputValue:{
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setData({
          inputValue:newVal
        })
        this.derateDarw(1000);
      }
    },
    sliderValue:{
      type: Array,
      value: [],
      observer: function(newVal, oldVal) {

        this.setData({
          qrSize:newVal[0].value,
          qrPadding:newVal[2].value,
          imgSize:newVal[1].value
        })
        this.derateDarw();
      
      }
    },
    imageUrl:{
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setData({
          imageUrl:newVal
        })
        this.derateDarw();
      }
    }
  },
  data: {
    inputValue:'',
    qrSize:300,
    qrPadding:20,
    imgSize:80,
    // rpx/px比例
    pxRatio:2.00,
    timer:null,
    imageUrl:'/assert/images/icon.jpg'
  },

lifetimes:{
  created(){
    this.setData({
      pxRatio:wx.getSystemInfoSync().windowWidth/750
    })
  }
},
methods: {
  toDarw(){
    const pxRatio = this.data.pxRatio
    let qrSize=this.data.qrSize*pxRatio
    let qrPadding=this.data.qrPadding*pxRatio
    let imgSize=this.data.imgSize*pxRatio
    let inputValue=this.data.inputValue
    let imageUrl=this.data.imageUrl
    drawQrcode({
      width: qrSize,
      height: qrSize,
      x: qrPadding,
      y: qrPadding,
      canvasId: 'qrcodePro',
      typeNumber: 10,
      text: inputValue,
      image: {
        imageResource: imageUrl,
        // 左上角开始的x，y距离
        dx: (qrSize+qrPadding*2 - imgSize)/2,
        dy: (qrSize+qrPadding*2 - imgSize)/2,
        dWidth: imgSize,
        dHeight: imgSize
      },
      callback(e) {
        console.log('🟢',e.errMsg)
      },
      _this:this
    })
  },

  /**
   * 画图减频
   */ 
  derateDarw(grapTime=100){
     //定时器如果在0.5s内没有再次调用这个函数才执行
     clearTimeout(this.timer);
     this.timer = setTimeout(() => {
       this.toDarw();
     }, grapTime);
  }
},
})
