function createRow() {
    const name = document.getElementById('name').value;
    const responsibility = document.getElementById('responsibility').value;
    const other = document.getElementById('other').value;

    if (name && responsibility && other) {
        const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerHTML = name;
        cell2.innerHTML = responsibility;
        cell3.innerHTML = other;
        cell4.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`;

        document.getElementById('appForm').reset();
    } else {
        alert('Please fill all fields');
    }
}

function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName('td');

    const name = cells[0].innerHTML;
    const responsibility = cells[1].innerHTML;
    const other = cells[2].innerHTML;

    document.getElementById('name').value = name;
    document.getElementById('responsibility').value = responsibility;
    document.getElementById('other').value = other;

    deleteRow(button);
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function downloadImage() {
    html2canvas(document.querySelector("#dataTable")).then(canvas => {
        const link = document.createElement('a');
        link.download = 'table.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

function downloadPDF() {
    const element = document.getElementById('dataTable');
    html2pdf().from(element).save('table.pdf');
}