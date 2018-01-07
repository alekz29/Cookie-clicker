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
        productCookies: 1,
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
        const owned = manufacturer.owned += 1
        const price = manufacturer.price * owned + manufacturer.price
        const basisProduction = manufacturer.basisProduction
        const produces = manufacturer.produces = Count.decimal(basisProduction * owned)


        e.innerHTML = `<img class="mimg" src=${manufacturer.img}>
                <div>${manufacturer.name}</div>
                <div>${price}</div>
                <div>${produces}</div>
                <div class="owned">${owned}</div>`



        const x = Count.producesForSec(manufacturers)


        //  console.log(listProductCookies)


    }


})()