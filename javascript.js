function tigger() {
    var clientWidth = document.getElementById('main-container').clientWidth;
    var footerHeight = document.getElementById('footer-box').clientHeight;

    var borderWidth = clientWidth * 0.008;
    var footerFont = footerHeight * 0.5;

    document.getElementById("circle").style.borderWidth = borderWidth.toString() + "px";
    document.getElementById("footer-box").style.borderWidth = borderWidth.toString() + "px";
    document.getElementById("footer-box").style.fontSize = footerFont.toString() + "px";
    for (i = 1; i < 8; i++) {
        var value = "frame" + i.toString();
        document.getElementById(value).style.borderWidth = borderWidth.toString() + "px";
    }


    var modal1 = document.getElementById("myModal1");
    var frame1 = document.getElementById("frame1");

    var modal2 = document.getElementById("myModal2");
    var frame2 = document.getElementById("frame2");

    var modal3 = document.getElementById("myModal3");
    var frame4 = document.getElementById("frame3");

    var modal4 = document.getElementById("myModal4");
    var frame4 = document.getElementById("frame4");

    var modal5 = document.getElementById("myModal5");
    var frame5 = document.getElementById("frame5");

    var modal6 = document.getElementById("myModal6");
    var frame6 = document.getElementById("frame6");

    var modal7 = document.getElementById("myModal7");
    var frame7 = document.getElementById("frame7");


    var span1 = document.getElementById("close1");
    var span2 = document.getElementById("close2");
    var span3 = document.getElementById("close3");
    var span4 = document.getElementById("close4");
    var span5 = document.getElementById("close5");
    var span6 = document.getElementById("close6");
    var span7 = document.getElementById("close7");

    window.onclick = function (event) {
        switch (event.target) {
            case modal1:
                modal1.style.display = "none";
                break;
            case modal2:
                modal2.style.display = "none";
                break;
            case modal3:
                modal3.style.display = "none";
                break;
            case modal4:
                modal4.style.display = "none";
                break;
            case modal5:
                modal5.style.display = "none";
                break;
            case modal6:
                modal6.style.display = "none";
                break;
            case modal7:
                modal7.style.display = "none";
                break;
        }
    }

    frame1.onclick = function () {
        modal1.style.display = "block";
    }

    span1.onclick = function () {
        modal1.style.display = "none";
    }

    frame2.onclick = function () {
        modal2.style.display = "block";
    }

    span2.onclick = function () {
        modal2.style.display = "none";
    }

    frame3.onclick = function () {
        modal3.style.display = "block";
    }

    span3.onclick = function () {
        modal3.style.display = "none";
    }

    frame4.onclick = function () {
        modal4.style.display = "block";
    }

    span4.onclick = function () {
        modal4.style.display = "none";
    }

    frame5.onclick = function () {
        modal5.style.display = "block";
    }

    span5.onclick = function () {
        modal5.style.display = "none";
    }

    frame6.onclick = function () {
        modal6.style.display = "block";
    }

    span6.onclick = function () {
        modal6.style.display = "none";
    }

    frame7.onclick = function () {
        modal7.style.display = "block";
    }

    span7.onclick = function () {
        modal7.style.display = "none";
    }

}
