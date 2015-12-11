/*==============================================
	Swap image Module
==============================================*/
$(function() {
    var imgcache = new Object();
    $(".btn,.allbtn img").not("[src*='_o.']").each(function(i) {
        var imgsrc = this.src;
        var dot = this.src.lastIndexOf('.');
        var imgovr = this.src.substr(0, dot) + '_o' + this.src.substr(dot, 4);
        imgcache[this.src] = new Image();
        imgcache[this.src].src = imgovr;
        $(this).hover(function() {
            this.src = imgovr;
        }, function() {
            this.src = imgsrc;
        });
    });
});

/*==============================================
	Fade Module
==============================================*/
$(function() {
    $(".fade").each(function(i) {
        $(this).hover(function() {
            $(this).stop().fadeTo(200, 0.5);
        }, function() {
            $(this).stop().fadeTo(200, 1);
        });
    });
});

/*==============================================
	Scroll
==============================================*/
$(function() {
    $("a[href^=#]").click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});

/*==============================================
	GlobalNavi Dropdown Menu
==============================================*/
$(window).on("load resize", function() {
    var i = $(window).width();
    var j = 640; //Width(Responsive)
    if (i <= j) {
        $("li.dd ul").css("display", "block");
        $("li.dd").unbind("mouseenter mouseleave");
    } else {
        $("li.dd").hover(function() {
            $(this).children("ul").show(100).css("display", "block");
        }, function() {
            $(this).children("ul").stop().hide(250);
        });
    }
});

/*==============================================
	meanmenu
==============================================*/
$(function() {
    $("#globalNavi").meanmenu();
});

// Gallery
// @banghh

function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr;
    for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_findObj(n, d) { //v4.01
    var p, i, x;
    if (!d) d = document;
    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document;
        n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n];
    for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n);
    return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0,
        x, a = MM_swapImage.arguments;
    document.MM_sr = new Array;
    for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) {
            document.MM_sr[j++] = x;
            if (!x.oSrc) x.oSrc = x.src;
            x.src = a[i + 2];
        }
}