/* 
* @Author: Marte
* @Date:   2018-08-20 17:17:22
* @Last Modified by:   Marte
<<<<<<< HEAD
* @Last Modified time: 2018-08-23 14:53:33
=======
* @Last Modified time: 2018-08-20 17:59:14
>>>>>>> f1d6ea4cc8f020c6d44c4a31961c49bca5747a10
*/
document.addEventListener('DOMContentLoaded',()=>{

 //获取元素
<<<<<<< HEAD
            
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
=======
            var user = document.querySelector('.user');
            var psw = document.querySelector('.pwd');
            var code = document.querySelector('.code');
            var btn = document.querySelector('#btn');
            var ck = document.querySelector('.ck');
            
            
            //判断用户名与密码非空
            btn.onclick = function(e){
                e = e || window.event;
>>>>>>> f1d6ea4cc8f020c6d44c4a31961c49bca5747a10

        /*
            电子邮件
                jinrong.xie@qq.com
                123@qq.com
                x_x@163.com
                x-x@a-r.com.cn
                x.x@laoxie.com
                邮箱用户名必须3-30个字符
         */
<<<<<<< HEAD
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


=======
        if(!/^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(user)){
            ck.innHTML='邮箱格式不合法';
            return false;
        }

        if(user.value === ''){
                ck.innerHTML = '邮箱不能为空';
            }

        /*
            密码  
                长度6-20 
                不能包含空格
         */
        if(!/^\S{6,20}$/.test(pwd)){
            ck.innerHTML='密码不能有空格';
            return false;
        }
                if(psw.value === ''){
                ck.innerHTML = '密码不能为空';
            }

            alert('注册成功');
            var infos = document.cookie.split('=',-1); 
            // infos = JSON.parse(infos);
            for(var i=0;i<infos.length;i++){
                if(infos[0] === 'infos'){
                 infos = JSON.parse(infos[1]);
                }
            }
            console.log(infos[0].password);
            if(!(user.value === infos[0].user)){
                alert('用户名或者密码输入错误！')
                return false;
            }
             if(!(psw.value === infos[0].password)){
                alert('用户名或者密码输入错误！')
                return false;
            }
            if(!(code.value === pwd.value)){
                alert('两次输入密码不一致！')
                return false;
            }

                alert('注册成功！');
                // console.log('登陆成功！');
    
        }
           
            //获取注册的值，用cookie存

            // var infos = [];
            // var cookie = document.cookie;

            // var btnregs = document.querySelector('.btnregs');
            // var psw_one = document.querySelector('#psw_one');
            // var psw_tow = document.querySelector('#psw_tow');
          
            // btnregs.onclick = function(e){
              
            //   if(!(psw_one.value === psw_tow.value)){
            //         psw_tow.value = '';
            //         alert('密码输入不一致');
            //         return false;
            //   }
            //     var main = btnregs.parentNode;
            //     console.log(main);
            //     var info = {
            //         username:main.children[2].children[0].value,
            //         password:main.children[4].children[0].value,
            //         passwordclon:main.children[6].children[0].value
            //     }
            //     infos.push(info);
               
            //     // 把对象/数组转换诚json字符串：JSON.stringify()
            //      document.cookie = 'infos='+ JSON.stringify(infos);        
            // }

            //     var vcode = document.querySelector('.vcode');
            //     var str = 'abcdefghijklmnopqrstuvwxyz0123456789';//str[35]
            //     randomCode();
            //     //生成随机验证码
            //     function randomCode(){
            //     // 随机生成一个4位验证码（包含字母）
            //     var _code = '';
            //     for(var i=0;i<4;i++){
            //         var index = parseInt(Math.random()*str.length) //不可能大于36
            //         _code += str[index]
            //     }
            //     vcode.innerHTML = _code.toUpperCase();
            //     vcode.style.backgroundColor = 'skyblue'
            // }

            //     vcode.onclick = randomCode;
>>>>>>> f1d6ea4cc8f020c6d44c4a31961c49bca5747a10


});