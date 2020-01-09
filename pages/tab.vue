<template>
  <div>
      <div>
          <span v-for="(item,index) in ['体育','新闻','旅游']" :key="index"
          @click="handleClick(index)" :class="{ aaa: current === index }">{{item}}</span>
      </div>
      <div v-if="current === 0">
          <ul>
              <li>体育</li>
          </ul>
      </div>
      <div v-if="current === 1">
          <ul>
              <li>新闻</li>
          </ul>
      </div>
      <div v-if="current === 2">
          <ul>
              <li>旅游</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            current: 0
        }
    },
    methods: {
        handleClick(index){
            this.current = index
        }
    }
}
</script>

<style lang='less' scoped>
.aaa {
    color: red
}
</style>