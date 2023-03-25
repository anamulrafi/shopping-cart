function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const numberOfPhoneValueString =phoneNumberField.value;
    const previousNumberOfPhone = parseInt(numberOfPhoneValueString);
 
    let currentNumberOfPhone;
    if(isIncrease){
        currentNumberOfPhone = previousNumberOfPhone+1;    
    }
    else{
         currentNumberOfPhone = previousNumberOfPhone - 1;
    }
    phoneNumberField.value = currentNumberOfPhone;
    return currentNumberOfPhone;
}
function updatePhoneTotalPrice(currentNumberOfPhone){
    const phoneTotalPrice =  currentNumberOfPhone * 1219 ;
    const previousCoverPrice = document.getElementById('btn-cover-price');
    previousCoverPrice.innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
     updatePhoneTotalPrice(newPhoneNumber);
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const newPhoneNumber =  updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
})