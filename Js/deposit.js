//step-1: add event  to  the deposit button 
document.getElementById('btn-deposite').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input filed
    //for input field use .value to the value inside the input field
    const depositFiled = document.getElementById('diposit-flied');
    const newdepositAmountString = depositFiled.value;
    const newdepositAmount = parseFloat(newdepositAmountString)

    //step-3: get the current deposit total
    //for non-(element other than input,textarea )use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newdepositAmount;

    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //setp-5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: calcuate current total balance
    const currentBalanceTotal = previousBalanceTotal + newdepositAmount;

    //set the Balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7: clear the deposit felid
    depositFiled.value = '';

})