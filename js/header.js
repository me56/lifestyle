let device_type = navigator.userAgent;//获取userAgent信息
let os = '';
if (device_type.search('.NET') != -1) {
    os = 1
} else if (device_type.search('iPhone') != -1) {
    os = 1;
} else if (device_type.search('Edge') != -1) {
    os = 1;
} else {
    os = 2
}

if (os === 1) {//ios系统的处理
    $.get('/header.html', function (data) {
        $('body').prepend(data);
    })
} else {
    document.write(head.import.body.innerHTML);
}
