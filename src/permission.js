import router from '@/router';
import cookie from 'js-cookie' 
// 路由保安系统
router.beforeEach((to,from,next) => {
    const token = cookie.get('rh_id');
    if(!token){
        if(to.path == '/login'){
            next();
        }else{
            next('/login')
        }
    }else{
        // 登陆过的人又翻墙到登录页面 哪来的回哪去
        if(to.path == '/login'){
            next(from);
        }else{
            next()
        }
    }
    // 如果用户直接登录页面
    // if(to.path == '/login' ){
    //     next();
    // }else{
    //     // 看是否有VIP 如果有，检查一下卡是不是假的，如果好着，放行
    //     // 如果过程中有意向有问题，直接送回login
    //     const token = cookie.get('rh_id');
    //     if(!token){
    //         // 没有VIP卡
    //         next('/login');
    //     }else{
    //         next();
    //     }
    //     // 没有会员卡 去跟后端验证一下，这卡是不是假的
    //     // 如何验证 用token去获取一下个人信息，能拿到信息就是好的卡
    // }

})
export default router;