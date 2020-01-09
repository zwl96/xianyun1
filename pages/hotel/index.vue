<template>
  <div class="hotel">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" style="padding:20px 0">
      <el-breadcrumb-item>南京</el-breadcrumb-item>
      <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 过滤导航栏 -->
    <div class="dao">
      <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>

      <!-- 时间 -->
      <el-date-picker
        class="time"
        v-model="value1"
        type="daterange"
        range-separator="-"
        start-placeholder="入住日期"
        end-placeholder="离店日期"
      ></el-date-picker>

      <!-- 人数选择 -->
      <el-autocomplete
        popper-class="my-autocomplete"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="人数未定"
        @select="handleSelect"
      >
        <i class="el-icon-user el-input__icon" slot="suffix" @click="handleIconClick"></i>
        <template slot-scope="{ item }">
          <div class="name">{{ item.value }}</div>
        </template>
      </el-autocomplete>

      <!-- 按钮 -->
      <el-row class="button">
        <el-button type="primary">查看价格</el-button>
      </el-row>
    </div>
    <!-- 地区 -->
    <div class="addless">
      <div>
        <div>
          区域：
        </div>
        <div :class="{add:true,active:add}">
          <a href>啊啊</a>
          <a href>啊啊</a>
          <a href>啊啊</a>
          <a href>啊啊</a>
          <a href>啊啊</a>
          <a href>没人能预知未来，所以只能认真地把握生活中的每个瞬间</a>
        </div>
        <div>
          <div @click="add=!add" :class="{active:add}">点击</div>
        </div>
      </div>
      <div class="map">aaaaaaaaaaaaaaaaaaaaa</div>
    </div>
    <!-- <IndexAdd/> -->
  </div>
</template>

<script>
// import IndexAdd from '@/components/indexAdd.vue'
export default {
  // components: {
  //   IndexAdd
  // },
  data() {
    return {
      state1: "南京",
      value1: "",
      input1: "",
      restaurants: [],
      state: "",
      add: false
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [{ value: "没人" }];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
.hotel {
  width: 1000px;
  margin: 20px auto;
}
.dao {
  display: flex;
  margin-bottom: 20px;
  .inline-input {
    margin-right: 10px;
  }
  .time {
    margin-right: 10px;
  }
  .user {
    width: 200px;
  }
  .button {
    display: block;
    margin-left: 10px;
  }
}

.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
.addless {
  .add {
    display: inline-block;
    width: 60%;
    height: 50px;
    overflow: hidden;
  }
  .map {
    display: inline-block;
    width: 39%;
  }
}

.add.active {
    display: inline-block;
    width: 60%;
    height: auto;
  }
</style>