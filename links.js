document.addEventListener('DOMContentLoaded', function () {
    const hdVideo = document.getElementById('hdVideo');
    const sdVideo = document.getElementById('sdVideo');
    const lowVideo = document.getElementById('lowVideo');

    // قم بتعيين روابط الفيديو هنا
    hdVideo.src = 'https://streamtv2.elitecomunicacion.cloud:3956/live/arabitvlive.m3u8';
    sdVideo.src = 'https://cdn.smartstream.video/smartstream-us/dy365/dy365/playlist.m3u8';
    lowVideo.src = 'رابط الفيديو منخفض الجودة';

    // إعادة تشغيل الفيديو عند تغيير الرابط
    hdVideo.load();
    sdVideo.load();
    lowVideo.load();
});
