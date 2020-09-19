<template>
    <div id="good">
        <goods-item v-for="item in goods" :item="item"></goods-item>
    </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  props: {
    goods: {
      type:Array,
      defautl(){
        return []
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style>

</style>