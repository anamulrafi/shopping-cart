function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}
function calcualateSubTotal(){
    const currentPhoneTotal = getTextElementById('btn-phone-price');
     const currentCaseTotal = getTextElementById('btn-cover-price');
    
     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
     setTextElementValueById('sub-total', currentSubTotal);

    // tax calculation
    const taxAmountString = (currentSubTotal * .1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
   


}
