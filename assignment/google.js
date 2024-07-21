function submitSearch() {
    // input
    let searchValue = document.getElementById("searchInput").value;
    // text converting capital to small
    let converted = searchValue.toLowerCase();
    // student name array
    let inputs = ["Ayush ", "Prachi", "Nikita", "Yash", "Ketki", "Aachal", "Lucky", "Shraddha", "Shubham", "Ayush L", "Nikhil", "Himanshu", "Soundarya", "Atharv", "Ratnesh","Divyanshu"];
    // if we let output false then the result shows student found or not found
    let output = false;

    // process
    for (let g = 0; g < inputs.length; g++) {
        if (inputs[g].toLowerCase() === converted) {
            output = true;
        }
    }
    // output
    if (output) {
        document.getElementById("results").innerHTML = "The student's record is available.";
        document.getElementById("results").style.color="blue";
    } else {
        document.getElementById("results").innerHTML = "Unable to locate the student's details.";
        document.getElementById("results").style.color="red";
    }
}