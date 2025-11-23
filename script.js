let donuts = document.querySelectorAll('.donut')
let dnts = document.querySelector('.donuts')
let inp1 = document.querySelector('.inp1')
let button1 = document.querySelector('.inp-commit1')
let inp2 = document.querySelector('.inp2')
let button2 = document.querySelector('.inp-commit2')


button1.addEventListener('click', function() {
    let val1 = inp1.value
    donuts.forEach(donut => {
        donut.style.height = `${val1}px`
    })
})

button2.addEventListener('click', function() {
    let val2 = inp2.value
    dnts.innerHTML = ``
    for (let i = 0; i < val2; i++) {
        
        dnts.innerHTML += `<img src='https://learn.algoritmika.org/uploads/2023/02/donut.png' class='donut'/>`
    }
})


