setInterval(function(){
    
    let timeNow = new Date();

    let hour = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();


    minutes = AtualizaZero(minutes);
    seconds = AtualizaZero(seconds);

    document.getElementById('hora').textContent = hour+':'+minutes+':'+seconds;},1000)

function AtualizaZero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}