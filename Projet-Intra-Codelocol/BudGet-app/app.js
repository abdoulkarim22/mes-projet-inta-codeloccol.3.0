const numberForm = document.getElementById("Number-form");
const input = document.getElementById("input");
const Valuebalance = document.getElementById("balanceValue");
const Valuebudget = document.getElementById("budgetValue");
// let budget = 0;
// budget = JSON.parse(localStorage.getItem("budget"));
// if (!budget) {
//     localStorage.setItem("budget",)
// }
const budgetexpenses = document.getElementById("Budgetexpenses");
const Budgetexpenseform = document.getElementById("Expenseform");
const inputpleaseyourexpense = document.getElementById("PleaseEnterYourExpense");
const inputexpensesamount = document.getElementById("PleaseEnterYourExpenseAmount");
const letitleexpenses = document.getElementById("Budgetexpensestitle");
const levalueexpenses = document.getElementById("Budgetexpensesvalue");
const btnSubmit = document.getElementById("submit");
const icon = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const Divdesparametre = document.getElementById("divdesparametre");
const tBody = document.getElementById("tbody");

btnSubmit.addEventListener('click', (event) =>{
    event.preventDefault()
        tBody
        tBody.innerHTML += `
        <tr>
            <td>${inputpleaseyourexpense.value}</td>
            <td>${inputexpensesamount.value}</td>
            <td><i class="fa-sharp fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></td>
        </tr>
        `
        inputpleaseyourexpense.value = "";
        inputexpensesamount.value = ""; 
        // letitleexpenses.innerText = inputpleaseyourexpense.value;
        // levalueexpenses.innerText = inputexpensesamount.value + " F";
        // budgetexpenses.innerText = inputexpensesamount.value;
        // inputpleaseyourexpense.value = "";
        // inputexpensesamount.value = ""; 
        // icon.innerHTML = `<i class="fa-sharp fa-solid fa-pen-to-square"></i>`
        // icon2.innerHTML = ` <i class="fa-solid fa-trash"></i>`
        // icon.style.color = "#23c9eb"
        // icon2.style.cursor = "pointer"
})
// icon2.addEventListener('click', (event) =>{
//     if (event) {
//         letitleexpenses.remove()
//         levalueexpenses.remove()
//         icon.remove()
//         icon2.remove()
//         budgetexpenses.innerText = "0"
//     }
   
// })











function budgetForm(element) {
    if (element) {
        Valuebalance.innerText = element;
        Valuebudget.innerText = element;
        input.value = ""
    }

}
numberForm.addEventListener('submit', (e) => {
    e.preventDefault()
    budgetForm(input.value)
})
// ============================================= la chartjs ====================================================