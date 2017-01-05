/*检测浏览器版本*/
var reg=/\.NET4\.0E/;
var str=navigator.appVersion;
console.log(str)
if(reg.test(str)){
    window.location='upgrade.html';
}
var regs=/iPhone|Android/;
if(regs.test(str)){
    window.location='iphone.html';
}