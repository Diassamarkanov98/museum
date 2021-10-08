const basicLeft = document.getElementById('basic_left_btn');
const basicRight = document.getElementById('basic_right_btn');
const seniorLeft = document.getElementById('senior_left_btn');
const seniorRight = document.getElementById('senior_right_btn');
const basicLeftForm = document.getElementById('basic_minus_form');
const basicRightForm = document.getElementById('basic_plus_form');
const seniorLeftForm = document.getElementById('senior_minus_form');
const seniorRightForm = document.getElementById('senior_plus_form');
let permanentExhibition = document.getElementById('permanentCheck');
let temporaryExhibition = document.getElementById('temporaryCheck');
let combinedExhibition = document.getElementById('combinedCheck');
let basicNum = document.getElementById('basicNum');
let seniorNum = document.getElementById('seniorNum');
let basicNumForm = document.getElementById('basic_number_form');
let seniorNumForm = document.getElementById('senior_number_form');
let total = document.getElementById('total');
let totalForm = document.getElementById('total_form');
let ticketType = document.getElementById('ticket_type');
let overviewSeniorNumber = document.getElementById('overview_sen_ticket_num');
let overviewBasicNumber = document.getElementById('overview_bas_ticket_num');
let ticketTypeForm = document.getElementById('ticket_type_form');
let currentTicketForm = document.getElementById('overview_ticket_type');
let time = document.getElementById('time');
let currentTime = document.getElementById('overview_time');
let date = document.getElementById('date');
let currentDate = document.getElementById('overview_date');


let currentTicketNumber = () => {
    overviewBasicNumber.innerHTML = basicNum.value;
    overviewSeniorNumber.innerHTML = seniorNum.value;
}
function findData() {
    if (localStorage.length > 0){
        total = localStorage.getItem('total') * 1;
        basicNum = localStorage.getItem('basic') * 1;
        seniorNum = localStorge.getItem('senior')* 1;
        ticketTypeForm = localStorage.getItem('ticketType')* 1;
    }
}

function amountTotal() {
    if(permanentExhibition.checked) {
        total.innerHTML = (basicNum.value * 20) + (seniorNum.value * 10);
        totalForm.innerHTML = (basicNum.value * 20) + (seniorNum.value * 10);
        ticketTypeForm.value = "Permanent exhibition";
        currentTicketForm.innerHTML = "Permanent exhibition";
        localStorge.setItem('total', total.toString());
        localStorge.setItem('basic', basicNum.toString());
        localStorge.setItem('senior', seniorNum.toString());
        localStorge.setItem('ticketType', ticketTypeForm.toString());
    } else if (temporaryExhibition.checked){
        total.innerHTML = (basicNum.value * 25) + (seniorNum.value * 12.5);
        totalForm.innerHTML = (basicNum.value * 25) + (seniorNum.value * 12.5);
        ticketTypeForm.value = "Temporary exhibition";
        currentTicketForm.innerHTML = "Temporary exhibition";
        localStorge.setItem('total', total.toString());
        localStorge.setItem('basic', basicNum.toString());
        localStorge.setItem('senior', seniorNum.toString());
        localStorge.setItem('ticketType', ticketTypeForm.toString());
    } else {
        total.innerHTML = (basicNum.value * 40) + (seniorNum.value * 20);
        totalForm.innerHTML = (basicNum.value * 40) + (seniorNum.value * 20);
        ticketTypeForm.value = "Combined Admission";
        currentTicketForm.innerHTML = "Combined Admission";
        localStorge.setItem('total', total.toString());
        localStorge.setItem('basic', basicNum.toString());
        localStorge.setItem('senior', seniorNum.toString());
        localStorge.setItem('ticketType', ticketTypeForm.toString());
    }
};


ticketType.addEventListener('change', (event) => {
    amountTotal();
});


basicLeft.addEventListener('click', (event) => {
    basicNumForm.stepDown();
    amountTotal();
    currentTicketNumber();
});


basicRight.addEventListener('click', (event) => {
    basicNumForm.stepUp();
    amountTotal();
    currentTicketNumber();
});


seniorLeft.addEventListener('click', (event) => {
    seniorNumForm.stepDown();
    amountTotal();
    currentTicketNumber();
});


seniorRight.addEventListener('click', (event) => {
    seniorNumForm.stepUp();
    amountTotal();
    currentTicketNumber();
});


basicLeftForm.addEventListener('click', (event) => {
    basicNum.stepDown();
    basicNumForm.stepDown();
    amountTotal();
    currentTicketNumber();
});


basicRightForm.addEventListener('click', (event) => {
    basicNum.stepUp();
    basicNumForm.stepUp();
    amountTotal();
    currentTicketNumber();
});


seniorLeftForm.addEventListener('click', (event) => {
    seniorNum.stepDown();
    seniorNumForm.stepDown();
    amountTotal();
    currentTicketNumber();
});


seniorRightForm.addEventListener('click', (event) => {
    seniorNum.stepUp();
    seniorNumForm.stepUp();
    amountTotal();
    currentTicketNumber();
});


function unload(){
    if (performance.navigation.type == 1) {
    console.log( "Страница перезагружена" );
    } else {
    console.log( "Страница не перезагружена");
    }
}
ticketTypeForm.addEventListener('change', function (e) {
    if (e.target.value == "Permanent exhibition") {
        permanentExhibition.checked = true;
        amountTotal();
    } else if(e.target.value == "Temporary exhibition"){
        temporaryExhibition.checked = true;
        amountTotal();
    } else {
        combinedExhibition.checked = true;
        amountTotal();
    }
});

date.addEventListener('change', function (e) {
    const options = {weekday: 'long', day: 'numeric', month: 'long'};
    let now = new Date();
    let input = this.value;
    let current = new Date(input);
    if (current > now){
    currentDate.innerHTML = current.toLocaleDateString('eng', options);
    } else {
    return false;
    }
})
amountTotal();
let session = {

}