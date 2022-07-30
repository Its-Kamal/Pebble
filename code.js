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