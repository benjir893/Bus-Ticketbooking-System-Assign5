function selecSeats(){
    
    const seatLeft = document.getElementById('seatQuantity');
    
    const seatLeftValue = seatLeft.innerText;
    const remainingSeats = parseInt(seatLeftValue);
    const newRemainingSeats = remainingSeats-1;
    seatLeft.innerText = newRemainingSeats;  
    // ==========================================
    const seat  = document.getElementById('bookedSeatQuantity');
    const seatNumber = seat.innerText;
    const bookedSeatQuantity = parseInt(seatNumber);
    const newBookedSeatQuantity = bookedSeatQuantity + 1;
    seat.innerText = newBookedSeatQuantity;
    //=========================================================
    const price = 550;
    const a1 = document.getElementById('a1');
    const totalTxt = document.getElementById('total');
    const grandTotal = document.getElementById('grandTotal');
    const totalValue = totalTxt.innerText;
    const total = parseInt(totalValue);
    const newTotal = total + price;
    totalTxt.innerText = newTotal;  
    grandTotal.innerText = newTotal;
    a1.disabled = true;
    // =====================
}

function selectSeatsa2(){
// seat left
    const seatLeft = document.getElementById('seatQuantity');
    
    const seatLeftValue = seatLeft.innerText;
    const remainingSeats = parseInt(seatLeftValue);
    const newRemainingSeats = remainingSeats-1;
    seatLeft.innerText = newRemainingSeats;  
    // =========================================seat booked
    const seat  = document.getElementById('bookedSeatQuantity');
    const seatNumber = seat.innerText;
    const bookedSeatQuantity = parseInt(seatNumber);
    const newBookedSeatQuantity = bookedSeatQuantity + 1;
    seat.innerText = newBookedSeatQuantity;
    // ==============================================
    const price = 550;
    const a2 = document.getElementById('a2');
    const totalTxt = document.getElementById('total');
    const grandTotal = document.getElementById('grandTotal');
    const totalValue = totalTxt.innerText;
    const total = parseInt(totalValue);
    const newTotal = total + price;
    totalTxt.innerText = newTotal;  
    grandTotal.innerText = newTotal;
    a2.disabled = true;
    
}
function selectSeatsa3(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    basicTotalCalculation('a3','total','grandTotal');
}

function selectSeatsa4(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    basicTotalCalculation('a4','total','grandTotal');
}

function selectSeatsb1(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    basicTotalCalculation('b1','total','grandTotal');
}
function selectSeatsb2(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    basicTotalCalculation('b2','total','grandTotal');
}
function selectSeatsb3(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    basicTotalCalculation('b3','total','grandTotal');
}
function selectSeatsb4(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    basicTotalCalculation('b4','total','grandTotal');
}

function addCoupon(){
    coupon();
}

// Next button function
function clickOnNextbtn(){
    continueNext();
}
