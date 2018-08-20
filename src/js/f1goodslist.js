/* 
* @Author: Marte
* @Date:   2018-08-18 20:14:54
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-19 20:13:38
*/

document.addEventListener('DOMContentLoaded',function () {


    var data=[{
        id:'01',
        imgurl:'img/sh1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'02',
        imgurl:'img/sh2.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'03',
        imgurl:'img/sh3.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'04',
        imgurl:'img/sh4.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'05',
        imgurl:'img/sh5.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'06',
        imgurl:'img/sh6.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'07',
        imgurl:'img/sh7.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'08',
        imgurl:'img/sh8.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'09',
        imgurl:'img/sh9.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'10',
        imgurl:'img/sh10.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    }];
    var goodslist = document.querySelector('.goodslist')
        // 商品写入页面
        render();
        function render(){
            goodslist.innerHTML = data.map(function(item){
                return `<li data-guid="${item.id}">
                    <a href="#" class="img"><img src="${item.imgurl}" alt="" /></a>
                    <p><a href="#">${item.title}</a>
                    <p><a href="#">${item.numb}</a>
                    <p><a href="#"><span>${item.price}</span></a>
                </li>`
            }).join(''); 
}


var data1=[{
        id:'11',
        imgurl:'img/re1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'22',
        imgurl:'img/re2.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'33',
        imgurl:'img/re3.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'44',
        imgurl:'img/re4.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'55',
        imgurl:'img/re5.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'66',
        imgurl:'img/re6.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'77',
        imgurl:'img/re7.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'88',
        imgurl:'img/re8.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'99',
        imgurl:'img/re9.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'100',
        imgurl:'img/re10.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    }];
   var goodslist1 = document.querySelector('.goodslist1')
        // 商品写入页面
        render1();
        function render1(){
            goodslist1.innerHTML = data1.map(function(item){
                return `<li data-guid="${item.id}">
                    <a href="#" class="img"><img src="${item.imgurl}" alt="" /></a>
                    <p><a href="#">${item.title}</a>
                    <p><a href="#">${item.numb}</a>
                    <p><a href="#"><span>${item.price}</span></a>
                </li>`
            }).join(''); 

        
}

var data2=[{
        id:'11',
        imgurl:'img/y1.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'22',
        imgurl:'img/y2.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'33',
        imgurl:'img/y3.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'44',
        imgurl:'img/y4.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'55',
        imgurl:'img/y5.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'66',
        imgurl:'img/y6.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'77',
        imgurl:'img/y7.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'88',
        imgurl:'img/y8.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'99',
        imgurl:'img/y9.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    },{
        id:'100',
        imgurl:'img/y10.jpg@240w_240h',
        title:'进然牌东北椴树结晶蜜秒杀组',
        numb:'货号121243',
        price:'¥199.00' 
    }];
   var goodslist2 = document.querySelector('.goodslist2')
        // 商品写入页面
        render2();
        function render2(){
            goodslist2.innerHTML = data2.map(function(item){
                return `<li data-guid="${item.id}">
                    <a href="#" class="img"><img src="${item.imgurl}" alt="" /></a>
                    <p><a href="#">${item.title}</a>
                    <p><a href="#">${item.numb}</a>
                    <p><a href="#"><span>${item.price}</span></a>
                </li>`
            }).join(''); 

} 
});