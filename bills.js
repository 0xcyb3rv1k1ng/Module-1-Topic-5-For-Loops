function main(numOfMonths, billAmt) {
    var electricity = 0;
    var water = 20;
    var internet = 15;
    var increaseAmt = 0;
    var newOthers = 0;
    var others = 0;
    var totalWater = 0;
    var totalInternet = 0;
    var extraAmt = 0;
    var avgBills = 0;
    for (var i = 0; i < numOfMonths; i++) {
        electricity += billAmt[i];
        totalWater = numOfMonths * water;
        totalInternet = numOfMonths * internet;
        extraAmt = numOfMonths * 35; //175
        others = electricity + extraAmt;
        increaseAmt = others * 0.2; //124.43
        newOthers = others + increaseAmt; // 746.592
        avgBills = (electricity + totalWater + totalInternet + newOthers) / numOfMonths;
    }
    console.log("Electricity: " + electricity.toFixed(2) + " $");
    console.log("Water: " + totalWater.toFixed(2) + " $");
    console.log("Internet: " + totalInternet.toFixed(2) + " $");
    console.log("Other: " + newOthers.toFixed(2) + " $");
    console.log("Average: " + avgBills.toFixed(2) + " $");
}
main(5,[68.63,89.25,132.53,93.53,63.22]);