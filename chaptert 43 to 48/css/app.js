
function show() {
    alert(" Samsung\n\nThank You For purchasing\n\nPrice: 25000\n");
}


function example(eId1, eId2) {
    document.getElementById(eId1).innerHTML = '';
    document.getElementById(eId2).style.visibility = 'hidden';
}


var count=0;
function increase() {
    count += 1;
    document.getElementById('show').innerHTML = count;
}
function decrease() {
    count -= 1;
    document.getElementById('show').innerHTML = count;
}
