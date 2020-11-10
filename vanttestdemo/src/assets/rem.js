/*
移动端字体适配方案
*/
;

(function(win) {
    var doc = win.document;
    var docE1 = doc.documentElement;
    var _t;
    //console.log(doc); // 返回document对象
    //console.log(docE1); // 返回整个网页

    function refreshRemFn() {
        var _width= docE1.getBoundingClientRect().width;
        //console.log(_width);

        if(_width > 750) {
            _width = 750;
        }

        // 设定1rem = 100px
        var rem = _width / 7.5;
        docE1.style.fontSize = rem + 'px';
    }

    win.addEventListener('resize', function() {
        clearTimeout(_t);
        _t = setTimeout(refreshRemFn, 300);
    }, false);

    // 页面一打开就运行
    refreshRemFn();
})(window);