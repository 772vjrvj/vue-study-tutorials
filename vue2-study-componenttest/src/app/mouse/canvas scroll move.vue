<template>
  <div>
    <div class="container">
      <div>test title</div>
      <div class="wrap"
           @mousedown="onmousedown"
           @mouseup="onmouseup"
           @mousemove="onmousemove"
      >
        <canvas id="canvas" width="400px" height="400px">

        </canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  methods: {

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
