function partyTime(arr) {
    let list = [];
    partyIndex = arr.indexOf('PARTY');

    if (partyIndex > -1) {
        list = arr.splice(0, partyIndex);
        arr.splice(0, 1);
        for (let i = 0; i < arr.length; i++) {
            let coming = arr[i];    
            let index = list.indexOf(coming);
            if (index > -1) {
                list.splice(list.indexOf(coming), 1);
            }
        }    
    }

    let vip = [];
    let regular = [];

    for (guest of list) {
        firstChar = guest.charAt(0);
        if (firstChar <='9' && firstChar >='0') {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    console.log(list.length);
    for (const guest of vip) {
        console.log(guest);
    }
    for (const guest of regular) {
        console.log(guest);
    }
}
partyTime([
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    '7IK9Yo0h',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])