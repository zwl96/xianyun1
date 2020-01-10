<template>
  <div class="write">
    <div class="title main">
      <h1>发表新攻略</h1>
      <p>分享你的个人游记，让更多人看到哦！</p>
      <el-input v-model="input1" placeholder="请输入标题"></el-input>
    </div>
    <div class="aside">sssssssssssss</div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            input1:''
        }
    }
};
</script>

<style lang='less' scoped>
.write {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}

.title {
  h1 {
    font-size: 20px;
    color: black;
    padding-bottom: 10px;
  }
  > p {
    font-size: 10px;
    color: #ccc;
    padding-bottom: 10px;
  }
}

.main {
  width: 750px;
}
.aside {
  width: 250px;
}
</style>