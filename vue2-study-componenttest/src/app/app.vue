<template>
  <div>
    <div class="container">
      <div>test title</div>
      <div class="wrap"
           @mousedown="onmousedown"
           @mouseup="onmouseup"
           @mousemove="onmousemove"
           @wheel="onWheel"
      >
        <canvas id="canvas" ref="canvas"  :style="{left: canvasLeft + 'px', top: canvastop + 'px', width: canvas.width + 'px', height: canvas.height + 'px'}">

        </canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drag: false,
      posX: 0,
      posY: 0,
      canvasLeft: 0,
      canvastop: 0,
      scale: 1,
      canvas: {
        width: 300,
        height: 300
      }
    }
  },
  methods: {
    onmousedown(e){
      this.drag = true;
      if(e && e.target.id === 'canvas'){
        this.posX = this.canvasLeft + e.offsetX;
        this.posY = this.canvastop + e.offsetY;
      }else{
        this.posX = e.offsetX;
        this.posY = e.offsetY;
      }
    },
    onmousemove(e){
      // let moveX = 0;
      // let moveY = 0;
      // if(e && e.target.id === 'canvas'){
      //   moveX = this.canvasLeft + e.offsetX;
      //   moveY = this.canvastop + e.offsetY;
      // }else{
      //   moveX = e.offsetX;
      //   moveY = e.offsetY;
      // }
      // console.log(moveX);
      // console.log(moveY);
      if(this.drag){

        let moveX = 0;
        let moveY = 0;
        if(e && e.target.id === 'canvas'){
          moveX = this.canvasLeft + e.offsetX;
          moveY = this.canvastop + e.offsetY;
        }else{
          moveX = e.offsetX;
          moveY = e.offsetY;
        }

        const diffX = moveX - this.posX;
        const diffY = moveY - this.posY;



        this.canvasLeft = this.canvasLeft + diffX;
        this.canvastop = this.canvastop + diffY;
        this.posX = this.posX + diffX;
        this.posY = this.posY + diffY;
        // console.log(this.posX);
        // console.log(this.posY);

      }
    },
    onmouseup(){
      this.drag = false;
    },
    onWheel(e){
      let moveX = 0;
      let moveY = 0;
      if(e && e.target.id === 'canvas'){
        moveX = this.canvasLeft + e.offsetX;
        moveY = this.canvastop + e.offsetY;
      }else{
        moveX = e.offsetX;
        moveY = e.offsetY;
      }
      console.log('onWheelX :', moveX);
      console.log('onWheelY :', moveY);
      console.log('e.deltaY :', e.deltaY);

      if(e.deltaY < 0){
        this.scale = 1 + 0.08;
      }else{
        this.scale = 1 - 0.08;
      }
      console.log('this.scale :', this.scale);

      this.canvas.width = this.canvas.width * (this.scale);
      this.canvas.height = this.canvas.height * (this.scale);

      this.canvasLeft = this.scale*(this.canvasLeft - moveX) + moveX;
      this.canvastop = this.scale*(this.canvastop - moveY) + moveY;


      // this.canvasLeft
      // this.canvastop

    }
  }
}
</script>
<style>
  .container{
    background-color: pink;
    width: 1000px;
    margin: 0 auto;
    padding: 10px;
  }

  .wrap{
    width: 900px;
    height: 600px;
    position: relative;
    left: 20px;
    background-color: skyblue;
  }

  #canvas{
    background-color: greenyellow;
    position: absolute;
  }
</style>
