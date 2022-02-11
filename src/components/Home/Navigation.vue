<!-- 
    我是导航栏
-->
<template>
  <div class="nav">
    <div class="navContent">
      <!-- logo -->
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="" />
      </div>
      <!--发现音乐等 -->
      <div class="Navigation">
        <ul>
          <li
            class="item"
            :key="item.path"
            v-for="item in musicList"
            :style="{
              backgroundColor: hidden == item.meta.title ? 'black' : '',
            }"
          >
            <span>
              <router-link
                :title="item.meta.title"
                :to="item.path"
                :style="{ color: hidden == item.meta.title ? 'white' : '' }"
              >
                {{ item.meta.title }}
              </router-link>
            </span>
          </li>
        </ul>
        <i class="icon-hot"></i>
      </div>
      <!-- 搜索框 -->
      <div class="searchBox" ref="searchBox">
        <el-icon><search /></el-icon>
        <input type="text" placeholder="音乐/视频/电台/用户" />
      </div>
      <div class="login">
        <span>登录</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { markRaw, onMounted, reactive, toRefs, watchEffect } from "vue";
import routes from "@/router/index.js";
import { useRoute } from "vue-router";
import { Search } from "@element-plus/icons-vue";
const state = reactive({
  // 发现音乐等
  musicList: [],
  // 背景色切换
  hidden: "发现音乐",
});
const route = useRoute();

// 监听路由
watchEffect(() => {
  const routes = route.meta.title;
  state.hidden = routes;
});
onMounted(() => {
  state.musicList = markRaw(routes.options.routes);
});

let { musicList, hidden } = toRefs(state);
</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  height: 70px;
  background-color: #242424;
  .navContent {
    width: 1100px;
    height: 70px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // 登录
    .login {
      font-size: 12px;
      color: #787878;
      line-height: 70px;
      cursor: pointer;
      float: right;
      &:hover {
        color: #ccc;
        text-decoration: underline;
      }
    }
    // logo图标
    .logo {
      cursor: pointer;
    }
    // 发现音乐等
    .Navigation {
      position: relative;
      ul {
        overflow: hidden;
        .bg {
          background-color: black;
          a {
            color: white;
          }
        }
        li {
          float: left;
          &:hover {
            background-color: black;
            color: white;
            cursor: pointer;
            a {
              color: white;
            }
          }
          a {
            padding: 0 19px;
            display: flex;
            height: 70px;
            font-size: 14px;
            color: #ccc;
            line-height: 70px;
          }
        }
      }
      .icon-hot {
        width: 26px;
        height: 13px;
        background-image: url("../../assets/img/hot.png");
        position: absolute;
        top: 20px;
        right: -20px;
      }
    }
    // 搜索框
    .searchBox {
      width: 158px;
      height: 32px;
      background-color: white;
      border-radius: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      > i {
        margin-left: 10px;
      }
      input {
        width: 120px;
        border: none;
        margin-right: 10px;
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
