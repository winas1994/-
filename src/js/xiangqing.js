/* 
* @Author: Marte
* @Date:   2018-08-23 20:54:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-25 16:32:37
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
   var cl = document.querySelectorAll('.cl li ');
   var cc = document.querySelectorAll('.cc li ');
           
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
                console.log(cc.length)
                if(i===k){
                    cc[k].style.borderColor = 'red';                    
                }else{
                    cc[k].style.borderColor = '';
                }
            }
        }
        
    }


    var goods = document.querySelector('#goods');
    var addcar = document.querySelector('#addcar');

    //{id: "03", imgurl: "../img/g3.jpg@240w_240h", price: "698.00", title1: "DS优雅款蕾丝连衣裙 货号122381", title2: "优雅款蕾丝连衣裙", …}
    var tr = document.querySelector('.tr');
    var li = document.querySelector('#goods li');

    var qty = document.querySelector("#qty");
    var oqty = document.querySelector(".oqty");

    //选择商品数量
    // qty.oninput=function(){

    //     if(qty.value*1 < 0){
    //         qty.value = 0;
    //     }
    //     oqty.innerText=qty.value;
    // }
    //存入cookie
    var goodslist = Cookie.get('goodslist');
    if(goodslist!= ''){
            //如果goodslist得到一个空字符串变成空数组
             goodslist = JSON.parse(goodslist);

        }else{
            //如果goodslist得到一个json字符串变成数组
           
             goodslist = [];
        }
        console.log(goodslist);
html();
    function html(){
         //添加商品信息到购物车
        var res = goodslist.map((item,idx)=>{
            return `<li>
                     <img src="${goodslist[idx].imgurl}" class="fl">
                     <p class="red tl fl">${goodslist[idx].title1}</p>
                     <span>单价：</span ><span style="color:red" clasclass="red tr fr">${goodslist[idx].price}</span>
                     <span class="btn-close">删除</span>
                     <span>数量：</span><span class="oqty" >1</span>
                     </li>`
    }).join('');
        goods.innerHTML=res;
}

    addcar.onclick=function(){
       html();
       
       var currentGoods =  goodslist.filter(function(item){
                return item.id === goods.id;
            });

        // 商品存在，在原有数量上加上现在添加的商品数量
        if(currentGoods.length>0){
            currentGoods[0].qty = currentGoods[0].qty*1 + number.value*1;
        }else{
            var data ={};
            data.id=a.id;
            data.imgurl=a.imgurl;
            data.title1=a.title1;
            data.price=a.price;

            goodslist.push(data);
        }
    
    
    //写入cookie
   Cookie.set('goodslist',JSON.stringify(goodslist));
    html();

   }      
    //删除单个商品
    var closes = document.querySelectorAll('.btn-close');
       for(var i=0;i<closes.length;i++){
            if(closes[i].onclick){
              closes[i].parentNode.removeChild( closes[i]);
                i--;//删除后数组中自动向前移，i也会++，便会漏掉，所以让i不增加
                            }
                }

});
