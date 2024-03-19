const buttons = document.querySelectorAll('.btn');
const submit = document.getElementById('submit');
const container = document.querySelector('.container');
const thankYouCard = document.querySelector('.thank-you-card');
const result = document.getElementById('result')
let value = 0


buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(ifSelect => {
            if(button == ifSelect){
                ifSelect.classList.remove('btn')
                ifSelect.classList.add('btn-select')
            }else{
                ifSelect.classList.remove('btn-select')
                ifSelect.classList.add('btn')
            }
        })
        value = button.textContent
    })
})


submit.addEventListener('click', () => {
    container.classList.add('hidden');
    thankYouCard.classList.remove('hidden');
    result.innerHTML = `
    <p class="result">You selected ${value} out of 5</p>`
})
