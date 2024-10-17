function loadingBar(num) {

    let printLoad = "%".repeat(num / 10);
    let dot = ".".repeat(10 - (num / 10));

    if (num < 100) {
        console.log(`${num}% [${printLoad}${dot}]`);
        console.log("Still loading...");
    } else if (num === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
}
loadingBar(100);
