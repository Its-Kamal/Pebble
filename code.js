var yoga_scroll= document.querySelector('#yoga-scroll div');
var z=0;
function togglescrollx() {
    if (z<100) {
        z+=20;
        yoga_scroll.style.transform='translateX(-'+z+'vw)';
        console.log(z);
    }
}
function togglescrolly() {
    if (z>0) {
        z-=20;
        yoga_scroll.style.transform='translateX(-'+z+'vw)';
        console.log(z);
    }
}
var Lname = document.querySelector('#signup label[for="name"]');
var Lphone = document.querySelector('#signup label[for="phone"]');
var namel = document.querySelector('#signup #name');
var phonel = document.querySelector('#signup #phone');
function form_onfocus(x) {
    x.style.transform= "translateY(-2vh)";
    x.style.fontSize='0.8vw';
    x.style.color='white';
}
function form_onfocusout(y) {
    if (y == Lname && namel.value.length>0 || y == Lphone && phonel.value.length>0 ) {
        
    } else {
        y.style.transform= "translateY(0vh)";
        y.style.fontSize='1vw';
        y.style.color='#9daeb6';
    }
    
}
var check_box= document.querySelector('#checkbox');
var checked= document.querySelector('#checkbox i');
var n=0
function check_the_box(){
    if (n==0) {
        checked.style.display='block';
        check_box.style.border='0px solid black';
        check_box.style.background='#0097DE';
        n+=1;
    } else {
        checked.style.display='none';
        check_box.style.border='2px solid white';
        check_box.style.background='transparent';
        n-=1;
    }
}

var mobile = window.matchMedia("(max-width: 390px)");
var myinterval= setInterval(() => {
    function mediaphone(mobile) {
        if (mobile.matches) { // If media query matches
          document.write("This website can only be viewed in a Desktop");
          clearInterval(myinterval);
        }
      }
    mediaphone(mobile)
}, 100);
