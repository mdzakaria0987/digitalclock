function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();


    

    if (month === 0) {
        month = `January`
    } else if (month === 1) {
        month = `February`
    } else if (month === 2) {
        month = `March`
    } else if (month === 3) {
        month = `April`
    } else if (month === 4) {
        month = `May`
    } else if (month === 5) {
        month = `June`
    } else if (month === 6) {
        month = `July`
    } else if (month === 7) {
        month = 'August'
    } else if (month === 8) {
        month = `September`
    } else if (month === 9) {
        month = `October`
    } else if (month === 10) {
        month = `November`
    } else if (month === 11) {
        month = `December`
    };


    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    day = day < 10 ? '0' + day : day;

    const finaltime = `${hours} : ${minutes} : ${seconds}`;

    const finalDate = `${day}  ${month}  ${year}`;

    document.querySelector('#time').innerText = finaltime;
    document.querySelector('#date').innerText = finalDate;

    setInterval(digitalClock, 1000);
}
digitalClock();