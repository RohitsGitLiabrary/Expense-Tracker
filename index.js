const expnsDesc = document.getElementById("expense-description");
const expnsCatg = document.getElementById("expense-category");
const amount = document.getElementById("amount");
const addExpns = document.getElementById("add-Expense");

addExpns.addEventListener("click", addExpense);

function addExpense() {
  if (expnsDesc.value !== "" && expnsCatg.value !== "" && amount.value !== "") {
    let tbody = document.getElementById("table-body");
    let tr = document.createElement("tr");

    //   Add Description
    let td_desc = document.createElement("td");
    td_desc.textContent = expnsDesc.value;
    tbody.appendChild(tr);
    tr.appendChild(td_desc);

    //   Add Category
    let td_categ = document.createElement("td");
    td_categ.textContent = expnsCatg.value;
    tr.appendChild(td_categ);

    //   Add Amount
    let td_amt = document.createElement("td");
    td_amt.textContent = amount.value;
    tr.appendChild(td_amt);
    clearField();
  } else {
    alert("Fill required field");
  }
}
function clearField() {
  expnsDesc.value = "";
  expnsCatg.selectedIndex = 0;
  amount.value = "";
}
