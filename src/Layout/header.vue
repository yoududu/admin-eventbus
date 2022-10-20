<template>
    <div id="header">
        <div class="left">
            <span :class="className" @click="change"></span>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right">
            <el-dropdown trigger="click"><!--trigger="click"点击事件-->
                <span class="el-dropdown-link">
                    <el-image :src="user.avator"  class="avator"></el-image>
                    <i class="el-icon-arrow-down el-icon--right" style="margin-left=0px"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>首页</el-dropdown-item>
                    <el-dropdown-item>项目地址</el-dropdown-item>
                    <el-dropdown-item disabled>Dos</el-dropdown-item>
                    <el-dropdown-item divided @click="letoff">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { url } from '@/axios';
export default{
    data() {
        return{
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            className:{
                "el-icon-s-unfold":true,
                "el-icon-s-fold":false,
                switch:true
            },
            // state:ture,
            user: {
                username: "",
                avator: ''
            }
        }
    },
    methods:{
        change(){
            this.$EventBus.$emit('changeCollapse');
            this.className['el-icon-s-unfold'] = !this.className['el-icon-s-unfold'];
            this.className['el-icon-s-fold'] = !this.className['el-icon-s-fold'];
        },
        letoff() {
            this.$cookie.remove('rh_id');
            this.$router.push('/login')
        }
    },
    created(){
        let token = this.$cookie.get('rh_id');
        console.log(11);
        if (!token) {
            console.log(22);
            this.$message.error("请先登录")
            return this.$router.push('/login');
            
        }
        this.$http({
            
            url: "api/superprofile",
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(res => {
            if (res.data.status) {
                this.$message.error(res.data.msg);
                console.log(44)
            } else {
                console.log(res.data);
                // this.user.username = res.data.username;
                this.user.avator = `${url}${res.data.avator}`;
                console.log(this.user.avator)
                console.log(55)
            }
        }).catch(error => {
            this.$message.error('接口错误')
            console.log(66)
        })
    }
}
</script>
<style>
#header .el-breadcrumb{
    display: flex;
    align-items: center;
}
#header .el-dropdown{
    height: inherit;
    display: flex;
    align-items: center;
    padding: 9px 10px;
    cursor: pointer;
}
#header .el-dropdown:hover{
    background-color: rgba(0,0,0,.025);
}
</style>
<style scoped>
#header{
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.switch{
    padding: 0px 17px;
    font-size: 25px;
    line-height: 60px;
    cursor: pointer;
    transition: all .3s;
}
.switch:hover{
    background-color: rgba(0,0,0,.025);
}
.left{
    display: flex;
    align-items: center;
}
.right{
    display: flex;
    align-items: center;
    padding-right: 17px;
}
.avator{
    cursor: pointer;
    border-radius: 10px;
    width: 40px;
    height: 40px;
}
</style>