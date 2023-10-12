const removeState = () => {
    country = document.getElementById('country').value;
    state = document.getElementById('state')
    country.toUpperCase() != 'UNITED STATES' ?  state.setAttribute('disabled', '') : state.removeAttribute('disabled')
}

let nextMonth = new Date()

nextMonth.setMonth(nextMonth.getMonth() + 1);


const checkDate = () => {
    date = document.getElementById('date');
    let year = date.value.slice(0,4)
    let month = date.value.slice(5,7)
    let day = date.value.slice(8,10)
    let hour = date.value.slice(11,13)
    let minute = date.value.slice(14,17)
    nextDate = new Date(`${year}-${month}-${day}T${hour}:${minute}`)
    console.log(nextDate >= nextMonth)
    if (nextDate >= nextMonth) {
        date.setCustomValidity('')
        date.validity.valid = true
        date.validity.customError = false
    } else {
        date.validity.valid = false
        date.setCustomValidity('Enter at least 1 month in advance from today')
    }
}