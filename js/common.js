window.onload = function () {
    let ul = document.getElementById('ul');
    let lis = ul.getElementsByTagName('li');
    let i = 0, j = 0, origin_class = '';
    if (localStorage.getItem('index') !== null) {
        let li_index = localStorage.getItem('index');
        origin_class = lis[li_index].getAttribute('class');
        origin_class = origin_class.replace(' active', '');
        lis[li_index].className = origin_class + ' active';
        return false;
    }
    let lis_length = lis.length;
    for (i = 0; i < lis_length; i++) {
        (function (args) {
            lis[i].onclick = function () {
                localStorage.setItem('index', args);
                origin_class = this.getAttribute('class');
                console.log(origin_class);
                for (j = 0; j < lis_length; j++) {
                    lis[j].className = origin_class;
                }
                this.className = origin_class + ' active';
            }
        })(i)
    }
}