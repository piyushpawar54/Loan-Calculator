//listen for submit
document.getElementById('loan-form').addEventListener('submit',calculateResults);

function calculateResults(e){

    //UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayment = parseFloat(years.value)*12;

    //compute monthly payment
    const x = Math.pow(1+ calculatedInterest, calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1)

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly*calculatedPayment).toFixed(2)
        totalInterest.value = ((monthly*calculatedPayment)-principal).toFixed(2)
    }else{
        showError('Please check your numbers !');
    }

    e.preventDefault()
}

//show error
function showError(error){
    //create element
    const errorDiv = document.createElement('div');
    // get elememts
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //add class
    errorDiv.className = 'alert alert-danger';
    //create textnode and append to div
    errorDiv.appendChild(document.createTextNode(error));
    //insert error above heading
    card.insertBefore(errorDiv,heading);
    //clear error
    setTimeout(clearError,3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}