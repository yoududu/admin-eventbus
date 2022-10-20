<template>
    <el-menu 
        default-active="1-4-1" 
        class="el-menu-vertical-demo submenu-title-noDropdown" 
        :collapse="isCollapse" 
        background-color="rgb(48,65,86)" text-color="rgb(191,203,217)">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2" class="submenu-title-noDropdown">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled class="submenu-title-noDropdown">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" class="submenu-title-noDropdown">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
export default{
    data() {
      return {
        isCollapse: false,
      };
    },
    created(){
        this.$EventBus.$on('changeCollapse',() => {
            this.isCollapse = !this.isCollapse;
        });
    }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.submenu-title-noDropdown:hover{
    background-color: #263445!important;
}
.submenu-title-noDropdown:focus{
    background-color:  #263445!important;
}
.el-menu{
    height: inherit;
}
  </style>