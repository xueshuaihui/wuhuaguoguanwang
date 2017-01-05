$(function(){
var width=$(window).width();
var height=$(window).height();
var imgbox=$(".imgboxs");
var kejiarr={"oa":['/images/image/oa/0.jpg','/images/image/oa/1.jpg','/images/image/oa/2.jpg','/images/image/oa/3.jpg','/images/image/oa/4.jpg'],
    "sj":['/images/image/sj/1.jpg','/images/image/sj/2.jpg','/images/image/sj/3.jpg','/images/image/sj/4.jpg'],
    "iplus":['/images/image/iplus/1.jpg','/images/image/iplus/2.jpg','/images/image/iplus/3.jpg','/images/image/iplus/4.jpg','/images/image/iplus/5.jpg'],
    "erp":['/images/image/erp/0.jpg','/images/image/erp/1.jpg','/images/image/erp/2.jpg'],
    "ems":['/images/image/ems/6.jpg','/images/image/ems/7.jpg','/images/image/ems/8.jpg','/images/image/ems/9.jpg'],
    "wanm":['/images/image/wanm/wm.jpg','/images/image/wanm/wm1.jpg','/images/image/wanm/wm2.jpg','/images/image/wanm/wm3.jpg','/images/image/wanm/wm4.jpg'],
    "wph":['/images/image/wph/wph (1).jpg','/images/image/wph/wph (2).jpg','/images/image/wph/wph (3).jpg','/images/image/wph/wph (4).jpg','/images/image/wph/wph (5).jpg'],
    "xm":['/images/image/xm/xm (1).jpg','/images/image/xm/xm (2).jpg','/images/image/xm/xm (3).jpg','/images/image/xm/xm (4).jpg','/images/image/xm/xm (5).jpg'],
    "yoho":['/images/image/yoho/yoho1.jpg','/images/image/yoho/yoho2.jpg','/images/image/yoho/yoho3.jpg','/images/image/yoho/yoho4.jpg','/images/image/yoho/yoho5.jpg'],
    "mjia":['/images/image/mjia/mj (1).jpg','/images/image/mjia/mj (2).jpg','/images/image/mjia/mj (3).jpg','/images/image/mjia/mj (4).jpg','/images/image/mjia/mj (5).jpg']}
var img=imgbox.find("img");
var mask_lis=$(".mask_lis");
function imgs(name){
    img.attr({src:kejiarr[name][0]});
    var str='';
    var length=kejiarr[name].length;
    var width=imgbox.css('width');
    var lisw=parseInt($(".mask_lis li").css('width'));
    var mlwidth=lisw*length+5*length;
    mask_lis.css({width:mlwidth});
    /*改变边框的长度*/
    for(var i=0;i<length;i++){
        str+='<li><img src="'+kejiarr[name][i]+'"></li>';
    }
    mask_lis.html(str);
    /*拼接*/
    $(".masks .imgboxs>.mask_lis>li").on("click",function(){
        var src=$(this).children("img").attr('src');
        img.attr({src:src});
    })
}
    function bigimg(name){
        var str='';
        var length=kejiarr[name].length;
        var lisw=1/length*100;
        var mlwidth=lisw*length+5*length;
        /*改变边框的长度*/
        for(var i=0;i<length;i++){
            str+='<li style="width: '+(lisw-1)+'%;float: left;padding: 0 0.5%;"><img src="'+kejiarr[name][i]+'" style="width: 100%;"></li>';
        }
        imgbox.css({"padding-bottom":"1%"}).append(str);
    }
var photobox=$(".photobox");
photobox.hover(function(){
$(this).children(".science_pho").css({display:'block'});
},function(){
    $(this).children(".science_pho").css({display:'none'});
})
photobox.on("click",function(){
    var This=$(this);
    var name=This.attr('type');
    var types=This.attr('types');
    if(types){
        mask_lis.css({display:'none'});
        bigimg(name);
    }else{
        mask_lis.css({display:'block'});
        imgs(name);
    }
    $(".masks").css({display:'block'});
})
    /*关闭*/
    $(".maskes").click(function(){
        imgbox.children("img").attr({'src':''})
        imgbox.children("li").remove();
        $(".mask_lis").html(" <li></li>")
        $(".masks").css({display:'none'});
    })

/*品牌展示*/
$(".logo_box").hover(function(){
    var src=$(this).children("img").attr('src');
    src=src.replace(/logo/,"logo1");
    $(this).children("img").attr({src:src});
},function(){
    var src=$(this).children("img").attr('src');
    src=src.replace(/logo1/,"logo");
    $(this).children("img").attr({src:src});
})

/*场景展示放大效果*/
$(".scenebox").hover(function(){
    $(this).find(".scene_mask").css({background:'rgba(0,0,0,0)'});
    $(this).find(".scene_img").css({width:'100%',height:'100%'});
},function(){
    $(this).find(".scene_mask").css({background:'rgba(0,0,0,.3)'});
    $(this).find(".scene_img").css({width:'99%',height:'99%'});
})
    /*跳转*/
    $(".fixed>ul>li").each(function(index,obj){
        $(this).on("click",function(){
            $(".fixed>ul>li").css({background:"#e5f5ff"});
            $(this).css({background:"#94d5fc"});
            if(index==0){
                $(".fixed").css({display:"none"});
            }
            $("body").animate({scrollTop:index*height},70)
        })
    })

    $(".nav>.center>ul>li").on("click",function(){
        var index=$(this).index()
        if(index==0){
            $(".fixed").css({display:"none"});
        }else{
            if(index>=3){
                index=index+1;
            }
            $(".fixed").css({display:"block"});
            $(".fixed>ul>li").css({background:"#e5f5ff"});
            $(".fixed>ul>li").eq(index).css({background:"#94d5fc"});
            $('html, body').animate({scrollTop:index*height},100);
        }
    })
    /*点击第一屏的按钮*/
    $(".button").click(function(){
        $(".fixed").css({display:"block"});
        $(".fixed>ul>li").eq(1).css({background:"#94d5fc"});
        $('html, body').animate({scrollTop: height+"px"},100);
    })
    $(window).on("scroll",function(){
        var scrolltop=$(this).scrollTop();
       if(scrolltop>height){
           var index=parseInt(scrolltop/height);
           $(".fixed").css({display:"block"});
           $(".fixed>ul>li").css({background:"#e5f5ff"});
           $(".fixed>ul>li").eq(index).css({background:"#94d5fc"});
       }else if(scrolltop<height){
           $(".fixed").css({display:"none"});
       }
    })

$(window).resize(function(){
    window.history.go(0);
})
})