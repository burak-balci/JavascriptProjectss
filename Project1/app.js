const name = prompt("Adınızı Giriniz : ");
document.querySelector("#myName").innerHTML = name;
function clock() {
    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    let time = hours + ":" + mins + ":" + secs;

    document.querySelector("#myClock").innerHTML = time + " " + gunler[date.getDay()];
}

setInterval(clock, 100);