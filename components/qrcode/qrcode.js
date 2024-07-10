import drawQrcode from '../../lib/qrcode/weapp.qrcode'

Component({
  behaviors: [],
  width: 0,
  height: 0,
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    isDraw: {
      type: Boolean,
      value: true,
      observer: function(newVal, oldVal) {
        if (newVal) {
          this.setData({
          })
          drawQrcode({
            width: 80,
            height: 80,
            canvasId: 'qrcodePro',
            text: 'test drawQrcode in component',
            _this: this
          })
        }
      }
    }
  },
  data: {
  },

  attached: function () {
  },
  ready: function () {
    // drawQrcode({
    //   width: 80,
    //   height: 80,
    //   canvasId: 'qrcodePro',
    //   text: 'test drawQrcode in component',
    //   _this: this
    // })
  },
  moved: function () {},
  detached: function () {},

  methods: {
  }
})
