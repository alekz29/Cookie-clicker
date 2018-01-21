import manufacturers from './manufacturers'
import Draw from './draw'
import Count from './count'

const startGame = (() => {
    const result = document.querySelector(".result-cookies")
    const cookie = document.querySelector(".big-Cookie")
    const container = document.querySelector('.manufacturers')
    const perSec = document.querySelector('.result-for-sec')
    const drawManufacturers = new Draw()
    drawManufacturers.draw(manufacturers, container)


    const state = {
        productCookies: 0,
        cookies: 4000,
    }

    cookie.addEventListener('click', () => {

        cookie.replaceWith(cookie)
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
            const productCookies = state.productCookies = Count.producesForSec(manufacturers)
            perSec.innerHTML = productCookies + ' per sec.'


            const speedInterval = productCookies < 1 ? 1000 * Math.pow(productCookies * 10, -1) : 1000 / state.productCookies
            const productionCookiesInTime = productCookies < 1 ? 0.1 : 1
            const refreshCookies = setInterval(() => {
                state.cookies = Count.decimal(Count.countCookies(state.cookies, productionCookiesInTime))
                result.innerHTML = state.cookies
            }, speedInterval)

            const clearPreviousInterval = (a) => {
                const previous = Count.subtract(a, 1)
                clearInterval(previous)
            }
            clearPreviousInterval(refreshCookies)

        }

    }


})()