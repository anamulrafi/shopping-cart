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


document.getElementById('btn-phone-plus').addEventListener('click', function(){
     updatePhoneNumber(true);
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    updatePhoneNumber(false);
})