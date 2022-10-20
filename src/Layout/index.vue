<template>
    <div id="home">
        <el-container>
            <el-aside width="auto">
                <Aside></Aside>
            </el-aside>
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
import Header from './header.vue'
import Aside from './aside.vue';
import { url } from '@/axios';
export default {
    components:{
        Aside,
        Header
    },
    data() {
        return {
            user: {
                username: "",
                avator: ''
            }
        }
    },
    methods: {
        letoff() {
            this.$cookie.remove('rh_id');
            this.$router.push('/login')
        }
    },
    created() {
        let token = this.$cookie.get('rh_id');
        if (!token) {
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
            } else {
                console.log(res.data);
                this.user.username = res.data.username;
                this.user.avator = `${url}${res.data.avator}`;
                console.log(this.user.avator)
            }

        }).catch(error => {
            this.$message.error('接口错误')
        })
    }

}
</script>
<style>
#home{
    height: inherit;
    background-color: #f0f2f5;
}
</style>
<style>
.el-container,.el-aside{
    height: inherit;
}
.el-header{
    background-color: #fff;
    padding: 0px;
}
</style>