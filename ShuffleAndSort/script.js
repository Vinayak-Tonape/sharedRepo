
// Reset table to no rows
function resetTable() {
    let table = document.getElementById("shuffleTable");

    while (table.rows[0]) table.deleteRow(0);
}

//Generate the table
function loadTable(inputArray) {

    resetTable();

    let table = document.getElementById("shuffleTable");
    let bgColorArray = ["#81adc7", "#333333", "#223842", "#d4d4d4", "#72C3DC", "#2B8EAD", "#6F98A8", "#BFBFBF", "#869ba5"];
    let count = 0;

    for (let i = 0; i < 3; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < 3; j++) {
            let cell = row.insertCell(j);
            if (window.innerWidth <= 375) {
                cell.style.borderColor = bgColorArray[inputArray[count] - 1];
            }
            else {
                cell.style.backgroundColor = bgColorArray[inputArray[count] - 1];
            }
            cell.innerHTML = inputArray[count];
            count++;
        }
    }
}


//Generate random array to simulate shuffling
function shuffleTable() {
    let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var ctr = inputArray.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = inputArray[ctr];
        inputArray[ctr] = inputArray[index];
        inputArray[index] = temp;
    }

    loadTable(inputArray);
}


//Sort table
function sortTable() {
    let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    loadTable(inputArray);
}