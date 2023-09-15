let hd = "https://streamtv2.elitecomunicacion.cloud:3956/live/arabitvlive.m3u8";
let sd = ""; // قم بتعيين الرابط المناسب للجودة المنخفضة
let low = ""; // قم بتعيين الرابط المناسب للجودة المنخفضة

// تحديد المشغلات باستخدام المعرفات وتعيين عناوين URL
document.getElementById("hdVideo").setAttribute("src", hd);
document.getElementById("sdVideo").setAttribute("src", sd);
document.getElementById("lowVideo").setAttribute("src", low);
