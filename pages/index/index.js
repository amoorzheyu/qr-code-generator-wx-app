// index.js

Page({
  data: {
    isDraw:false,
    inputValue:'',
    currentValue: 50,
    sliderTitle:[
      '二维码尺寸',
      '图片大小',
      '边距'
    ],
    sliderValue:[
      {
        id:0,
        value:150,
        minValue:100,
        maxValue:200
      },
      {
        id:1,
        value:30,
        minValue:10,
        maxValue:50
      },
      {
        id:2,
        value:20,
        minValue:10,
        maxValue:30
      }
    ]
  },
  drawQRCode(){
    this.setData({
      isDraw:true
    })
  },
  
  onDrag(event) {
    //获取当前拖拽条的index
    let {index}=event.currentTarget.dataset

    //构造更新路径
    let updatePath = `sliderValue[${index}].value`;

    //更新数据实现滑动数据变化
    this.setData({
      [updatePath]:event.detail.value
    });
  }

})
