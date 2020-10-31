function main(n, num) {
    var oddSum = 0;
    var oddMin = 0;
    var oddMax = 0;
    var evenSum = 0;
    var evenMin = 0;
    var evenMax = 0;
    for (var i = 1; i <= n; i++) {
        let currentValue = num.shift();
        if (i % 2 == 0) {
            evenSum += currentValue;
            if (evenMin > currentValue) {
                evenMin = currentValue;
            }
            if (evenMax < currentValue) {
                evenMax = currentValue;
            }
        } else {
            oddSum += currentValue;
            if (oddMin > currentValue) {
                oddMin = currentValue;
            }
            if (oddMax < currentValue) {
                oddMax = currentValue;
            }
        }
    }
    console.log("Odd Sum: " + oddSum.toFixed(2));
    if (oddMin == 0) {
        console.log("Odd Min: No");
    } else {
        console.log("Odd Min: " + oddMin.toFixed(2));
    }
    if (oddMax == 0) {
        console.log("Odd Max: No");
    } else {
        console.log("Odd Max: " + oddMax.toFixed(2));
    }
    console.log("Even Sum: " + evenSum.toFixed(2));
    if (evenMin == 0) {
        console.log("Even Min: No");
    } else {
        console.log("Even Min: " + evenMin.toFixed(2));
    }
    if (evenMax == 0) {
        console.log("Even Max: No");
    } else {
        console.log("Even Max: " + evenMax.toFixed(2));
    }
}
main(5,[3,-2,8,11,-3]);