interface Trip {
    start: number;
    end: number;
}

const events: Trip[] = [
    { start: new Date("Mar 3, 2023 09:00:00").getTime(), end: new Date("Mar 6, 2023 00:00:00").getTime() },
    { start: new Date("Mar 1, 2024 10:30:00").getTime(), end: new Date("Mar 4, 2024 00:00:00").getTime() },
    { start: new Date("Mar 7, 2025 07:00:00").getTime(), end: new Date("Mar 10, 2025 00:00:00").getTime() },
    { start: new Date("Mar 6, 2026 07:00:00").getTime(), end: new Date("Mar 9, 2026 00:00:00").getTime() },
    { start: new Date("Mar 5, 2027 07:00:00").getTime(), end: new Date("Mar 8, 2027 00:00:00").getTime() },
    { start: new Date("Mar 3, 2028 07:00:00").getTime(), end: new Date("Mar 6, 2028 00:00:00").getTime() },
    { start: new Date("Mar 2, 2029 07:00:00").getTime(), end: new Date("Mar 5, 2029 00:00:00").getTime() },
    { start: new Date("Mar 1, 2030 07:00:00").getTime(), end: new Date("Mar 4, 2030 00:00:00").getTime() },
    { start: new Date("Mar 7, 2031 07:00:00").getTime(), end: new Date("Mar 10, 2031 00:00:00").getTime() },
    { start: new Date("Mar 5, 2032 07:00:00").getTime(), end: new Date("Mar 8, 2032 00:00:00").getTime() }
];

let currentEventIndex = 0;

setInterval(() => {
    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) { return }

    const now = new Date().getTime();
    while (currentEventIndex < events.length && now > events[currentEventIndex].end) {
        currentEventIndex++;
    }

    if (currentEventIndex >= events.length) {
        countdownElement.innerHTML = "Stay tuned!";

        return;
    }

    const currentEvent = events[currentEventIndex];

    if (now < currentEvent.start) {
        const distance = currentEvent.start - now;
        const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
        const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
        const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    } else if (now >= currentEvent.start && now < currentEvent.end) {
        countdownElement.innerHTML = "ENJOY :D";
    }
}, 1000);