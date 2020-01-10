<template>
  <div class="post">
    <!-- 左边 -->
    <div class="left">
      <!-- 城市菜单列表 -->
      <div class="citylist" v-if="city">
        <div
          v-for="(item,index) in city"
          :key="index"
          @mouseenter="handleMouseenter"
          @mouseleave="handleMouseleave"
          :class="{cityactive:cll}"
        >
          <span>{{item.type}}</span>
          <i class="el-icon-arrow-right right1"></i>
          <div :class="{cll:true,active:cll}">
        <ul>
          <li>{{item.children.length}}{{item.children[index].city}}</li>
        </ul>
      </div>
        </div>
      </div>
      
      <!-- 推荐城市 -->
      <div class="re-city">
        <p class="re-city-header">推荐城市</p>
        <hr />
        <img src="../../assets/推荐城市.jpeg" alt />
      </div>
    </div>
    <!-- 右边 -->
    <div class="right">
      <el-input class="search" suffix-icon='el-icon-search' placeholder="请输入想去的地方，比如：‘广州’"></el-input>
      <div class="search-c">
        <span>推荐：<a href="#">广州</a><a href="#">上海</a><a href="#">北京</a></span>
      </div>
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
      url: "/posts/cities"
    }).then(res => {
      console.log(res);
      this.city = res.data.data;
    });
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
body {
  color: none;
  font-size: none;
}
.post {
  width: 1000px;
  margin: 20px auto;
}
.left {
  display: inline-block;
}
.right {
  position: absolute;
  top: 80px;
  left: 443px;
  width: 700px;
  box-sizing: border-box;
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
    .right1 {
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
    .right1 {
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
  z-index: 2;
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
.re-city {
  width: 260px;
  padding-top: 20px;
  hr {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
  }
}
.re-city-header {
  display: block;
  font-size: 16px;
  line-height: 10px;
  color: black !important;
  font-weight: 400;
}

.search{
  border: 3px solid orange;
  
}
.search-c{
  margin-top: 10px;
  font-size: 12px;
  color: #666;
  a{
    margin-right: 10px;
    color: #666;
  }
}
.search-c a:hover{
  color: orange;
}
</style>