//your JS code here. If required.
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfo = document.getElementById('sizeInfo').querySelector('h1');
    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}

window.addEventListener('resize', updateSize);

updateSize();  // Initial size update