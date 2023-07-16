const url = 'https://api.genderize.io/?name=';
const user = document.querySelector('#userinput');
const btn = document.querySelector('.btn')
const result = document.querySelector('#gender');

btn.addEventListener('click', async () => {
    result.innerText = 'Loading...';
    if (user.value.trim().length == 0) {
        result.innerText = 'No input';
    }
    else {
        console.log(user.value.trim().replace(/\s+/g, ''))
        try {
            const response = await fetch(url + user.value.trim().replace(/\s+/g, ''));
            const data = await response.json();
            if (data.gender === 'male') {
                result.innerText = data.gender + ' ♂️';
            } else if (data.gender === 'female') {
                result.innerText = data.gender + ' ♀️';
            }
        } catch (err) {
            result.innerText = 'No such gender found . Try again :('
        }
    }
});

