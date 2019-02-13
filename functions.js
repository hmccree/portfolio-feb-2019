function sayHello(){
    alert("hello");
    }

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    document.getElementById("sidenav").style.background = bgColor;
    }
function randomFont() {
    var fontType = [ "Tangerine", "Impact", "Helvetica", ""];
    var num;
    num=Math.floor(Math.random()*3);
    document.body.style.fontFamily =fontType[num];
    // console.log(num);
    }
function impactify() {
    document.body.style.fontFamily ="Impact"
    // document.body.style.textShadow ="10px"
    document.getElementById("header_name").style.fontFamily ="Impact"
}