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
    elementbtn.style.backgroundColor='green';

}
// booking info
function displayBookingInfo(btnElement, containerElement){
    const element = document.getElementById(btnElement);
    const elementTxt = element.innerText;
    const seatClass = 'Economy';
    const seatPrice ='550 Tk';
    const containerDiv =document.getElementById(containerElement);
    const childContainer = document.createElement('div');
    const containerSeatNumb = document.createElement('p');
    const containerSeatClass = document.createElement('p');
    const containerSeatPrice = document.createElement('p');
    containerSeatNumb.innerText = elementTxt;
    containerSeatClass.innerText = seatClass;
    containerSeatPrice.innerText = seatPrice;
    childContainer.appendChild(containerSeatNumb);
    childContainer.appendChild(containerSeatClass);
    childContainer.appendChild(containerSeatPrice);
    containerDiv.appendChild(childContainer);

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
    else{
        return alert('wrong coupon code');
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
    const c1 = document.getElementById('c1');
    const c2 = document.getElementById('c2');
    const c3 = document.getElementById('c3');
    const c4 = document.getElementById('c4');
    const d1 = document.getElementById('d1');
    const d2 = document.getElementById('d2');
    const d3 = document.getElementById('d3');
    const d4 = document.getElementById('d4');
    const e1 = document.getElementById('e1');
    const e2 = document.getElementById('e2');
    const e3 = document.getElementById('e3');
    const e4 = document.getElementById('e4');
    const f1 = document.getElementById('f1');
    const f2 = document.getElementById('f2');
    const f3 = document.getElementById('f3');
    const f4 = document.getElementById('f4');
    const g1 = document.getElementById('g1');
    const g2 = document.getElementById('g2');
    const g3 = document.getElementById('g3');
    const g4 = document.getElementById('g4');

    const nextbtn = document.getElementById('nextbtn');

    if(a1.disabled=== true || a2.disabled === true){
        nextbtn.disabled = false;
    }
    else if(a3.disabled=== true || a4.disabled === true){
        nextbtn.disabled = false;
    }
    else if(b1.disabled=== true || b2.disabled === true){
        nextbtn.disabled = false;
    }
    else if(b3.disabled=== true || b4.disabled === true){
        nextbtn.disabled = false;
    }
    else if(c1.disabled=== true || c2.disabled === true){
        nextbtn.disabled = false;
    }
    else if(c3.disabled=== true || c4.disabled === true){
        nextbtn.disabled = false;
    }
    else if(d1.disabled=== true || d2.disabled === true){
        nextbtn.disabled = false;
    }
    else if(d3.disabled=== true || d4.disabled === true){
        nextbtn.disabled = false;
    }
    else if(e1.disabled=== true || e2.disabled === true){
        nextbtn.disabled = false;
    }
    else if(e3.disabled=== true || e4.disabled === true){
        nextbtn.disabled = false;
    }
    else if(f1.disabled=== true || f2.disabled === true){
        nextbtn.disabled = false;
    }
    else if(f3.disabled=== true || f4.disabled === true){
        nextbtn.disabled = false;
    }
    else if(g1.disabled=== true || g2.disabled === true){
        nextbtn.disabled = false;
    }
    else if(g3.disabled=== true || g4.disabled === true){
        nextbtn.disabled = false;
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
    const phone = document.getElementById('tphone');
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
