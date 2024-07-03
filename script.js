// script.js
function updateTimeAndDay() {
    const now = new Date();
    const currentTimeUTC = now.toUTCString().split(' ')[4];
    const currentDay = now.toLocaleString('en-us', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

document.addEventListener('DOMContentLoaded', () => {
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
