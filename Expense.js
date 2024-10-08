var text_input = document.getElementById("descp");
var amount_input = document.getElementById("Amt");
var balancevalue = document.getElementById("balance-value");
var historycontent = document.getElementById("history");
var expensevalue = document.getElementById("expense");
var incomevalue = document.getElementById("income");

function balance() {
    var currentbalance = parseInt(balancevalue.innerText.replace('$', ''));
    var amount = parseInt(amount_input.value);
    var currentexpense = parseInt(expensevalue.innerText.replace('$', ''));
    var currentincome = parseInt(incomevalue.innerText.replace('$', ''));

    if (text_input.value === '' || amount_input.value === '') {
        alert("Please fill in the information.");
    } else {
        if (amount > 0) {
            currentbalance += amount;
            currentincome += amount;
            balancevalue.innerText = '$' + currentbalance;
            incomevalue.innerText = '$' + currentincome;
        } else if (amount < 0) {
            currentbalance += amount;
            currentexpense += Math.abs(amount);
            balancevalue.innerText = '$' + currentbalance;
            expensevalue.innerText = '$' + currentexpense;
        }

        historyinfo(text_input.value, amount_input.value);
        text_input.value = '';
        amount_input.value = '';
    }
}

function historyinfo(a, b) {
    historycontent.innerHTML += "<div>" + a + " : $" + b + "</div>";
}
