Array.prototype.map.call(document.querySelectorAll('a[name]'), function (e) {
    return e.href;
}).filter(function (x) {
    return x.startsWith('http');
}).join('\n');