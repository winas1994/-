/* 
* @Author: Marte
* @Date:   2018-08-19 19:23:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-19 19:24:40
*/
document.addEventListener('DOMContentLoaded',function () {
var data1=[{
        id:'11',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'22',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'33',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'44',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'55',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'66',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'77',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'88',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'99',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'100',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    }];
   var goodslist1 = document.querySelector('.goodslist1')
        // 商品写入页面
        rende();
        function rende(){
            goodslist1.innerHTML = data1.map(function(item){
                return `<li data-guid="${item.id}">
                    <a href="#" class="img"><img src="${item.imgurl}" alt="" /></a>
                    <p><a href="#">${item.title}</a>
                    <p><a href="#">${item.numb}</a>
                    <p><a href="#"><span>${item.price}</span></a>
                </li>`
            }).join(''); 

        var rexiao=document.querySelector('.rexiao');
        rexiao.onmouseover=function(){
            goodslist.style.display='block';
        }
         rexiao.onmouseout=function(){
            goodslist.style.display='none';
            
        }
}
})