<template>
  <div class="post">
    <!-- 城市菜单列表 -->
    <div class="citylist" v-if="city">
      <div v-for="(item,index) in city" :key="index" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" :class="{cityactive:cll}">
        <span>{{item.type}}</span>
        <i class="el-icon-arrow-right right"></i>
      </div>
    </div>
    <div :class="{cll:true,active:cll}" v-if="city">
      <ul>
        <li v-for="(item,index) in city" :key="index">{{item.children[index].city}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cll: false,
      city: []
    };
  },
  mounted() {
    this.$axios({
      url:'/posts/cities'
    }).then(res => {
      console.log(res);
      this.city = res.data.data
    })
  },
  methods: {
    handleMouseenter() {
      this.cll = true;
    },
    handleMouseleave() {
      this.cll = false;
    }
  }
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
.post {
  width: 1000px;
  margin: 20px auto;
}
.citylist {
  display: inline-block;
  border: 1px solid #ddd;
  border-bottom: none;
  border-radius: none;
  z-index: 2;
  width: 260px;
  box-sizing: border-box;
  :hover {
    color: orange;
    .right {
      color: orange;
    }
  }
  > div {
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    line-height: 40px;
    color: black;
    width: 260px;
    box-sizing: border-box;
    padding: 0 20px;
    .right {
      float: right;
      line-height: 40px;
      font-size: 20px;
      color: #aaa;
    }
  }
}

.cll {
  position: absolute;
  top: 80px;
  left: 408px;
  color: blue;
  opacity: 0;
  border: 1px solid #cccccc;
  background-color: white;
}
.cll.active {
  font-size: 14px;
  line-height: 40px;
  color: #ccc;
  opacity: 1;
}
.cll.cityactive {
  border-right: none !important;
}
</style>