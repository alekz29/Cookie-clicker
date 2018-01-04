import manufacturers from './manufacturers'
import Draw from './draw'
import count from './count'



const startGame = (() => {
    const result = document.querySelector(".result")
    const cookie = document.querySelector(".cookie-ground__big-cookie")
    const container = document.querySelector('.manufacturers')
    const d = new Draw()
    d.draw(manufacturers, container)

    const state = {
        productCookies: 2,
        cookies: 0,
    }

    cookie.addEventListener('click', () => {
        state.cookies += 1;
        result.innerHTML = state.cookies
    })


    setInterval(() => {
        state.cookies = count(state.cookies,state.productCookies)
        console.log(state.cookies)
        result.innerHTML = state.cookies
    }, 1000)

    container.querySelectorAll('.manufacturer').forEach((item) => {
        item.addEventListener('click', (e) => {
            setSum(e.target)


        })
    })
    const setSum = (e) => {
        console.log(e.getAttribute('data-manufa'))
        state.productCookies += 1
       //   console.log(state.productCookies)


    }

})()