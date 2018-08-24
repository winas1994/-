/* 
* @Author: Marte
* @Date:   2018-08-20 17:17:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-23 14:53:33
*/
document.addEventListener('DOMContentLoaded',()=>{

 //获取元素
            
            var btn = document.querySelector('#btn');
            var ck = document.querySelector('.ck');
            
             //验证用户名是否存在
             var status = [200,304];
            var user=document.querySelector('.user')
            user.onblur = ()=>{
                let _user = user.value;

                let xhr = new XMLHttpRequest();
                
                xhr.onload = ()=>{
                    if(status.indexOf(xhr.status) >=0){
                        if(xhr.responseText === 'yes'){

                        }else if(xhr.responseText === 'no'){
                            alert('用户名已存在');
                            return false;
                        }
                    } 
                }

                xhr.open('get','../api/check_username.php?user='+_user,true);
                xhr.send();}
            // //判断用户名与密码非空
            // btn.onclick = function(e){
            //     e = e || window.event;

        /*
            电子邮件
                jinrong.xie@qq.com
                123@qq.com
                x_x@163.com
                x-x@a-r.com.cn
                x.x@laoxie.com
                邮箱用户名必须3-30个字符
         */
        btn.onclick=function(e){



            var user = document.querySelector('.user').value;
            var pwd = document.querySelector('.pwd').value;
            var code = document.querySelector('.code').value;
            var check=document.querySelector('#check');
            e = e || window.event;
            if(user === ''){
                alert('邮箱不能为空');
                return false;
            }
            if(!/^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(user)){
            alert('邮箱格式不合法')
            return false;
        }
            

          if(pwd === ''){
                alert('密码不能为空');
                return false;
            }
        if(!/^\S{6,20}$/.test(pwd)){
            alert('密码不能有空格');
            return false;
        }

        if(code != pwd){
            alert('两次输入密码不一致');
            return false;
        }
        if(!check.checked){
            alert('请同意并阅读协议');
            return false;
        
        }


            let status = [200,304];

               

        //         // 获取用户名/密码
                let _user = user;
                var _pwd = pwd;
                let xhr = new XMLHttpRequest();
                xhr.onload = ()=>{
                    if(status.indexOf(xhr.status) >= 0){
                            if(xhr.responseText="success"){
                                
                                location.href="../html/login.html";
                            }

                    } }
                xhr.open('post','../api/reg.php',true);
                // 设置请求头，以便后端接收post数据
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                xhr.send(`user=${_user}&pwd=${_pwd}`);
        }




});