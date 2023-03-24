function updateCaseNumber(isIncrease){

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    
    if(isIncrease){
    newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice =  newCaseNumber * 59 ;
    const previousCoverPrice = document.getElementById('btn-cover-price');
    previousCoverPrice.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    
    const newCaseNumber=  updateCaseNumber(true);
    
    updateCaseTotalPrice(newCaseNumber);

    
    // cover price
   /* const previousCoverPrice = document.getElementById('btn-cover-price');
    const previousCoverPriceString = previousCoverPrice.innerText;
    const previousCoverPriceConvertToNumber =parseFloat(previousCoverPriceString);
    
    const updatedCoverPrice = previousCoverPriceConvertToNumber * newCaseNumber;
    previousCoverPrice.innerText = updatedCoverPrice;
    console.log(updatedCoverPrice); */
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);

})

