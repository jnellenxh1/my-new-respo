function toggleSpin() {
    const record = document.querySelector(".record");
    const tick = document.querySelector(".tick");

    // Toggle animation state for both record and tick
    const isSpinning = record.style.animationPlayState === "running";
    record.style.animationPlayState = isSpinning ? "paused" : "running";
    tick.style.animationPlayState = isSpinning ? "paused" : "running";
}
