function generate(e) {
    number_rows = document.getElementById('number_row').value;
    number_columns = document.getElementById('number_column').value;


    makeTableVisable();

    tbody = document.getElementsByTagName('tbody')[0];
    clearTbodyChild(tbody);

    for (let i = 0; i < number_rows; i++) {
        tr = document.createElement("tr");
        tbody.appendChild(tr);

        for (let j = 0; j < number_columns; j++) {
            td = document.createElement("td");
            // td.innerText = `${i},${j}`
            td.innerText = generateRandomValue();
            tr.appendChild(td);
        }

    }

    resetInput();
}


function makeTableVisable() {
    table = document.getElementsByTagName('table')[0];
    table.style.visibility = "visible";
}

function resetInput() {

    document.getElementById('number_row').value = "";
    document.getElementById('number_column').value = "";



}

function clearTbodyChild(tbody) {
    // tbody.innerHTML = '';
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }


}

function generateRandomValue() {
    min = 0;
    max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}