<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="scrolls" :pullUpLoad="true">
      <home-swiper :banner="banner" />
      <home-recommend-view :recommend="recommend" />
      <feature></feature>
      <tab-bar-control
        :titles="['精选','推荐','定制']"
        class="tab-control"
        @tabControlClick="tabControlClick"
      ></tab-bar-control>
      <goods-list :goods="goods[type].list"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="display"></back-top>
  </div>
</template>

<script>
import TabBarControl from "components/content/tabbarcontrol/TabbarControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/common/backtop/BackTop.vue";

import HomeSwiper from "./childrencomponents/HomeSwiper.vue";
import HomeRecommendView from "./childrencomponents/HomeRecommendView.vue";
import Feature from "./childrencomponents/Feature";

import { getHomeMutiData } from "network/home.js";
import { getHomeData } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    Feature,
    TabBarControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      type: "pop",
      display: false,
    };
  },
  // 组件创建完成后发送请求轮播图数据请求
  created() {
    // 请求多个数据
    this.getHomeMutiData();
    //获取商品数据
    this.getHomeData("pop");
    this.getHomeData("news");
    this.getHomeData("sell");
  },
  methods: {
    scrolls(position) {
      const pos = -position.y;
      this.display = pos > 100;
    },
    getHomeMutiData() {
      getHomeMutiData().then((res) => {
        // 保存数据到本地
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        this.$refs.scroll.scroll.refresh();
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData({ type, page }).then((res) => {
        this.goods[type].list.push(
          ...[
            {
              imgSrc:
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
              price: "￥12.5",
              title: "草莓",
            },
          ]
        );
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.finishLoad();
        this.$refs.scroll.scroll.refresh();
      });
    },
    tabControlClick(index) {
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "news";
          break;
        case 2:
          this.type = "sell";
      }
    },
    backTopClick() {
      this.$refs.scroll.backToTop(0, 0, 500);
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.back-top {
  position: absolute;
  margin-top: 11%;
  margin-left: 86%;
}
.home-nav {
  background-color: rgb(252, 58, 149);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  background-color: white;
  top: 44px;
  z-index: 9;
}
.wrapper {
  height: 400px;
}
</style>