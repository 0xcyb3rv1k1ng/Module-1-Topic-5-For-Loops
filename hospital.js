function main(days, numOfPatients) {
    var treated = 0;
    var untreated = 0;
    var numOfDocs = 7;
    var totalTreated = 0;
    var totalUntreated = 0;

    // console.log(numOfPatients);
    // console.log(numOfPatients[0]);

    for (i=0; i < days; i++) {
        if(numOfPatients[0] >= 7) {
            treated = 7;
            untreated = numOfPatients[0] - numOfDocs;
            totalTreated += treated;
            totalUntreated += untreated;
        } else {
            treated = numOfPatients[0];
            totalTreated += treated;
        }
    }
    
    console.log(totalTreated);
    console.log(totalUntreated);

}
//main(9, 20, 549, 247, 291, 933, 244, 880, 168, 849);
//main(9,[20,549,247,291,933,244,880,168,849])
main(4,[7,27,9,1]);

// OUTPUT:  Treated patients: 75.
//          Untreated patients: 4106.

// function main() {
    
// var fruits = (9, 20, 549, 247, 291, 933, 244, 880, 168, 849);
// var ar = fruits.split(', '); // split string on comma space
// console.log( ar );
// }
// main();
// // [ "apple", "orange", "pear", "banana", "raspberry", "peach" ]