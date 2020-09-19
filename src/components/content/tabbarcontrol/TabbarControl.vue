<template>
    <div id="tab-control" class="tab-control" >
        <div v-for="(item,index) in titles" 
        class="tab-control-item" 
        :class="{'tab-bar-active':index===current_index}" >
          <span @click="itemClick(index)">{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabBarControl',
  props: {
    titles: {
      type: Array,
      defaut(){
        return [];
      }
    }
  },
  data(){
    return {
      current_index : 0
    }
  },
  methods: {
    itemClick(index){
      this.current_index=index;
      this.$emit('tabControlClick',index);
    }
  }
  
}
methods: {

}
</script>

<style>
.tab-control{
  display: flex;
  align-content: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item span{
  padding: 5px;
}
.tab-bar-active {
  color: pink;
}
.tab-bar-active span{
  border-bottom: 5px solid pink;
}
</style>