function clock() {

    let hrs = document.getElementsByClassName('hr')[0];
    let min = document.getElementsByClassName('mn')[0];
    let sec = document.getElementsByClassName('ss')[0];

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hrs.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
    min.style.transform = `rotate(${6 * minutes}deg)`;
    sec.style.transform = `rotate(${6 * seconds}deg)`;

    let sound = new Audio('sound.mp3')
    sound.play();

}

setInterval(clock, 1000);

