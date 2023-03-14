
var clickMe = document.getElementById('clickMe');
var reset =document.getElementById('resetForm');
var body = document.getElementById('main');
var content = document.getElementById('content');

document.getElementById('clickMe').onclick = function () {
    //input 
    var maxVal = 0xFFFFFF;

    var randomNumber = Math.random() * maxVal ;
    
    // đổi từ float sang interger;
    randomNumber = Math.floor(randomNumber);

    // đổi từ integer sang hex 
    var randomColor = randomNumber.toString(16);
    body.style.backgroundColor = "#" + randomColor;
    body.style.transition = '1s';
    reset.classList.remove('none');
    content.style.justifyContent = "space-between";
}
document.getElementById('resetForm').onclick = function () {
    body.style.backgroundColor = '#000000';
    body.style.transition = '1s';
    reset.classList.add('none');
    content.style.justifyContent = "center";
}