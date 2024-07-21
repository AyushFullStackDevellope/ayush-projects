// let currentCount = 1;
// let brickArray = ['<div class="brick"></div>']
// // function for adding bricks
// function addBrick() {
//     if (currentCount < 10) {
//         currentCount++;
//         brickArray.push('<div class="brick"></div>');
//         document.getElementById("right-container").innerHTML = brickArray;

//     }

//     document.getElementById("count").innerHTML = currentCount;
//     document.getElementById("count").style.color = "blue";
// }
// // functioin for removing bricks
// function removeBrick() {

//     if (currentCount > 1) {
//         currentCount--;
//         brickArray.pop();
//         document.getElementById("right-container").innerHTML = brickArray;
//     }
//     document.getElementById("count").innerHTML = currentCount;
//     document.getElementById("count").style.color = "pink";

// }

let currentCount = 1;
let brickArray = ['<div class="brick"></div>']
// function for adding bricks
function addBrick() {
    if (currentCount < 10) {
        currentCount++;
        brickArray.push('<div class="brick"></div>');
        document.getElementById("right-container").innerHTML = brickArray;

    }

    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "blue";
}
// functioin for removing bricks
function removeBrick() {

    if (currentCount > 1) {
        currentCount--;
        brickArray.pop();
        document.getElementById("right-container").innerHTML = brickArray;
    }
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "pink";

}