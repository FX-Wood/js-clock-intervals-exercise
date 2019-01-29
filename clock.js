
window.onload = function() {
    const second = document.getElementById("second");
    var secondDegrees = 0;
    var seconds = 0;
    const minute = document.getElementById('minute');
    var minutes = 60;
    var minuteDegrees = 0;
    const hour = document.getElementById('hour')
    var hours = 0;
    var hourDegrees = 0;
    var start = new Date()
    var time;
    var count = 0;

    function refreshTime() {
        seconds = parseInt(Date().split(' ')[4].split(':')[2]);
        minutes = parseInt(Date().split(' ')[4].split(':')[1]);
        hours = parseInt(Date().split(' ')[4].split(':')[0]);

        secondDegrees = seconds * 6;
        minuteDegrees = minute * 6;
        hourDegrees = hours * 30;

        minute.style.transform = `rotate(${minuteDegrees}deg)`;
        hour.style.transform = `rotate(${hourDegrees}deg)`;
    }
    refreshTime()



    function animateClock() {
        var time
        count++
        let newHours = hours
        if (seconds > 59) {
            seconds = 0;
            minutes++
        }
        secondDegrees += 6;
        second.style.transform = `rotate(${secondDegrees}deg)`;
        if (minutes > 59) {
            minuteDegrees += 6;
            minute.style.transform = `rotate(${minuteDegrees}deg)`;
            hours++
        }
        if (newHours > hours) {
            hourDegrees += 30;
            hour.style.transform = `rotate(${hourDegrees}deg)`;
        }
    } 


    setInterval(animateClock, 100)

}




