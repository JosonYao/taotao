$(function(){
    //indexBanner轮播图
    dslide('indexSwiper','.boxWrap .banner','.boxWrap .banner .libs','.boxWrap .banner .tabs .right','.boxWrap .banner .tabs .left','1','3000');
       

    /*鼠标移入停止轮播，鼠标离开 继续轮播*/
    $('.boxWrap .banner').hover(function(){
        $('.boxWrap .banner .tabs .btn').css('opacity','1');
    },function(){
        $('.boxWrap .banner .tabs .btn').css('opacity','.1');
    });

    // 公告
    dslide('notice','.notice .cont .newsList','','.notice .cont .newsList .tabs .right','.notice .cont .newsList .tabs .left','1','3000');
    

    //Doctor
    dslide('doctor','.doctor .cont .items #els .box','','.doctor .cont .items #els .right','.doctor .cont .items #els .left','auto','3000');
    
    
    ShowHidden('.doctor .cont .tab','click','span','.doctor .cont .items .item');
    ShowHidden('.main .doctor .tab','click','span','.main .doctor .items .item');

    dslide('bslide','.bslide .wrapp','','.bslide .btn .right','.bslide .btn .left','4','3000');

    //封装
    function dslide(name,$b,$libs,$r,$l,num,speed){
        var name = new Swiper($b,{
            pagination: $libs,
            nextButton: $r,
            prevButton: $l,
            paginationClickable: true,
            slidesPerView: num,
            loop: true,
            autoplay: speed,
        });
        $($b).hover(function(){
            name.stopAutoplay();
        },function(){
            name.startAutoplay();
        });
    }

    function ShowHidden($s1,event,label,$s2,fun){
        $($s1).on(event,label,function(){
            jQuery(this).addClass("on").siblings().removeClass('on');
            var i = jQuery(this).index();
            console.log(i);
            $($s2).eq(i).addClass("on").siblings().removeClass('on');
            if(i==1){
                dslide('doctor2','.doctor .cont .items #tg .box','','.doctor .cont .items #tg .right','.doctor .cont .items #tg .left','auto','3000');
            }
            if(i==2){
                dslide('doctor3','.doctor .cont .items #bld .box','','.doctor .cont .items #bld .right','.doctor .cont .items #bld .left','auto','3000');
            }
        });
    }
});