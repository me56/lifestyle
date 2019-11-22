let device_type = navigator.userAgent;//获取userAgent信息
let md = new MobileDetect(device_type);//实例化mobile-detect
let os = md.os();//获取系统
if (os == "iOS") {//ios系统的处理
    $.get('/header.html', function (data) {
        $('body').prepend(data);
    })
} else {
    document.write(head.import.body.innerHTML);
}
