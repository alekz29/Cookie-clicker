import manufacturers from './Manufacturers'
import Draw from './game'


const startGame = (()=> {

    const result = document.querySelector(".result")
    const cookie = document.querySelector(".cookie-ground__big-cookie")
    const d = new Draw()
    d.draw(manufacturers)

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
       // state.count()
        result.innerHTML = state.cookies
    }, 1000)

})()