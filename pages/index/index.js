// index.js

Page({
  data: {
    isDraw:false,
    inputValue:'',
    imageUrl:'/assert/images/icon.jpg',
    sliderTitle:[
      '二维码尺寸',
      '图片大小',
      '边距'
    ],
    sliderValue:[
      {
        id:"0",
        value:300,
        minValue:200,
        maxValue:400
      },
      {
        id:"1",
        value:100,
        minValue:50,
        maxValue:150
      },
      {
        id:"2",
        value:20,
        minValue:10,
        maxValue:30
      }
    ]
  },
  /**
   * 本用于绘制二维码，但似乎用不上了，准备改成保存到本地
   * TODO:待添加
   */
  drawQRCode(){
    
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
  },

  /**
   * 拖拽条数值改变
   */
  silderChange(e){
    const value = e.detail;
    let {index}=e.currentTarget.dataset

     //构造更新路径
     let updatePath = `sliderValue[${index}].value`;

     //更新数据实现滑动数据变化
     this.setData({
       [updatePath]:value
     });
  },

  /**
   * 输入框内容改变
   */
  textChange(e){
    const value=e.detail
    this.setData({
      inputValue:value
    })
  },
  /**
   * 获取上传的图片
   */
  getImage(e){
    const {tempFilePath}=e.detail.file;
    this.setData({
      imageUrl:tempFilePath
    })
  }


})
