function sortAnArrayBy2Criteria(arr) {
    let array = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(array.join('\n'));
}
sortAnArrayBy2Criteria(['Deny', 'test', 'omen', 'Default']);