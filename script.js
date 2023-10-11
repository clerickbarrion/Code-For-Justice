const removeState = () => {
    country = document.getElementById('country').value;
    state = document.getElementById('state')
    country.toUpperCase() != 'UNITED STATES' ?  state.setAttribute('disabled', '') : state.removeAttribute('disabled')
}

let currentDate = new Date()
console.log(currentDate)
currentDate.setMonth(currentDate.getMonth() + 1);
console.log(currentDate)

const checkDate = () => {
    date = document.getElementById('date');
    console.log(date.value)
    console.log(date.value.getTime() >= currentDate.getTime())
    if (date.value.getTime() >= currentDate.getTime()) {
        date.setAttribute('isvalid','true')
    } else {
        date.setCustomValidity('Enter at least 1 month in advance from today');
    }
}