/*
1. add event handler with the withdrew button 
2. get the withdraw amount from the withdraw input flied
2-5. also make sure to convert the input into a number by using parseFloat
3. get previous withdrew total
4. calculate total withdraw amount
4-5. set total withdraw amount
5. get the previous balance total
6.calcuate new balance total
6-5. set the new balance total
7. clear the input flied
*/

//step-1: 
document.getElementById('btn-withdrow').addEventListener('click', function () {
    //step-2:
    const withdrawFlied = document.getElementById('withdraw-filed');
    const newWithDrawAmountString = withdrawFlied.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    //step-7:
    withdrawFlied.value = '';

    if (isNaN(newWithDrawAmount)) {
        alert('please provide a vailed number');
        return;
    }

    //step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);


    //step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(previousBalanceTotal);



    if (newWithDrawAmount > previousBalanceTotal) {
        alert('this is money not enough');
        return;
    }

    //step-4:
    const currentWuthdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWuthdrawTotal;

    // step-6:
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})