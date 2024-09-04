document.getElementById('colorInput').addEventListener('input', function() {
    const color = this.value;
    document.getElementById('hexValue').textContent = color;
    document.getElementById('rgbValue').textContent = hexToRgb(color);
});

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}
