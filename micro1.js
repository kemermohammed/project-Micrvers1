function breakingRecords(scores) {
    // Write your code here
    let max = scores[0], min = scores[0], maxCount = 0, minCount = 0;
    
    for (let i = 1; i < scores.length; i++) {
        if (max > scores[i]) {
            max = scores[i];
            maxCount++;
        }

        if (min < scores[i]) {
            min = scores[i];
            minCount= minCount + 1;
        }
    }
}

function bonAppetit(bill, k, b) {

    const sum = bill.reduce((r, v) => r + v, 0);
    const result = (sum - bill[k])/2;
    if (b - result === 0) console.log('Bon Appetit');
    else console.log(b - result);
}