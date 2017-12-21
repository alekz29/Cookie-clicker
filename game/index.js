import Forged from './Forged'

console.log(Forged.list)

const startGame = (function () {

    const result = document.querySelector(".result")
    const cookie = document.querySelector(".cookie-ground__big-cookie")

    const state = {
        productCookies: 1,
        cookies: 0,
        count: function () {
            this.cookies += this.productCookies
        }
    }

    cookie.addEventListener('click', function () {
        state.cookies += 1;
        console.log(state.cookies)
        result.innerHTML = state.cookies
    })

    setInterval(function () {
        state.count()
        result.innerHTML = state.cookies
    }, 1000)


})()