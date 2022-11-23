<template>
  <div class="app-wrapper">
    <div class="aside-wrapper">
      <div class="aside-header">logo</div>
      <div class="aside-container">
        <el-menu
          :default-openeds="['3']"
          default-active="3-1"
          active-text-color="#fff"
        >
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>室外罐装区</template
            >
            <!-- <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-menu"></i>油加热区</template
            >
            <!-- <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>一号生产区</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">一号炒锅（在线）</el-menu-item>
              <el-menu-item index="3-2" disabled>二号炒锅（离线）</el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .aside-wrapper {
    width: 250px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-right: 2px solid rgba($color: rgb(190, 184, 184), $alpha: 0.1);
    z-index: 1;
    // background: rgba($color: #000, $alpha: 0.1);
    .aside-header {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      // background: black;
      // color: white;
    }
    .aside-container {
      width: 100%;
      height: calc(100% - 50px);
      /deep/.el-menu {
        // border: none;
        background: transparent;
        .el-menu-item-group {
          .el-menu-item-group__title {
            // color: rgba($color: #fff, $alpha: 0.7);
          }
          .el-menu-item {
            color: black !important;
            // color: rgba($color: #fff, $alpha: 0.5);
          }
          .el-menu-item:hover {
            // background: transparent;
          }
          .el-menu-item:focus,
          .el-menu-item:hover {
            // background: transparent;
          }
        }
        .el-submenu {
          .el-submenu__title {
            // color: rgba($color: #fff, $alpha: 0.8);
          }
          .el-submenu__title:hover {
            // background: transparent;
          }
        }
      }
      // background: rgb(48, 65, 86);
    }
  }
}
</style>