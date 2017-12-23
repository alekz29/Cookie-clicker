import manufacturers from './Manufacturers'
import draw from './game'
console.log(manufacturers)

const startGame = (()=> {

    const result = document.querySelector(".result")
    const cookie = document.querySelector(".cookie-ground__big-cookie")

    const state = {
        productCookies: 2,
        cookies: 0,
        count: function() {
            this.cookies += this.productCookies
        }
    }

    cookie.addEventListener('click', () => {
        state.cookies += 1;
        console.log(state.cookies)
        result.innerHTML = state.cookies
    })

    setInterval(()=> {
        state.count()
        result.innerHTML = state.cookies
    }, 1000)


})()