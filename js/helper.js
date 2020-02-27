function getQueryString(name) {
    let reg, r;
    reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}

function search_quotation(kw) {
    if (!kw.length) {
        return false;
    }
    jQuery.get('quotation.txt', function (data) {
        let quotes = data.split(">>>");
        quotes.shift();
        let i, htmlStr = '', j, sub_content;
        for (i in quotes) {
            if (quotes[i].search(kw) === -1) {
                continue;
            }
            htmlStr += '<p class="lead">';
            sub_content = quotes[i].trim().split('\n');
            for (j in sub_content) {
                htmlStr += sub_content[j] + '<br>';
            }
            htmlStr += '</p><hr>';
        }
        console.log(htmlStr);
        if (!htmlStr) {htmlStr = 'Always belive that something wonderful is about to happen.';}
        jQuery('.starter-template').html(htmlStr);
    });
    localStorage.setItem('searching', 1);
}
