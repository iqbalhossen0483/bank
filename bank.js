
//get input value for all
function getInput(idName) {
    //get deposit input
    let inputFeild = document.getElementById(idName);
    //convarting into number
    let inputAmount = parseFloat(inputFeild.value);
    //clear input feild
    inputFeild.value = '';
    return inputAmount;
}
//get deposit and withdraw area
function updateAllArea(idName, inputAmount) {
    //get area 
    let area = document.getElementById(idName);
    //convarting into number
    let areaValue = parseFloat(area.innerText);
    //adding deposit
    area.innerText = areaValue + inputAmount;
}
//update balance
function updateBalance(inputAmount, isAdd) {
    //get balance area
    let previousBalance = document.getElementById('balance');
    //convert into number
    let previousBalanceAmount = parseFloat(previousBalance.innerText);
    //adding balance 
    if (isAdd == true) {
        previousBalance.innerText = previousBalanceAmount + inputAmount;
    }
    else {
        previousBalance.innerText = previousBalanceAmount - inputAmount;
    }
}


//deposit balance
document.getElementById('deposit-button').addEventListener('click', function () {
    //get deposit input
    let newdepositAmount = getInput('deposit-balance');
    //check the value
    if (newdepositAmount > 0) {
        //get deposit area
        updateAllArea('deposit', newdepositAmount);

        // update Balance
        updateBalance(newdepositAmount, true);
    }
});


//withdraw balance

document.getElementById('withdraw-button').addEventListener('click', function () {
    //get withdraw input
    let newWithdrawAmount = getInput('withdraw-balance');
    //check the value
    //get balance for checking
    let previousBalance = document.getElementById('balance');
    let previousBalanceAmount = parseFloat(previousBalance.innerText);

    if (newWithdrawAmount > 0 && newWithdrawAmount < previousBalanceAmount) {
        //get withdraw area
        updateAllArea('withdraw', newWithdrawAmount);

        //update balance
        updateBalance(newWithdrawAmount, false);
    }

});

