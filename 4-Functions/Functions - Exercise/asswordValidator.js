function passwordValidator(pass) {
    let length = pass.length;
    let password = pass.split('');
    let numCounter = 0;
    let sybmols = 0;

    for (let i = 0; i < length; i++) {
        let element = password[i].charCodeAt();

        if (element >= 65 && element <= 90 || element >= 97 && element <= 122 || element >= 48 && element <= 57) {

            if (element >= 48 && element <= 57) {
                numCounter++;
            }

        } else {
            sybmols++;
        }
    }

    if (length < 6 || length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (sybmols > 0) {
        console.log("Password must consist only of letters and digits");
    }

    if (numCounter < 2) {
        console.log("Password must have at least 2 digits");
    }

    if (numCounter >= 2 && length >= 6 && length <= 10 && sybmols <= 0) {
        console.log("Password is valid");
    }
}
passwordValidator('Pa$s$s');
