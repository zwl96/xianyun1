<template>
  <div class="post">
    <!-- 城市菜单列表 -->
    <div class="citylist">
      <div >
        <span>热门城市</span>
        <i class="el-icon-arrow-right right"></i>
      </div>
      <div>
        <span>推荐城市</span>
        <i class="el-icon-arrow-right right"></i>
      </div>
      <div>
        <span>奔向海岛</span>
        <i class="el-icon-arrow-right right"></i>
      </div>
      <div>
        <span>主题推荐</span>
        <i class="el-icon-arrow-right right"></i>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Clist: false
    }
  }
};
</script>

<style lang='less'>
.post {
  width: 1000px;
  margin: 20px auto;
}
.citylist {
  border: 1px solid #ddd;
  border-bottom: none;
  border-radius: none;
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

.Clist{
  color: orange;
}
</style>