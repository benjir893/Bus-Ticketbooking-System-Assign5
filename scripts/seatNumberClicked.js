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
    displayBookingInfo('a1', 'metaContainer')
    //===============================================
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
    a1.style.backgroundColor = 'green';
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
    displayBookingInfo('a2', 'metaContainer')
    //===============================================
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
    a2.style.backgroundColor = 'green';
    
}
function selectSeatsa3(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('a3', 'metaContainer')
    basicTotalCalculation('a3','total','grandTotal');
}

function selectSeatsa4(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('a4', 'metaContainer')
    basicTotalCalculation('a4','total','grandTotal');
}

function selectSeatsb1(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('b1', 'metaContainer')
    basicTotalCalculation('b1','total','grandTotal');
}
function selectSeatsb2(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('b2', 'metaContainer')
    basicTotalCalculation('b2','total','grandTotal');
}
function selectSeatsb3(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('b3', 'metaContainer')
    basicTotalCalculation('b3','total','grandTotal');
}
function selectSeatsb4(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('b4', 'metaContainer')
    basicTotalCalculation('b4','total','grandTotal');
}
function selectSeatsc1(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('c1', 'metaContainer')
    basicTotalCalculation('c1','total','grandTotal');
}
function selectSeatsc2(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('c2', 'metaContainer')
    basicTotalCalculation('c2','total','grandTotal');
}
function selectSeatsc3(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('c3', 'metaContainer')
    basicTotalCalculation('c3','total','grandTotal');
}
function selectSeatsc4(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('c4', 'metaContainer')
    basicTotalCalculation('c4','total','grandTotal');
}
function selectSeatsd1(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('d1', 'metaContainer')
    basicTotalCalculation('d1','total','grandTotal');
}
function selectSeatsd2(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('d2', 'metaContainer')
    basicTotalCalculation('d2','total','grandTotal');
}
function selectSeatsd3(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('d3', 'metaContainer')
    basicTotalCalculation('d3','total','grandTotal');
}
function selectSeatsd4(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('d4', 'metaContainer')
    basicTotalCalculation('d4','total','grandTotal');
}
function selectSeatse1(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('e1', 'metaContainer')
    basicTotalCalculation('e1','total','grandTotal');
}
function selectSeatse2(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('e2', 'metaContainer')
    basicTotalCalculation('e2','total','grandTotal');
}
function selectSeatse3(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('e3', 'metaContainer')
    basicTotalCalculation('e3','total','grandTotal');
}
function selectSeatse4(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('e4', 'metaContainer')
    basicTotalCalculation('e4','total','grandTotal');
}
function selectSeatsf1(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('f1', 'metaContainer')
    basicTotalCalculation('f1','total','grandTotal');
}
function selectSeatsf2(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('f2', 'metaContainer')
    basicTotalCalculation('f2','total','grandTotal');
}
function selectSeatsf3(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('f3', 'metaContainer')
    basicTotalCalculation('f3','total','grandTotal');
}
function selectSeatsf4(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('f4', 'metaContainer')
    basicTotalCalculation('f4','total','grandTotal');
}
function selectSeatsg1(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('g1', 'metaContainer')
    basicTotalCalculation('g1','total','grandTotal');
}
function selectSeatsg2(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('g2', 'metaContainer')
    basicTotalCalculation('g2','total','grandTotal');
}
function selectSeatsg3(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('g3', 'metaContainer')
    basicTotalCalculation('g3','total','grandTotal');
}
function selectSeatsg4(){
    seatQuantityDetermine('seatQuantity');
    QuantityOfBookedSeats('bookedSeatQuantity');
    displayBookingInfo('g4', 'metaContainer')
    basicTotalCalculation('g4','total','grandTotal');
}


function addCoupon(){
    coupon();
}

const telephone = document.getElementById('tphone');
telephone.addEventListener('keyup', function(){
    const nextbtn = document.getElementById('nextbtn');
    const phoneValue = telephone.value;
    if(phoneValue === ''){
        nextbtn.disabled = true;
    }
    else
    {
        continueNext();
    }
 });

