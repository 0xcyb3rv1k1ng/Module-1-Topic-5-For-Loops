function main(n, gradeArray) {
    var topSt = 0;
    var fourSt = 0;
    var threeSt = 0;
    var failSt = 0;
    var totalG = 0;
    for (i = 0; i < n; i++) {
        cSGrade = gradeArray.shift();
        totalG += cSGrade
        if (cSGrade >= 5) {
            topSt++;
        } else if (cSGrade >= 4) {
            fourSt++;
        } else if (cSGrade >= 3) {
            threeSt++;
        } else {
            failSt++;
        }
    }
    console.log("Top Students: " + ((topSt / n) * 100).toFixed(2) + "%");
    console.log("Between 4.00 and 4.99: " + ((fourSt / n) * 100).toFixed(2) + "%");
    console.log("Between 3.00 and 3.99: " + ((threeSt / n) * 100).toFixed(2) + "%");
    console.log("Fail: " + ((failSt / n) * 100).toFixed(2) + "%");
    console.log("Average: " + (totalG / n).toFixed(2));
}
main(10,[3.00,2.99,5.68,3.01,4,4,6.00,4.50,2.44,5]);