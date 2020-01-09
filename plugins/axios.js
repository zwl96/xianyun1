import {Message} from "element-ui";

export default (nuxt) => {
    nuxt.$axios.onError(res => {
        const {statusCode, message} = res.response.data;
        
        // 还未使用
        // if(statusCode === 401 || statusCode === 403){
        //     Message.warning({message: "请先登录"});
        //     redirect("/user/login");
        // }

        if(statusCode === 400){
            Message.warning({message});
        }

        if(statusCode === 401){
            Message.error("登录过期，跳转到登录页")
            nuxt.redirect()
        }
    })
}