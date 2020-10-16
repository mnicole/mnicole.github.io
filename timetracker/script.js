const populateLastTime = (lastTime) => document.getElementById('last-time').textContent = lastTime;

const setTime = () => {
    const dateObj = new Date();
    const time = dateObj.toLocaleString(); 
    localStorage.setItem('lastTime', time);
    populateLastTime(time);
}

const getTime = () => {
    const time = localStorage.getItem('lastTime') || 'None';
    populateLastTime(time);
}

const clearTime = () => {
    localStorage.removeItem('lastTime');
    populateLastTime('None');
}

document.addEventListener("DOMContentLoaded", getTime);
