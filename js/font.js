(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if(clientWidth<=768){
                clientWidth=768
            }
            if (!clientWidth) return;
            docEl.style.fontSize = 10 * (clientWidth / 1920) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(function(){
    var height=$(window).height();
    var scrolltop=$(window).scrollTop();
    if(scrolltop==0){
        $(".fixed").css({display:"none"});
    }
    /*首页隐藏*/
    $(".fixed>ul>li").eq(parseInt(scrolltop/height)).css({background:"#94d5fc"});
    /*右边亮*/
    var photobox=$(".photobox");
    var width=photobox.css('width');
    var height=photobox.css('height');
    $(".science_pho").css({width:width,height:height});
    var foot=$(".address>.foot>p");
    var foot=foot.css("height");
    $(".foot>p:first-child").css({"line-height":foot});
})