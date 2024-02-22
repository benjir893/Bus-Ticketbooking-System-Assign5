function seatQuantityDetermine(elemnetId){
    const seatLeft = document.getElementById(elemnetId);
    const seatLeftValue = seatLeft.innerText;
    const remainingSeats = parseInt(seatLeftValue);
    const newRemainingSeats = remainingSeats-1;
    seatLeft.innerText = newRemainingSeats;  
}

function QuantityOfBookedSeats(elemnetId){
    const seat  = document.getElementById(elemnetId);
    const seatNumber = seat.innerText;
    const bookedSeatQuantity = parseInt(seatNumber);
    const newBookedSeatQuantity = bookedSeatQuantity + 1;
    seat.innerText = newBookedSeatQuantity;
}

function basicTotalCalculation(btnElement,element2,element3){
    const price = 550;
    const elementbtn = document.getElementById(btnElement);
    const totalTxt = document.getElementById(element2);
    const grandTotal = document.getElementById(element3);
    const totalValue = totalTxt.innerText;
    const total = parseInt(totalValue);
    const newTotal = total + price;
    totalTxt.innerText = newTotal; 
    grandTotal.innerText = newTotal; 
    elementbtn.disabled = true;

}
function coupon(){
    const couponbtn = document.getElementById('couponbtn')
    const inputTxt = document.getElementById('couponInput');
    const inputTxtValue = inputTxt.value;
    const grandTotal = document.getElementById('grandTotal');
    const totalTxt = document.getElementById('total');
    const totalValue = totalTxt.innerText;
    const total = parseInt(totalValue);
    grandTotal.innerText = total;
    if(inputTxtValue === 'couple'){
        const newTotal = total* 0.80;
        grandTotal.innerText = newTotal;
        inputTxt.classList.add('hidden');
        couponbtn.classList.add('hidden');

    }
    else if(inputTxtValue === 'new15'){
        const newTotal = total* 0.85;
        grandTotal.innerText = newTotal;
        inputTxt.classList.add('hidden');
        couponbtn.classList.add('hidden');
    }

}

function continueNext(){
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const a3 = document.getElementById('a3');
    const a4 = document.getElementById('a4');
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const b4 = document.getElementById('b4');
    const a1Txt = a1.innerText;
    const a2Txt = a2.innerText;
    const a3Txt = a3.innerText;
    const a4Txt = a4.innerText;
    const b1Txt = b1.innerText;
    const b2Txt = b2.innerText;
    const b3Txt = b3.innerText;
    const b4Txt = b4.innerText;
    const phone = document.getElementById('phone');
    const phoneValue = phone.value;
    const nextbtn = document.getElementById('nextbtn');
    if((a1.disabled === false) ||( phoneValue=== '')){
        nextbtn.disabled = true;
        
    }
    else{
        nextbtn.disabled = false;
        a1.disabled = true;
    }
    //a2
    if((a2.disabled === false) ||( phoneValue=== '')){
        nextbtn.disabled = true;
        
    }
    else{
        nextbtn.disabled = false;
        a2.disabled = true;
    }

    //a3
    if((a3.disabled === false) ||( phoneValue=== '')){
        nextbtn.disabled = true;
        
    }
    else{
        nextbtn.disabled = false;
        a3.disabled = true;
    }
    //a4
    if((a4.disabled === false) ||( phoneValue=== '')){
        nextbtn.disabled = true;
        
    }
    else{
        nextbtn.disabled = false;
        a4.disabled = true;
    }
    //b1
    if((b1.disabled === false) ||( phoneValue=== '')){
        nextbtn.disabled = true;
        
    }
    else{
        nextbtn.disabled = false;
        b1.disabled = true;
    }
    //b2
    if((b2.disabled === false) ||( phoneValue=== '')){
        nextbtn.disabled = true;
        
    }
    else{
        nextbtn.disabled = false;
        b2.disabled = true;
    }
    //b3
    if((b3.disabled === false) ||( phoneValue=== '')){
        nextbtn.disabled = true;
        
    }
    else{
        nextbtn.disabled = false;
        b3.disabled = true;
    }
    //b4
    if((b4.disabled === false) ||( phoneValue=== '')){
        nextbtn.disabled = true;
        
    }
    else{
        nextbtn.disabled = false;
        b4.disabled = true;
    }
    


}


function showMessage(){
    const messageSection = document.getElementById('messageSection');
    const nextbtn = document.getElementById('nextbtn');
    messageSection.classList.remove('hidden');
    nextbtn.disabled = true;
}
function btnContinueFunction(){
    messageSection.classList.add('hidden');
    const phone = document.getElementById('phone');
    phone.value = '';
    const email = document.getElementById('email');
    email.value = '';
    const name = document.getElementById('name');
    name.value = '';
    const grandTotal = document.getElementById('grandTotal');
    grandTotal.innerText = 0;
    const total = document.getElementById('total');
    total.innerText = 0;

}
