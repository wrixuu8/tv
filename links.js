let hd = "https://streamtv2.elitecomunicacion.cloud:3956/live/arabitvlive.m3u8";
    let sd = "URL الجودة المنخفضة هنا"; // قم بتعيين الرابط المناسب للجودة المنخفضة
    let low = "URL الجودة المنخفضة هنا"; // قم بتعيين الرابط المناسب للجودة المنخفضة

    let vids = document.getElementsByClassName("vid");
    vids[0].firstElementChild.setAttribute("src", low);
    vids[1].firstElementChild.setAttribute("src", sd);
    vids[2].firstElementChild.setAttribute("src", hd);
