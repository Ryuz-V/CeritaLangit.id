document.addEventListener("DOMContentLoaded", () => {
  const tempText = document.querySelector(".header-text");
  const mainScroll = document.querySelector(".main-scroll");

  if (!tempText || !mainScroll) return;

  const startTemp = 15;
  const endTemp = -74;

  mainScroll.addEventListener("scroll", () => {
    const scrollTop = mainScroll.scrollTop;
    const maxScroll = mainScroll.scrollHeight - mainScroll.clientHeight;

    let progress = Math.min(scrollTop / maxScroll, 1);
    
    // PERUBAHAN: Progress hanya berubah 30% dari scroll actual
    progress = progress * -0.1; // Ubah angka 0.3 untuk mengatur kecepatan
    
    const currentTemp = Math.round(startTemp + (endTemp - startTemp) * progress);

    tempText.textContent = `${currentTemp}°C`;
  });
});