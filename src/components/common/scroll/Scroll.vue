<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    //不建议是哦那个document方式获取元素不是很好
    //因为其他地方可能有相同的class值得元素
    //ref如果绑定在组件上this.refs.ref值就是一个组件对象
    //ref绑定在元素上，...就是元素对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      useTransition:false,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    //监听上拉加载更多
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
  methods: {
    backToTop(x, y) {
      this.scroll.scrollTo(x, y, 1000);
    },
  },
};
</script>
<style>
.wrapper {
  height: calc(100%-1px);
}
</style>