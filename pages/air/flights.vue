<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data="cacheFlightsData" @setDataList="setDataList" />

        <!-- 航班头部布局 -->
        <div></div>

        <!-- 航班信息 -->
        <div>
          <!-- 航班列表 -->
          <flightsItem v-for="(item, index) in dataList" :key="index" :data="item" />
          <!-- 分页 -->
          <el-row type="flex" justify="center" style="margin-top:10px;">
            <!-- size-change：切换条数时候触发 -->
            <!-- current-change：选择页数时候触发 -->
            <!-- current-page: 当前页数 -->
            <!-- page-size：当前条数 -->
            <!-- total：总条数 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageIndex"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="flightsData.total"
            ></el-pagination>
          </el-row>
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
        <FlightsAside/>
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHead from "@/components/flightsListHead.vue";
import FlightsItem from "@/components/flightsItem.vue";
import FlightsFilters from "@/components/flightsFilters.vue";
import FlightsAside from "@/components/flightsAside.vue"
import moment from "moment";

export default {
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },
  watch: {
    $route(){
      this.getDate()
    }
  },
  data() {
    return {
      flightsData: {},
      dataList: [],
      pageIndex: 1,
      pageSize: 5,
      cacheFlightsData: {
        // 航班总数据
        flights: [],
        info: {},
        options: {}
      }
    };
  },
  methods: {
    getDate() {
      this.$axios({
        url: "airs",
        params: this.$route.query
      }).then(res => {
        console.log(res);
        this.flightsData = res.data;
        // this.dataList = this.flightsData.flights;
        this.cacheFlightsData = { ...res.data };
        this.setDataList();
      });
    },
    setDataList(arr) {
      console.log(arr);
      
      if (arr) {
        this.pageIndex = 1;
        this.flightsData.flights = arr;
        this.flightsData.total = arr.length;
      }

      const start = (this.pageIndex - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.dataList = this.flightsData.flights.slice(start, end);
    },
    handleSizeChange(value) {
      this.pageSize = value;
      this.pageIndex = 1;
      this.setDataList();
    },
    handleCurrentChange(value) {
      this.pageIndex = value;
      this.setDataList();
    }
  },
  mounted() {
    this.getDate();
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>