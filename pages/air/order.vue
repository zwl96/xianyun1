<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 订单表单 -->
      <OrderForm :data="infoData" @setAllPrice='setAllPrice'/>

      <!-- 侧边栏 -->
      <OrderAside :data='infoData' :allPrice='allPrice'/>
    </el-row>
  </div>
</template>

<script>
import OrderForm from "@/components/orderForm.vue";
import OrderAside from "@/components/orderAside.vue";
export default {
  components: {
    OrderForm,
    OrderAside
  },
  data() {
    return {
      //机票信息
      infoData: {
        //初始化保险数据
        insurances: [],
        seat_infos: {}
      },
      allPrice: 0
    };
  },
  methods: {
    //setAllPrice
    setAllPrice(price){
      this.allPrice = price
    }
  },
  mounted() {
    console.log(this.$route);
    
    const { query } = this.$route;

    this.$axios({
      url: `airs/${query.id}`,
      params: {
        seat_xid: query.seat_xid
      }
    }).then(res => {
      this.infoData = res.data;
    });
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}

/*aside*/
.aside {
  width: 350px;
  height: fit-content;
  border: 1px #ddd solid;
}
</style>