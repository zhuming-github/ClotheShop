<template>
  <div id="good-item" class="good-item" @load="imgLoad">
    <img :src="item.imgSrc" alt="good-item">
    <div class="good-info">
      <div >{{item.title}}</div>
      <span>{{item.price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item : {
      imgSrc: '',
      title: '',
      price: ''
    }
  },
  methods: {
    imgLoad(){
      console.log(123);
      this.$root.scroll.scroll.refresh();
    }
  }
}
</script>

<style>
.good-item {
  padding-bottom: 40px;
  position: relative;
  padding: 10px;
  border: 1px solid  rgb(175, 175, 182);
}
.good-item img {
  width: 50%;
  border-radius: 5px;
}
.good-info {
  font-size: 12px;
  position: left;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.good-info span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
</style>