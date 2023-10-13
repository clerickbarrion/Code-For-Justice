//responsive design
form1 = document.getElementsByClassName('your-info')
form2 = document.getElementsByClassName('community-info')
next = document.getElementById('next')
back = document.getElementById('back')

const windowCheck = () => {
    window.innerWidth <= 1023 ? carousel() : reset();
}

const carousel = () => {
    form1[0].style.display = 'flex'
    form2[0].style.display = 'none'
    next.style.display = 'block'
    back.style.display = 'none'
    
}

const reset = () => {
    form1[0].style.display = 'flex'
    form2[0].style.display = 'flex'
    next.style.display = 'none'
    back.style.display = 'none'
}

const _next = () => {
    form1[0].style.display = 'none'
    form2[0].style.display = 'flex'
    next.style.display = 'none'
    back.style.display = 'block'
}

const _back = () => {
    form1[0].style.display = 'flex'
    form2[0].style.display = 'none'
    next.style.display = 'block'
    back.style.display = 'none'
}


//form validation

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

    nextDate >= nextMonth ? date.setCustomValidity('') : date.setCustomValidity('Enter at least 1 month in advance from today')
}

const response = () => {
    form = window.location.href
    let firstName = ''
    let lastName = ''
    let date = ''

    let firstNameIndex = form.indexOf("first-name=") + "first-name=".length

    while (form[firstNameIndex] !== '&') {
        firstName += form[firstNameIndex]
        firstNameIndex++
    }
    
    let lastNameIndex = form.indexOf("last-name=") + "last-name=".length

    while (form[lastNameIndex] !== '&') {
        lastName += form[lastNameIndex]
        lastNameIndex++
    }

    let dateIndex = form.indexOf("date=") + "date=".length

    while (form[dateIndex] !== '&') {
        date += form[dateIndex]
        dateIndex++
    }

    date = date.replace('%3A', ':')

    date = new Date(date)
    document.getElementById('response').innerText = `Thank you for reaching out to us, ${firstName} ${lastName}, we will visit your community on: ${date}.`
}

if (window.location.href.includes('contact-response')) {
    response()
}
windowCheck()