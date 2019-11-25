if (head.import == undefined) {
    $.get('/header.html', function (data) {
        $('body').prepend(data);
    })
}else{
    document.write(head.import.body.innerHTML);
}
