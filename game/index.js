import manufacturers from './manufacturers'
import Draw from './draw'
import count from './count'
import findElement from './findElement'
import clearPreviousInterval from './clearPreviousInterval'
import production from './production'


const startGame = (() => {
    const result = document.querySelector(".result-cookies")
    const cookie = document.querySelector(".big-Cookie")
    const container = document.querySelector('.manufacturers')
    const perSec = document.querySelector('.result-for-sec')
    const drawManufacturers = new Draw()
    drawManufacturers.drawBegin(manufacturers, container)


    const state = {
        productCookies: 0,
        cookies: 4000000,
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
        const manufacturer = findElement(manufacturers, idManufacturer)
        const basisProduction = manufacturer.basisProduction
        let price = manufacturer.price === 0 ? manufacturer.basicPrice : manufacturer.price


        if (state.cookies >= price) {
            const owned = manufacturer.owned += 1
            state.cookies = count.decimal(count.subtract(state.cookies, price))
            result.innerHTML = state.cookies
            manufacturer.price = price += manufacturer.basicPrice
            const produces = manufacturer.produces = count.decimal(basisProduction * owned, 3)
            e.innerHTML = `${drawManufacturers.drawNewManufacturers(manufacturer.img, manufacturer.name, price, produces, owned)}`
            const productCookies = state.productCookies = count.producesForSec(manufacturers)


            perSec.innerHTML = productCookies + ' per sec.'


            const refreshCookies = setInterval(() => {
                state.cookies += count.decimal(production.cookiesInTime(productCookies))
                result.innerHTML = state.cookies
            }, production.speedInterval(productCookies))
            clearPreviousInterval(refreshCookies)
        }

    }


})()
