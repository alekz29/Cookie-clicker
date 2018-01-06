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
        productCookies: 2,
        cookies: 0,
    }

    cookie.addEventListener('click', () => {
        state.cookies += 1;
        result.innerHTML = state.cookies
    })


    setInterval(() => {
        state.cookies = Count.countCookies(state.cookies, state.productCookies)
        result.innerHTML = state.cookies
    }, 1000)

    container.querySelectorAll('.manufacturer').forEach((item) => {
        item.addEventListener('click', (e) => {
            setSum(e.target)


        })
    })
    const setSum = (e) => {
        const idManufacturer = parseInt(e.getAttribute('data-manufacturer'), 10)
        const manufacturer = manufacturers.find(manufacturers => [manufacturers.id]
            .some(id => id === idManufacturer))
        const owned = parseInt(e.querySelector('.owned').innerHTML, 10)

        const sumOwned = manufacturer.sum += 1
        const price = manufacturer.price
        const quanityCookies = manufacturer.quantityCookies
        const produces = Count.decimal(quanityCookies*sumOwned)

        console.log(manufacturer.quantityCookies)
        console.log(sumOwned)
        console.log(price)
        console.log(produces)


        e.innerHTML = `<img class="mimg" src=${manufacturer.img}>
                <div>${manufacturer.name}</div>
                <div>${manufacturer.price * 2}</div>
                <div>${quanityCookies}</div>
                <div class="owned">${sumOwned}</div>`


        // console.log(sumOwned)
        // console.log(manufacturer)

    }


})()