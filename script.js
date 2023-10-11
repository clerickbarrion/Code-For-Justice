const removeState = () => {
    country = document.getElementById('country').value;
    state = document.getElementById('state')
    country.toUpperCase() != 'UNITED STATES' ?  state.setAttribute('disabled', '') : state.removeAttribute('disabled')
}