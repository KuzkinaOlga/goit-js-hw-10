import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import { renderCountries } from './js/tamplets/renderCountries'
import { renderOneCountrie } from './js/tamplets/renderOneCountrie'
import { getRefs } from './js/getRefs';
import debounce from 'lodash.debounce';

const refs = getRefs();
const DEBOUNCE_DELAY = 300;

const userHandlInput = (event) => {
    
    let userInput = event.target.value.trim()
    if (userInput === '') {
        return
    }
    fetchCountries(userInput).then(response => {
        refs.list.innerHTML = '';
        refs.countrieBox.innerHTML = '';
        if (response.length >= 10) {
           return Notify.info('Too many matches found. Please enter a more specific name.')
        }
        if (response.length >= 2 && response.length < 10) {
            const markUp = renderCountries(response).join('');
            refs.list.insertAdjacentHTML('beforeend', markUp)
            return
        }
        const oneCountrieMarkUp = renderOneCountrie(response)
        refs.countrieBox.insertAdjacentHTML('beforeend', oneCountrieMarkUp)
    }).catch(error => {
    return Notify.failure('something wrong!!!')
    })
}

refs.input.addEventListener('input', debounce(userHandlInput, DEBOUNCE_DELAY))
    






