function carWash(arr) {

    function action(arr) {
        let value = 0;

        for (let i = 0; i < arr.length; i++) {
            let actions = arr[i];

            switch (actions) {
                case 'soap': value += 10; break;
                case 'water': value = value + (value * 0.2); break;
                case 'vacuum cleaner': value = value + (value * 0.25); break;
                case 'mud': value = value - (value * 0.1); break;
                case 'soap': value = value + (value * 0.1); break;
            }
        } 
        
        return value;
    } 
    
    let value = action(arr);
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);