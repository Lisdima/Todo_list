let addCountryButton = document.querySelector('#btn');
let inputCountry = document.querySelector('#input__country')
let listCountry = document.querySelector('.list__country')
let deleteAllButton = document.querySelector('#delete__all')

function addCountry() {
    if (inputCountry.value !== '') {
        let liCountry = document.createElement('li');
        liCountry.innerHTML = inputCountry.value
        listCountry.prepend(liCountry);
        deleteAllButton.style.display = 'block'
        deleteAllButton.addEventListener('click', function() {
            liCountry.remove()
            this.style.display = 'none'
        })
        liCountry.addEventListener('click', function() {
            this.remove()
            if (document.querySelectorAll('li').length == 0) {
                deleteAllButton.style.display = 'none'
            }
        });
        inputCountry.value = '';
        inputCountry.focus()
    }
}



addCountryButton.addEventListener('click', function() {
    addCountry()
})
inputCountry.addEventListener('keydown', function(press){
    if(press.keyCode === 13) {
        addCountry()
    }
})



