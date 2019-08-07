let a_idx = 0;

jQuery(window).click(function (e) {
    let i = jQuery("<img>").attr({
        'src': 'https://raw.githubusercontent.com/me56/picture/master/WechatIMG6.png',
        'width': 200,
        'height': 200
    });
    let x = e.pageX, y = e.pageY;
    let cH = jQuery(window).height();
    console.log('pageY:' + y);
    let layer_up = 0;
    if (cH > y * 2) {
        layer_up = y + 150;
    } else {
        layer_up = y - 200;
    }
    i.css({
        "z-index": 1000,
        "top": y - 100,
        "left": x - 100,
        "position": "absolute",
    });
    jQuery("body").append(i);
    i.animate({"top": layer_up, "opacity": 0}, 1500, function () {
        i.remove();
    });
});