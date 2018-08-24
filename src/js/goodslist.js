/* 
* @Author: Marte
* @Date:   2018-08-21 13:59:23
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-24 09:08:57
*/
document.addEventListener('DOMContentLoaded',function () {


    var data=[{
        id:'01',
        imgurl:'../img/g1.jpg@240w_240h',
        price:'798.00',
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/5/15'
     
    },{
        id:'02',
        imgurl:'../img/g2.jpg@240w_240h',
        price:'799.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/4/6'
     
    },{
        id:'03',
        imgurl:'../img/g3.jpg@240w_240h',
        price:'698.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/11/26'
     
    },{
        id:'04',
        imgurl:'../img/g4.jpg@240w_240h',
        price:'738.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/11/12'
     
    },{
        id:'05',
        imgurl:'../img/g5.jpg@240w_240h',
        price:'398.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/11/16'
     
    },{
        id:'01',
        imgurl:'../img/g6.jpg@240w_240h',
        price:'598.00',
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/01/6'
    },{
        id:'02',
        imgurl:'../img/g7.jpg@240w_240h',
        price:'898.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/08/6'
     
    },{
        id:'03',
        imgurl:'../img/g8.jpg@240w_240h',
        price:'198.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/7/18'
     
    },{
        id:'04',
        imgurl:'../img/g9.jpg@240w_240h',
        price:'738.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/02/6'
     
    },{
        id:'05',
        imgurl:'../img/g10.jpg@240w_240h',
        price:'748.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/7/16'
     
    },{
        id:'01',
        imgurl:'../img/g11.jpg@240w_240h',
        price:'778.00',
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/3/16'
     
    },{
        id:'02',
        imgurl:'../img/g12.jpg@240w_240h',
        price:'798.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/9/16'
     
    },{
        id:'03',
        imgurl:'../img/g13.jpg@240w_240h',
        price:'791.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/12/16'
     
    },{
        id:'04',
        imgurl:'../img/g14.jpg@240w_240h',
        price:'348.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/1/16'
     
    },{
        id:'05',
        imgurl:'../img/g15.jpg@240w_240h',
        price:'238.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/7/26'
     
    },{
        id:'01',
        imgurl:'../img/g16.jpg@240w_240h',
        price:'7918.00',
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/9/16'
     
    },{
        id:'02',
        imgurl:'../img/g17.jpg@240w_240h',
        price:'7985.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/8/16'
     
    },{
        id:'03',
        imgurl:'../img/g27.jpg@240w_240h',
        price:'7988.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/7/16'
     
    },{
        id:'04',
        imgurl:'../img/g1.jpg@240w_240h',
        price:'128.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/10/16'
     
    },{
        id:'05',
        imgurl:'../img/g20.jpg@240w_240h',
        price:'718.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/01/16'
     
    },{
        id:'01',
        imgurl:'../img/g21.jpg@240w_240h',
        price:'908.00',
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/08/16'
     
    },{
        id:'02',
        imgurl:'../img/g24.jpg@240w_240h',
        price:'7398.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/06/16'
     
    },{
        id:'03',
        imgurl:'../img/g25.jpg@240w_240h',
        price:'458.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/07/22'
     
    },{
        id:'04',
        imgurl:'../img/g26.jpg@240w_240h',
        price:'788.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/07/3'
     
    },{
        id:'05',
        imgurl:'../img/g27.jpg@240w_240h',
        price:'756.00', 
        title1:'DS优雅款蕾丝连衣裙 货号122381',
        title2:'优雅款蕾丝连衣裙',
        name:'央广购物',
        date:'2018/07/17'
     
    }]

     var goodslist = document.querySelector('.goodslist')
        // 商品写入页面
        render();
        function render(){
            goodslist.innerHTML = data.map(function(item){
                return `<li data-guid="${item.id}">
                    <a href="#" class="img"><img src="${item.imgurl}" alt="" /></a>
                    <p><a href="#"><span class="red spa">${item.price}</span></a>
                    <p><a href="#">${item.title1}</a>
                    <p><a href="#"><span class="red">${item.title2}</span></a>
                    <p><a href="#">${item.name}</a><span class="fr">${item.date}</span>
                    <div class="overflow"><span class="fl"><button class="btn_add">加入购物车</button></span><span class="shoucang fl"><a href="#">收藏</a></span></div>
                </li>`
            }).join(''); 

             // 点击商品列表的商品图片跳转到详情页
            var img = goodslist.querySelectorAll('img');
            for(var i=0;i<img.length;i++){
                (function(i){
                    img[i].onclick = function(){
                        var params = '';
                        var goods = data[i];

                        for(var key in goods){
                            params += key + '=' + goods[key] + '&';
                        }
                        params = params.slice(0,-1);
                
                        location.href = 'xiangqing.html?' + params;
                    }
                })(i);
            }       
        }

    
            var odate = document.querySelector('.odate');
             var oprice = document.querySelector('.oprice');
        // 日期排序
        odate.onclick = function(){
            odate.style.color = '#ff4500';
            oprice.style.color = '#000';
            if(odate.className === 'fa fa-arrow-down'){
                data.sort(function(a,b){
                    return Date.parse(a.date) - Date.parse(b.date);
                })
                odate.className = 'fa fa-arrow-up';
                render();
            }else{
                data.sort(function(a,b){
                    return Date.parse(b.date) - Date.parse(a.date);
                })
                odate.className = 'fa fa-arrow-down';
                render();
            }           
        }

       
        // 价格排序
        oprice.onclick = function(){
            oprice.style.color = '#ff4500';
            odate.style.color = '#000';
            if(oprice.className === 'fa fa-arrow-down'){
                data.sort(function(a,b){
                    return a.price - b.price;
                })
                oprice.className = 'fa fa-arrow-up';
                render();
            }else if(oprice.className = 'fa fa-arrow-up'){
                data.sort(function(a,b){
                    return b.price - a.price;
                })
                oprice.className = 'fa fa-arrow-down';
                render();
            }           
        }

            
               

});