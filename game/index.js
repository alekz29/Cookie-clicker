import manufacturers from './manufacturers'
import Draw from './draw'
import count from './count'
import findElement from './element'
import clearPreviousInterval from './previousInterval'
import production from './production'
import active from './active'


const startGame = (() => {
    const result = document.querySelector(".result-cookies")
    const bigCookie = document.querySelector(".big-Cookie")
    const container = document.querySelector('.manufacturers')
    const perSec = document.querySelector('.result-for-sec')
    const drawManufacturers = new Draw()
    drawManufacturers.drawBegin(manufacturers, container)


    const state = {
        productCookies: 0,
        cookies: 80,
    }

    bigCookie.addEventListener('click', () => {

        bigCookie.replaceWith(bigCookie)
        state.cookies += 1;
        result.innerHTML = `${state.cookies}`
        active(state.cookies)
    })


    container.querySelectorAll('.manufacturer').forEach((item) => {
        item.addEventListener('click', (e) => {

            setSum(e.target)

        })
    })
    const setSum = (e) => {
        const idManufacturer = parseInt((e.getAttribute('id').match(/\d/g)[0]), 10),
            manufacturer = findElement(manufacturers, idManufacturer),
            basisProduction = manufacturer.basisProduction,
            oldPrice = manufacturer.price === 0 ? manufacturer.basicPrice : manufacturer.price


        if (state.cookies >= oldPrice) {

            const owned = manufacturer.owned += 1,
                produces = manufacturer.produces = count.decimal(basisProduction * owned, 3),
                productCookies = state.productCookies = count.producesForSec(manufacturers),
                cookies = state.cookies = count.decimal(count.subtract(state.cookies, oldPrice)),
                newPrice = manufacturer.price = oldPrice + manufacturer.basicPrice

            result.innerHTML = `${cookies}`
            e.innerHTML = drawManufacturers.drawNewManufacturers(manufacturer.img, manufacturer.name, newPrice, produces, owned)
            perSec.innerHTML = productCookies + ' per sec.'

            active(state.cookies)


            const refreshCookies = setInterval(() => {
                state.cookies = count.wealth(state.cookies, result, productCookies)
                active(state.cookies)

            }, production.speedInterval(productCookies))
            clearPreviousInterval(refreshCookies)


        }

    }


})()
