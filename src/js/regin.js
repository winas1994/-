/* 
* @Author: Marte
* @Date:   2018-08-20 17:17:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-20 17:59:14
*/
document.addEventListener('DOMContentLoaded',()=>{

 //获取元素
            var user = document.querySelector('.user');
            var psw = document.querySelector('.pwd');
            var code = document.querySelector('.code');
            var btn = document.querySelector('#btn');
            var ck = document.querySelector('.ck');
            
            
            //判断用户名与密码非空
            btn.onclick = function(e){
                e = e || window.event;

        /*
            电子邮件
                jinrong.xie@qq.com
                123@qq.com
                x_x@163.com
                x-x@a-r.com.cn
                x.x@laoxie.com
                邮箱用户名必须3-30个字符
         */
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


});