import manufacturers from './manufacturers'
import Draw from './draw'
import Count from './count'


const startGame = (() => {
    const result = document.querySelector(".result")
    const cookie = document.querySelector(".cookie-ground__big-cookie")
    const container = document.querySelector('.manufacturers')
    const dr = new Draw()
    dr.draw(manufacturers, container)

    const state = {
        productCookies: 0,
        productCookiesforSec: 1,
        cookies: 3000,
    }

    cookie.addEventListener('click', () => {
        state.cookies += 1;
        result.innerHTML = state.cookies
    })


    const timerGame = setInterval((a,b) => {
        state.cookies = Count.decimal(Count.countCookies(state.cookies, state.productCookiesforSec))
        result.innerHTML = state.cookies
    },1000)


    container.querySelectorAll('.manufacturer').forEach((item) => {
        item.addEventListener('click', (e) => {
            setSum(e.target)


        })
    })
    const setSum = (e) => {
        const idManufacturer = parseInt(e.getAttribute('data-manufacturer'), 10)
        const manufacturer = manufacturers.find(manufacturers => [manufacturers.id]
            .some(id => id === idManufacturer))
        const basisProduction = manufacturer.basisProduction
        let owned = manufacturer.owned
        let price = manufacturer.price


        if (state.cookies >= price) {
            clearInterval(timerGame)
       //     console.log(timerGame)
            const i = setInterval(function(){console.log("a")},1000)
           const x = (i) =>{
                const bla = i-1
                console.log(i)
               console.log(bla)
               clearInterval(bla)
            }
            x(i)
            owned = manufacturer.owned += 1
            price = manufacturer.price * owned
            state.cookies = Count.subtract(state.cookies, price)
            price = manufacturer.price * owned + manufacturer.price

            const produces = manufacturer.produces = Count.decimal(basisProduction * owned)
            e.innerHTML = `<img class="mimg" src=${manufacturer.img}>
                <div>${manufacturer.name}</div>
                <div>${price}</div>
                <div>${produces}</div>
                <div class="owned">${owned}</div>`
            state.productCookies = Count.producesForSec(manufacturers)


        }

    }


})()