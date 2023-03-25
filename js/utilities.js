function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function calcualateSubTotal(){
    const currentPhoneTotal = getTextElementById('btn-phone-price');
     const currentCaseTotal = getTextElementById('btn-cover-price');
     const currentSubTotal = currentPhoneTotal + currentCaseTotal;

     const subTotalElement = document.getElementById('sub-total');
      subTotalElement.innerText = currentSubTotal;



}