//deposite balance
document.getElementById('deposite-button').addEventListener('click', function () {
    //get deposite area and calculate deposite
    let previousDepsite = document.getElementById('deposite');

    //get deposite input
    let newDeposite = document.getElementById('deposite-balance');

    //convarting into number
    let previousDepsiteAmount = parseFloat(previousDepsite.innerText);
    let newDepositeAmount = parseFloat(newDeposite.value);

    //adding deposite
    previousDepsite.innerText = previousDepsiteAmount + newDepositeAmount;

    // update Balance area and calculate balance
    let previousBalance = document.getElementById('balance');
    //convert into number
    let previousBalanceAmount = parseFloat(previousBalance.innerText);
    //adding balance 
    previousBalance.innerText = previousBalanceAmount + newDepositeAmount;

    //clear input feild
    newDeposite.value = '';
});


//withdraw balance

document.getElementById('withdraw-button').addEventListener('click', function () {
    //get withdraw area
    let previousWithdraw = document.getElementById('withdraw');

    //get withdraw input
    let newWithdraw = document.getElementById('withdraw-balance');

    //convert into number
    let previousWithdrawAmount = parseFloat(previousWithdraw.innerText);
    let newWithdrawAmount = parseFloat(newWithdraw.value);

    //adding withdraw
    previousWithdraw.innerText = previousWithdrawAmount + newWithdrawAmount;

    //update balance
    let previousBalance = document.getElementById('balance');
    //convert into number
    let previousBalanceAmount = parseFloat(previousBalance.innerText);
    //adding balance 
    previousBalance.innerText = previousBalanceAmount - newWithdrawAmount;

    //clear input feild
    newWithdraw.value = '';
});

