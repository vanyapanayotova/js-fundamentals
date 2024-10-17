function lowOrUpp(params) {
    if (params.charCodeAt() >= 97 && params.charCodeAt() <= 122) {
        console.log("lower-case");
    } else {
        console.log("upper-case");
    }
}
lowOrUpp('L');