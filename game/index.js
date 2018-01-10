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
        cookies: 400,
    }

    cookie.addEventListener('click', () => {
        state.cookies += 1;
        result.innerHTML = state.cookies
    })


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
        let price = manufacturer.price === 0 ? manufacturer.basicPrice : manufacturer.price
        let basicPrice = manufacturer.basicPrice


        if (state.cookies >= price) {
            owned = manufacturer.owned += 1
            state.cookies = Count.decimal(Count.subtract(state.cookies, price))
            result.innerHTML = state.cookies
            manufacturer.price = price += basicPrice

            const produces = manufacturer.produces = Count.decimal(basisProduction * owned)
            e.innerHTML = `<img class="mimg" src=${manufacturer.img}>
                <div>${manufacturer.name}</div>
                <div>${price}</div>
                <div>${produces}</div>
                <div class="owned">${owned}</div>`
            state.productCookies = Count.producesForSec(manufacturers)


            const speedInterval = state.productCookies < 1 ? 1000 * state.productCookies : 1000 / state.productCookies
            const productionCookiesInterval = state.productCookies < 1 ? state.productCookies  * state.productCookies :state.productCookiesforSec

            const refreshCookies = setInterval(() => {
                state.cookies = Count.decimal(Count.countCookies(state.cookies, productionCookiesInterval))
                result.innerHTML = state.cookies
                console.log(productionCookiesInterval)
            }, speedInterval)

            const clearLastInterval = (a) => {
                const previous = Count.subtract(a, 1)
                clearInterval(previous)
            }
            clearLastInterval(refreshCookies)


            console.log(manufacturer)

        }

    }


})()