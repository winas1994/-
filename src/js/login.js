/* 
* @Author: Marte
* @Date:   2018-08-21 20:52:04
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-23 16:40:09
*/
document.addEventListener('DOMContentLoaded',()=>{

         var user = document.querySelector('#tel');
         var pwd = document.querySelector('.pwd');
         var btn = document.querySelector('#btn');

         var yz = document.querySelector('#yz');
         var code= document.querySelector('#code');



         //生成验证码
                var vcode = document.querySelector('.vcode');
                var str = 'abcdefghijklmnopqrstuvwxyz0123456789';//str[35]
                randomCode();
                //生成随机验证码
                function randomCode(){
                // 随机生成一个4位验证码（包含字母）
                var _code = '';
                for(var i=0;i<4;i++){
                    var index = parseInt(Math.random()*str.length) //不可能大于36
                    _code += str[index]
                }
                vcode.innerHTML = _code.toUpperCase();
                vcode.style.backgroundColor = '#ddd'
            }

                vcode.onclick = randomCode;





            let status = [200,304];

                //验证用户名是否存在
            btn.onclick = ()=>{

                let _user = user.value;
                let _pwd = pwd.value;
                let xhr = new XMLHttpRequest();
                xhr.onload = ()=>{
                   
                    if(status.indexOf(xhr.status) >=0){
                               
                        if(xhr.responseText === 'no'){

                            alert('用户名或者密码错误');
                            return false;
                        }
                            //验证是否输入一样
                        if(yz.value!==code.innerText){

                            alert('验证码输入错误');
                            return false;
                        }

                        if(xhr.responseText === 'yes'){
                            
                            location.href="../index.html";
                            return false;
                          
                        }
                    } 
                }

                xhr.open('post','../api/login.php',true);

                 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


                 xhr.send(`user=${_user}&pwd=${_pwd}`);  
            }

            });