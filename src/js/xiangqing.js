/* 
* @Author: Marte
* @Date:   2018-08-23 20:54:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-24 08:59:38
*/
document.addEventListener('DOMContentLoaded',function () {
  var params = location.search; //str
   params = params.slice(1); //去掉？
        params = params.split('&'); //拆分成数组

        // 声明一个空对象
        var a = {};
        // 遍历params数组，拆分成二维数组
        params.forEach(function(item){
            var arr = item.split('=');
            // 商品信息写入数组
            a[arr[0]] = decodeURI(arr[1]);
            
        });

  var goods = document.querySelector('#main .goods');
        goods.children[0].src=a.imgurl;


  var xianjia = document.querySelector('.xianjia');
    xianjia.children[1].innerText=a.price;
   //颜色选择
   var cl = document.querySelectorAll('.cl li span');
   var cc = document.querySelectorAll('.cc li span');
           
    for(let i=0;i<cl.length;i++){
        // 选择颜色
        cl[i].onclick = function(){
            for(let j=0;j<cl.length;j++){
                if(i===j){
                    cl[j].style.borderColor = 'red';                    
                }else{
                    cl[j].style.borderColor = '';
                }
            }
        }

        //选择尺寸
         cc[i].onclick = function(){
            for(let k=0;k<cc.length;k++){
                if(i===k){
                    cc[k].style.borderColor = 'red';                    
                }else{
                    cc[k].style.borderColor = '';
                }
            }
        }
        
    }
});
