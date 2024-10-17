function cone(r, h) {
    let coneVolume = Math.PI * r * r * h / 3;
    console.log(`volume = ${coneVolume.toFixed(4)}`);
    let nm = (h * h + r * r);
    let area = Math.PI * r * (r + Math.sqrt(nm));
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);