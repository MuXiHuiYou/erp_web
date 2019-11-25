window.WwLogin({
                "id" : "enterprise-wechat-login",  //显示二维码的容器id
                "appid" : "ww2e883279c16afe18",
                "agentid" : "1000014",  //企业微信的cropID，在 企业微信管理端->我的企业 中查看
                "redirect_uri" :"www.yoking.wang",   //重定向地址，需要进行UrlEncode
                "state" : "3828293919281",   //用于保持请求和回调的状态，授权请求后原样带回给企业。该参数可用于防止csrf攻击（跨站请求伪造攻击），建议企业带上该参数
                "href" : "",    //自定义样式链接，企业可根据实际需求覆盖默认样式。详见文档底部FAQ

        });

