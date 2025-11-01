document.addEventListener("DOMContentLoaded", () => {
  const tempText = document.querySelector(".header-text");
  const mainScroll = document.querySelector(".main-scroll");

  if (!tempText || !mainScroll) return; // safety check

  const startTemp = 15;
  const endTemp = -74;

  // Jalankan setiap kali user scroll di dalam main-scroll
  mainScroll.addEventListener("scroll", () => {
    const scrollTop = mainScroll.scrollTop;
    const maxScroll = mainScroll.scrollHeight - mainScroll.clientHeight;

    const progress = Math.min(scrollTop / maxScroll, 1);
    const currentTemp = Math.round(startTemp + (endTemp - startTemp) * progress);

    tempText.textContent = `${currentTemp}°C`;
  });
});
