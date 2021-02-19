$(function(){
    //indexBanner轮播图
    dslide('indexSwiper','.box .banner','.box .banner .libs','.box .banner .tabs .right','.box .banner .tabs .left','1','3000');
       

    /*鼠标移入停止轮播，鼠标离开 继续轮播*/
    $('.box .banner').hover(function(){
        $('.box .banner .tabs .btn').css('opacity','1');
    },function(){
        $('.box .banner .tabs .btn').css('opacity','.1');
    });

    // 公告
    dslide('notice','.notice .cont .newsList','','.notice .cont .newsList .tabs .right','.notice .cont .newsList .tabs .left','1','3000');
    

    //Doctor
    dslide('doctor','.doctor .cont .items #els .box','','.doctor .cont .items #els .right','.doctor .cont .items #els .left','4','2500');

    //dslide('doctor2','.doctor .cont .items #tg .box','.doctor .cont .items #tg .right','.doctor .cont .items #tg .left','4','3000');
    //dslide('doctor3','.doctor .cont .items #bld .box','.doctor .cont .items #bld .right','.doctor .cont .items #bld .left','4','3000');
    
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

    function ShowHidden($s1,event,label,$s2){
        $($s1).on(event,label,function(){
            jQuery(this).addClass("on").siblings().removeClass('on');
            var i = jQuery(this).index();
            $($s2).eq(i).addClass("on").siblings().removeClass('on');
        })
    }
});