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
        let i = 0, htmlStr = '', quote;
        for (i in quotes) {
            quote = quotes[i].trim();
            if (quote.search(kw) === -1) {
                continue;
            }

            htmlStr += '<article><p class="text-monospace text-pre-inline">' + quote + '</p></article><hr>';

        }
        if (!htmlStr) {
            htmlStr = '<article><p class="text-monospace text-pre-inline">Always belive that something wonderful is about to happen.</p></article><hr>';
        }
        jQuery('#quotation').html(htmlStr);
    });
    localStorage.setItem('searching', 1);
}
