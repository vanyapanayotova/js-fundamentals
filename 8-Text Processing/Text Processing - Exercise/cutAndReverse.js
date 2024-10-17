function cutAndReverse(text) {
    let rev = text.split('').reverse('').join('')
    let sub = rev.substring(0, rev.length / 2);
    let sub2 = rev.substring(rev.length / 2);
    
    console.log(sub2);
    console.log(sub);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');