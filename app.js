const endDate= "31 December 2023 10:00:00 PM";

document.getElementById("endDate").innerText= endDate;
const inputs=document.querySelectorAll("input");


const clock = () => {
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now) / 1000;
    if (diff < 0) return;

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600) % 24;
    const minutes = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff) % 60;

    inputs[0].value = days;
    inputs[1].value = hours < 10 ? "0" + hours : hours;
    inputs[2].value = minutes < 10 ? "0" + minutes : minutes;
    inputs[3].value = seconds < 10 ? "0" + seconds : seconds;
};
clock();

setInterval(() => {
    clock();
},
1000); // for after each 1 sec =1000 ms
