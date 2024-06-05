function generateTable(){
    const myNumber = parseInt(document.getElementById('number1').value);
    const operation = document.getElementById('Operation').value;
    const tbody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    for(let i = 0; i <= 9; i++){
        let result = "";
        switch (operation) {
            case 'add':
                result = myNumber + i;
                break;
            case 'subtract':
                result = myNumber - i;
                break;
            case 'multiply':
                result = myNumber * i;
                break;
            case 'divide':
                result = i !== 0 ? myNumber / i : 'Cannot divide by zero';
                break;
            default:
                break;
        }
        const row = tbody.insertRow();
        const cellNumber = row.insertCell(0);
        const cellResult = row.insertCell(1);
        cellNumber.innerText = i;
        cellResult.innerText = result;
}}